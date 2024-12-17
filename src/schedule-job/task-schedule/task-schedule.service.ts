import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { lastValueFrom } from 'rxjs'
import { catchError, map } from 'rxjs/operators';
import { prisma } from '../../database/db';
let token =""
@Injectable()
export class TaskScheduleService {
  constructor(private readonly  httpService: HttpService) {}





////////////////// Queue

@Cron(CronExpression.EVERY_10_SECONDS)
async CronjobUpdateQueue(){
console.log('get token')
this.getAccesstoken()
console.log('Step 1 get patient hold')
const now = new Date().toLocaleString("en-GB", { timeZone: "Asia/Bangkok" });

// แปลงเป็นรูปแบบ dd/mm/yyyy
const [date] = now.split(', ');
//console.log(date)
const results = await prisma.doctor_queue.findMany({
  select: {
    doctor_code:true,
    location_code: true,
    vn: true,
    appt_row_id:true,
    status_lab: true,
    status_xray: true,
    status: true,
  },
  where: {
    appt_date: date, //'17/12/2024',
    status:'STATUS_2',
    action_by:'STATUS_0',
    //status_lab:{not:'0'}
  },
});
if (results.length === 0) { 
    console.log ('not found patient on hold')
}else{
    console.log('Step 2 check result from trakcare')
const updatedResults = await Promise.all(
  results.map(async (item) => {
    const labXrayData = await this.getResultLabXray(item.vn); // เรียก API
    console.log('----')
    console.log(labXrayData)
    console.log('----')
    return {
      ...item, // ข้อมูลเดิม
      StatusLabCode: labXrayData?.StatusLabCode ,
      StatusXrayCode: labXrayData?.StatusXrayCode ,
    };
  }),
);
console.log(updatedResults)
console.log('Step 3 filter for update')
const filteredResults = updatedResults.filter(
  (item) => 
    (item.StatusLabCode !== '1' && item.StatusXrayCode !== '1')
  && (item.vn === 'O685358-67')
);
//console.log(filteredResults)

const updatedStatusResults = filteredResults.map((item) => ({
  ...item, // กระจายค่าข้อมูลเดิม
  status: 'STATUS_0', // เปลี่ยนค่า status เป็น STATUS_0
}));
console.log(updatedStatusResults)


if(token.length > 0){

const queueUpdateData = [
  {
    AppointmentInfo: updatedStatusResults.map((item) => ({
      "DoctorCode": item.doctor_code,
      "LocationCode": item.location_code,
      "VN": item.vn,
       "ApptRowID": item.appt_row_id,
      //  "StatusLab": item.StatusLabCode,
      //  "StatusXray": item.StatusXrayCode,
      // "StatusLab":  "1",
      // "StatusXray":  "1",
      "Status":"0"// กำหนดเป็นค่า 0 ตามที่ต้องการ
    }))
  }
];
console.log('before update')
console.log(queueUpdateData[0])
  //const token = Data.access_token //`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IkNJVmV6Mlk3R0dES2llMWJpUFJwdlVHdUhURDdDWXo2IiwiaWF0IjoxNzMxNTYxMjQwLCJleHAiOjE3MzE1NjQ4NDB9._Dehmz4XXadRi_H9YXlBgmKw9oRjTqO61L8L3u9PKXE`
  const apiURL= `https://mobileapi.hc-hospital.com/api/v1/open-endpoint/queue/update-doctor-queue`;
  const body = queueUpdateData
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token,
    
  };
  const responsefromAPI = await lastValueFrom(
    this.httpService
      .put(apiURL, body, { headers })
      .pipe(
        map((response) => response.data), // Return only the data part of the response
        catchError((error) => {
          console.error('Error', error.response?.data || error.message);
          throw new Error('Failed to call API');
        })
      )


  );
console.log(responsefromAPI)
console.log('Update done')
}
}
}
async getResultLabXray(vn: string) {
  try {
    const response = await firstValueFrom(
      this.httpService.get(
        `https://mobileapi.hc-hospital.com/WaitingResult.php?VN=${vn}`,
      ),
    );

    const waitingResult = response.data?.WaitingResult; // ตรวจสอบและดึงข้อมูลจาก array WaitingResult
    console.log(waitingResult);

    if (waitingResult && waitingResult.length > 0) {
      // ตรวจสอบว่า array มีข้อมูล และดึงค่าจาก element แรก
      const firstResult = waitingResult[0];
      return {
        StatusLabCode: firstResult.StatusLabCode,
        StatusXrayCode: firstResult.StatusXrayCode,
      };
    }
    return { StatusLabCode: null, StatusXrayCode: null }; // กรณีไม่มีข้อมูล
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    return { StatusLabCode: null, StatusXrayCode: null }; // ส่งค่า null ในกรณี error
  }
}

async getAccesstoken(){
    
    
  if(token.length==0){
    console.log('----New Token-----')
    const  response = await firstValueFrom(
      //  this.httpService.get(`${TRAKCARE_APIURL}/getPatientInfoByPID/${xPID}`)
        this.httpService.get(`https://mobileapi.hc-hospital.com/api/v1/open-endpoint/auth/generate-token?client_id=CIVez2Y7GGDKie1biPRpvUGuHTD7CYz6`)
      );
      const Data = response.data
      console.log(Data)
      token = Data.access_token
  }else{
    console.log('----Have Token-----')
    console.log(token)

  }
}
}

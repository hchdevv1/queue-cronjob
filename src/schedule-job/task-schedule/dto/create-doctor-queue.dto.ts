import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class PatientInfoDto {
    @IsString()
    @IsOptional()
    HN: string;

    @IsString()
    @IsOptional()
    Name: string;
}

export class AppointmentInfoDto {
    @IsString()
    @IsOptional()
    VN: string;

    @IsString()
    @IsOptional()
    DoctorCode: string;

    @IsString()
    @IsOptional()
    DoctorName: string;

    @IsString()
    @IsOptional()
    LocationCode: string;

    @IsString()
    @IsOptional()
    LocationName: string;

    @IsString()
    @IsOptional()
    Building: string;

    @IsString()
    @IsOptional()
    Service: string;

    @IsString()
    @IsOptional()
    ApptRowID: string;

    @IsString()
    @IsOptional()
    ApptDate: string;

    @IsString()
    @IsOptional()
    ApptTime: string;

    @IsString()
    @IsOptional()
    ArriveDate: string;

    @IsString()
    @IsOptional()
    ArriveTime: string;

    @IsString()
    @IsOptional()
    QueueNo: string;

    @IsString()
    @IsOptional()
    isEmergency: string;

    @IsString()
    @IsOptional()
    lang: string;

    @IsString()
    @IsOptional()
    Status: string;

    @IsString()
    @IsOptional()
    StatusLab: string;

    @IsString()
    @IsOptional()
    StatusXray: string;
}

export class PatientAppointmentDto {
    @ValidateNested()
    @Type(() => PatientInfoDto)
    @IsOptional()
    PatientInfo: PatientInfoDto;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AppointmentInfoDto)
    @IsOptional()
    AppointmentInfo: AppointmentInfoDto[];
}

export class PatientAppointmentListDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PatientAppointmentDto)
    @IsOptional()
    appointments: PatientAppointmentDto[];
}

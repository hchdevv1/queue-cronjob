import { Controller, Get } from '@nestjs/common';
import { TaskScheduleService } from './task-schedule.service';
@Controller('/api/task-schedule')
export class TaskScheduleController {
  constructor(private readonly taskScheduleService: TaskScheduleService) {}



  @Get()
  findAll() {
    return 'Service update status queue';
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return 'KKKK'// this.taskScheduleService.findOne(+id);
  // }



}

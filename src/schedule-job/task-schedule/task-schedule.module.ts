import { Module } from '@nestjs/common';
import { TaskScheduleService } from './task-schedule.service';
import { TaskScheduleController } from './task-schedule.controller';
import { ScheduleModule } from '@nestjs/schedule';
import {HttpModule} from '@nestjs/axios'

@Module({
  imports: [ ScheduleModule.forRoot(), HttpModule ],
  controllers: [TaskScheduleController],
  providers: [TaskScheduleService],
})
export class TaskScheduleModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskScheduleModule} from './schedule-job/task-schedule/task-schedule.module';
@Module({
  imports: [ TaskScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

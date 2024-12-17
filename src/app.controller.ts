import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api')
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get('/api/open-endpoint/auth/generate-token')
  // generatetoken(): string {
  //   return this.appService.generatetoken();
  // }
}

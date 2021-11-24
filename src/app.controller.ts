import { Controller, Get } from '@nestjs/common';
import { HelloDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HelloDto {
    return {
      greeting: this.appService.getHello()
    }
  }
}

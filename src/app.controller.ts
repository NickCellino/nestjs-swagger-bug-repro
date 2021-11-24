import { Controller, Get } from '@nestjs/common';
import { HelloDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * This endpoint sends a greeting!
   */
  @Get()
  getHello(): HelloDto {
    return {
      greeting: this.appService.getHello(),
    };
  }
}

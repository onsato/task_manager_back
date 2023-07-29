import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  getTaskName() {
    return { taskName: '反映されてますか？' };
  }
}

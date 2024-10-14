import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface IndexResponse {
  version: string;
  message: string;
  status: string;
  author: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex(): IndexResponse {
    return {
      version: '0.1.0',
      message: 'Welcome to core-stack API',
      status: 'healthy',
      author: 'github.com/jstnmthw',
    };
  }
}

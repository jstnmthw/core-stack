import { Controller, Get } from '@nestjs/common';

interface IndexResponse {
  version: string;
  message: string;
  status: string;
  author: string;
}

@Controller()
export class AppController {
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

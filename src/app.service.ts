import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Send a RabbitMQ message

  getHello(): string {
    return 'Hello World!';
  }
}

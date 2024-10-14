import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';
import { UsersModule } from './users/users.module';
import { AppConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AppConfigModule, UsersModule, RabbitMQModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

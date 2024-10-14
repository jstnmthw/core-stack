import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        await typeOrmConfig(configService),
      inject: [ConfigService], // Inject the ConfigService
    }),
  ],
})
export class AppConfigModule {}

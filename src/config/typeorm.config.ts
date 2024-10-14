import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const typeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  return {
    type: configService.get<string>('DB_TYPE', 'mysql') as 'mysql', // Default to 'mysql'
    host: configService.get<string>('DB_HOST', 'localhost'),
    port: configService.get<number>('DB_PORT', 3306),
    username: configService.get<string>('DB_USER', 'root'),
    password: configService.get<string>('DB_PASSWORD', 'root'),
    database: configService.get<string>('DB_NAME', 'test'),
    entities: [],
    synchronize: true,
  };
};

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const typeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'app_db',
  entities: [],
  synchronize: true,
});

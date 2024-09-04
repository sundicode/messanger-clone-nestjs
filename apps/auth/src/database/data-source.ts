import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
config();
const configService = new ConfigService();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: configService.getOrThrow('POSTGRES_URI'),
  password: configService.getOrThrow('POSTGRES_PASSWORD'),
  host: configService.getOrThrow('POSTGRES_HOST'),
  entities: [UserEntity],
  migrations: ['apps/auth/database/migrations/*'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

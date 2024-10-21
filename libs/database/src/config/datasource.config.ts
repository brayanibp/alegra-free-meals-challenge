// libs/database/src/typeorm.config.ts
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
// import { join } from 'path';

export const typeOrmConfig = (
  configService: ConfigService,
): DataSourceOptions => ({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USER'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  // entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  synchronize: false, // Set to true only in development
  // migrations: [join(__dirname, '/../migrations/*{.ts,.js}')],
  logging: configService.get<boolean>('DATABASE_LOGGING'),
});

// Create a DataSource instance for migrations and CLI
const configService = new ConfigService();
export const AppDataSource = new DataSource(typeOrmConfig(configService));

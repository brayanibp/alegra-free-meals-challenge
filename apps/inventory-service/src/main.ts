import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { InventoryServiceModule } from './inventory-service.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    InventoryServiceModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'inventory-service',
        protoPath: join(__dirname, '../shared/protos/inventory.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();

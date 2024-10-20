import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { InventoryServiceModule } from './inventory-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    InventoryServiceModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'inventory',
        protoPath: 'libs/proto-definitions/src/inventory.proto',
        url: 'localhost:5000',
      },
    },
  );
  await app.listen();
}
bootstrap();

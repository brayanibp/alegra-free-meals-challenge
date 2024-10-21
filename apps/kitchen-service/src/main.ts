import { NestFactory } from '@nestjs/core';
import { KitchenServiceModule } from './kitchen-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { KITCHEN_PACKAGE_NAME } from '@app/proto-definitions/generated/kitchen';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    KitchenServiceModule,
    {
      transport: Transport.GRPC,
      options: {
        package: KITCHEN_PACKAGE_NAME,
        protoPath: 'libs/proto-definitions/src/kitchen.proto',
        url: 'localhost:5001',
      },
    },
  );
  await app.listen();
}
bootstrap();

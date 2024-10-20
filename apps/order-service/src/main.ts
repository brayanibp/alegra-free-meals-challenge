import { NestFactory } from '@nestjs/core';
import { OrderServiceModule } from './order-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ORDER_PACKAGE_NAME } from '@app/proto-definitions/generated/order';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderServiceModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ORDER_PACKAGE_NAME,
        protoPath: 'libs/proto-definitions/src/order.proto',
      },
    },
  );
  await app.listen();
}
bootstrap();

import { Module } from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import { KitchenController } from './kitchen.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  KITCHEN_PACKAGE_NAME,
  KITCHEN_SERVICE_NAME,
} from '@app/proto-definitions/generated/kitchen';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: KITCHEN_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: KITCHEN_PACKAGE_NAME,
          protoPath: 'libs/proto-definitions/src/kitchen.proto',
          url: 'localhost:5001',
        },
      },
    ]),
  ],
  controllers: [KitchenController],
  providers: [KitchenService],
})
export class KitchenModule {}

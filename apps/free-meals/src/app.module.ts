import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  INVENTORY_PACKAGE_NAME,
  INVENTORY_SERVICE_NAME,
} from '@app/proto-definitions/generated/inventory';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: INVENTORY_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: INVENTORY_PACKAGE_NAME,
          protoPath: 'libs/proto-definitions/src/inventory.proto',
          url: 'localhost:5000',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

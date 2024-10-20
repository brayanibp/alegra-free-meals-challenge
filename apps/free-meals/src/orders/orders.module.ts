import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule } from '@nestjs/microservices';
import {
  ORDER_PACKAGE_NAME,
  ORDERS_SERVICE_NAME,
} from '@app/proto-definitions/generated/order';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ORDERS_SERVICE_NAME,
        options: {
          package: ORDER_PACKAGE_NAME,
          protoPath: 'libs/proto-definitions/src/order.proto',
          url: 'localhost:5002',
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INVENTORY_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'inventory',
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

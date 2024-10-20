import { INVENTORY_SERVICE_NAME } from '@app/proto-definitions/generated/inventory';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('INVENTORY_SERVICE') private inventoryService: ClientGrpc,
  ) {}

  getInventory() {
    const service = this.inventoryService.getClientByServiceName(
      INVENTORY_SERVICE_NAME,
    );
    console.log(service);
    return 'Hello World!';
  }
}

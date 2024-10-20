import {
  INVENTORY_SERVICE_NAME,
  InventoryServiceClient,
} from '@app/proto-definitions/generated/inventory';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  private inventoryService: InventoryServiceClient;
  constructor(@Inject(INVENTORY_SERVICE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.inventoryService = this.client.getService<InventoryServiceClient>(
      INVENTORY_SERVICE_NAME,
    );
  }

  getInventory() {
    const inventory = this.inventoryService.getInventory({});
    console.log(inventory);
    return 'Hello World!';
  }
}

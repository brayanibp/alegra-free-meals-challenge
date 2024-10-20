import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  Inventory,
  INVENTORY_SERVICE_NAME,
  InventoryHistory,
  InventoryServiceClient,
} from '@app/proto-definitions/generated/inventory';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class InventoryService implements OnModuleInit {
  private inventoryService: InventoryServiceClient;

  constructor(@Inject(INVENTORY_SERVICE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.inventoryService = this.client.getService<InventoryServiceClient>(
      INVENTORY_SERVICE_NAME,
    );
  }

  getInventory(): Observable<Inventory> {
    return this.inventoryService.getInventory({});
  }

  refillInventory({ id }) {
    return this.inventoryService.refillProduct({
      id: id,
    });
  }

  checkAvailability({ id, name, amount }) {
    return this.inventoryService.checkForAvailability({
      id: id,
      name: name,
      amount: amount,
    });
  }

  setInventoryHistoryPoint({ list }: Inventory) {
    return this.inventoryService.setInventoryHistoryPoint({ list });
  }

  getInventoryHistory(): Observable<InventoryHistory> {
    return this.inventoryService.getInventoryHistory({});
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}

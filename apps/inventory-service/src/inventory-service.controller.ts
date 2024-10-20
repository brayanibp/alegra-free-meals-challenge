import { Controller } from '@nestjs/common';
import { InventoryServiceService } from './inventory-service.service';
import {
  Inventory,
  InventoryHistoryPoint,
  InventoryServiceControllerMethods,
  IsAvailable,
  Product,
  ProductID,
  InventoryServiceController as ProtoInventoryServiceController,
} from '@app/proto-definitions/generated/inventory';

@Controller()
@InventoryServiceControllerMethods()
export class InventoryServiceController
  implements ProtoInventoryServiceController
{
  constructor(
    private readonly inventoryServiceService: InventoryServiceService,
  ) {}

  getInventory(): Inventory {
    console.log('getInventory');
    return this.inventoryServiceService.getInventory();
  }

  refillProduct(request: ProductID): Product {
    return this.inventoryServiceService.refillProduct(request);
  }

  checkForAvailability(request: Product): IsAvailable {
    return this.checkForAvailability(request);
  }

  setInventoryHistoryPoint(request: Inventory): InventoryHistoryPoint {
    return this.inventoryServiceService.setInventoryHistoryPoint(request);
  }

  getInventoryHistory() {
    return this.inventoryServiceService.getInventoryHistory();
  }
}

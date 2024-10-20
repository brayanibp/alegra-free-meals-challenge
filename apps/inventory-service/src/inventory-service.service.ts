import { Injectable } from '@nestjs/common';
import {
  ProductID,
  Product,
  Inventory,
  InventoryHistoryPoint,
  InventoryHistory,
  IsAvailable,
} from '@app/proto-definitions';

@Injectable()
export class InventoryServiceService {
  getHello(): string {
    return 'Hello World!';
  }

  GetInventory(): Inventory {
    const inventory = new Inventory();
    return inventory;
  }

  RefillProduct(productID: ProductID): Product {
    const ID = productID.getId();
    const product = new Product();
    product.setId(ID);
    product.setName('chicken');
    product.setAmount(5);
    return product;
  }

  CheckForAvailability(product: Product): IsAvailable {
    const isAvailable = new IsAvailable();
    if (product) {
      isAvailable.setIsAvailable(true);
      return isAvailable;
    }
    isAvailable.setIsAvailable(false);
    return isAvailable;
  }

  SetInventoryHistoryPoint(product: Product[]): InventoryHistoryPoint {
    // initialize history point
    const inventoryHistoryPoint = new InventoryHistoryPoint();

    // set history point
    inventoryHistoryPoint.setListList(product);
    inventoryHistoryPoint.setCreatedAt(new Date().toISOString());

    // return history point
    return inventoryHistoryPoint;
  }

  GetInventoryHistory(): InventoryHistory {
    return new InventoryHistory();
  }
}

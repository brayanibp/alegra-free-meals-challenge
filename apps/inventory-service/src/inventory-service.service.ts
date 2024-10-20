import { Injectable } from '@nestjs/common';
import {
  Inventory,
  ProductID,
  Product,
  InventoryHistory,
  InventoryHistoryPoint,
  IsAvailable,
} from '@app/proto-definitions/generated/inventory';

@Injectable()
export class InventoryServiceService {
  getInventory(): Inventory {
    const inventory: Inventory = {
      list: [
        {
          id: 1,
          name: 'chicken',
          amount: 5,
        },
        {
          id: 2,
          name: 'egg',
          amount: 10,
        },
      ],
    };

    console.log(inventory);

    return inventory;
  }

  refillProduct(productID: ProductID): Product {
    const ID = productID.id;
    const product: Product = {
      id: ID,
      name: 'chicken',
      amount: 5,
    };
    return product;
  }

  checkForAvailability(product: Product): IsAvailable {
    const isAvailable: IsAvailable = { isAvailable: true };
    if (product) {
      return isAvailable;
    }
    isAvailable.isAvailable = false;
    return isAvailable;
  }

  setInventoryHistoryPoint(products: Inventory): InventoryHistoryPoint {
    // initialize history point
    const inventoryHistoryPoint: InventoryHistoryPoint = {
      id: 1,
      list: [...products.list],
      createdAt: new Date().toISOString(),
    };

    // return history point
    return inventoryHistoryPoint;
  }

  getInventoryHistory(): InventoryHistory {
    const historical: InventoryHistory = { history: [] };
    historical.history.push(this.setInventoryHistoryPoint(this.getInventory()));
    return historical;
  }
}

import { Controller, Get, Post, Patch } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import {
  Inventory,
  InventoryHistory,
  InventoryHistoryPoint,
  Product,
  ProductID,
} from '@app/proto-definitions/generated/inventory';
import { Observable } from 'rxjs';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('/')
  getInventory() {
    try {
      return this.inventoryService.getInventory();
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  @Patch('/refill')
  refillProduct(request: ProductID) {
    try {
      return this.inventoryService.refillInventory(request);
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  @Get('/check-availability')
  checkForAvailability(request: Product) {
    try {
      return this.inventoryService.checkAvailability(request);
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  @Post('/save-inventory-history')
  setInventoryHistoryPoint(
    request: Inventory,
  ): Observable<InventoryHistoryPoint> {
    try {
      return this.inventoryService.setInventoryHistoryPoint(request);
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  @Get('/get-inventory-history')
  getInventoryHistory(): Observable<InventoryHistory> {
    try {
      return this.inventoryService.getInventoryHistory();
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }
}

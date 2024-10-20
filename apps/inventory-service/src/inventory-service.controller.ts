import { Controller } from '@nestjs/common';
import { InventoryServiceService } from './inventory-service.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class InventoryServiceController {
  constructor(
    private readonly inventoryServiceService: InventoryServiceService,
  ) {}

  @EventPattern('GetInventory')
  getInventory() {
    console.log('GetInventory');
    console.log(this.inventoryServiceService.GetInventory());
    return this.inventoryServiceService.GetInventory();
  }
}

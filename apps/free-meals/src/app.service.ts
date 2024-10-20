import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('INVENTORY_SERVICE') private inventoryService: ClientProxy,
  ) {}
  getHello(): string {
    this.inventoryService.emit('GetInventory', {});
    return 'Hello World AAA!';
  }
}

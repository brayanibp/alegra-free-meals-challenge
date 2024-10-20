import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { AppController } from './app.controller';
import { KitchenModule } from './kitchen/kitchen.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [InventoryModule, KitchenModule, OrdersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

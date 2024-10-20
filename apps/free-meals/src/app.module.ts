import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { AppController } from './app.controller';
import { KitchenModule } from './kitchen/kitchen.module';

@Module({
  imports: [InventoryModule, KitchenModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

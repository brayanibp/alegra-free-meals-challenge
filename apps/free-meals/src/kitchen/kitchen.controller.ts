import { Controller, Get } from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import {
  KitchenOrder,
  Orders,
  RecipeID,
  RecipesList,
} from '@app/proto-definitions/generated/kitchen';
import { Observable } from 'rxjs';

@Controller('kitchen')
export class KitchenController {
  constructor(private readonly kitchenService: KitchenService) {}

  processOrder(request: RecipeID): Observable<KitchenOrder> {
    try {
      return this.kitchenService.processOrder(request);
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getOrders(): Observable<Orders> {
    try {
      return this.kitchenService.getOrders();
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  @Get('/recipes')
  getRecipes(): Observable<RecipesList> {
    try {
      return this.kitchenService.getRecipes();
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }
}

import { Controller } from '@nestjs/common';
import { KitchenServiceService } from './kitchen-service.service';
import {
  KitchenOrder,
  KitchenServiceControllerMethods,
  Orders,
  KitchenServiceController as ProtoKitchenServiceController,
  RecipeID,
  RecipesList,
} from '@app/proto-definitions/generated/kitchen';

@Controller()
@KitchenServiceControllerMethods()
export class KitchenServiceController implements ProtoKitchenServiceController {
  constructor(private readonly kitchenServiceService: KitchenServiceService) {}

  processOrder(request: RecipeID): KitchenOrder {
    try {
      const order = this.kitchenServiceService.processOrder(request);
      return order;
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getOrders(): Orders {
    try {
      const orders = this.kitchenServiceService.getOrders();
      return orders;
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getRecipes(): RecipesList {
    try {
      const recipes = this.kitchenServiceService.getRecipes();
      return recipes;
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }
}

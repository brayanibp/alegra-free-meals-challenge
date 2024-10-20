import {
  KITCHEN_SERVICE_NAME,
  KitchenOrder,
  KitchenServiceClient,
  Orders,
  RecipeID,
  RecipesList,
} from '@app/proto-definitions/generated/kitchen';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class KitchenService implements OnModuleInit {
  private kitchenService: KitchenServiceClient;

  constructor(@Inject(KITCHEN_SERVICE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.kitchenService =
      this.client.getService<KitchenServiceClient>(KITCHEN_SERVICE_NAME);
  }

  processOrder(recipeID: RecipeID): Observable<KitchenOrder> {
    try {
      return this.kitchenService.processOrder(recipeID);
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getOrders(): Observable<Orders> {
    try {
      return this.kitchenService.getOrders({});
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getRecipes(): Observable<RecipesList> {
    try {
      return this.kitchenService.getRecipes({});
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }
}

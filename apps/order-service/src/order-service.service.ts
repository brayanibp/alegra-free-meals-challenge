import { Recipe } from '@app/proto-definitions/generated/kitchen';
import {
  Order,
  OrderID,
  OrderList,
} from '@app/proto-definitions/generated/order';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderServiceService {
  putOrder(): OrderID {
    try {
      return { id: 1 };
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getOrders(): OrderList {
    return {
      orders: [
        this.getOrder({ id: 1 }),
        this.getOrder({ id: 2 }),
        this.getOrder({ id: 3 }),
        this.getOrder({ id: 4 }),
      ],
    };
  }

  getOrder(request: OrderID): Order {
    try {
      const recipe: Recipe = {
        id: 1,
        name: 'Chicken Salad',
        ingredients: [
          {
            id: 1,
            amount: 0.2,
            name: 'chicken',
          },
          {
            id: 2,
            amount: 1,
            name: 'lettuce',
          },
          {
            id: 3,
            amount: 1,
            name: 'tomato',
          },
          {
            id: 4,
            amount: 0.5,
            name: 'onion',
          },
        ],
      };
      const order: Order = {
        id: request.id,
        meal: recipe,
      };
      return order;
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }
}

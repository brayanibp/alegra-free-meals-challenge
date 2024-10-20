import {
  KitchenOrder,
  Orders,
  Recipe,
  RecipeID,
  RecipesList,
} from '@app/proto-definitions/generated/kitchen';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KitchenServiceService {
  processOrder(recipeID: RecipeID): KitchenOrder {
    try {
      const repice = this.getRecipe(recipeID.id);
      const kitchenOrder: KitchenOrder = {
        id: 1,
        order: repice,
        createdAt: new Date().toISOString(),
        completedAt: new Date().toISOString(),
      };
      return kitchenOrder;
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getOrders(): Orders {
    // returns an orders list
    return {
      orders: [
        {
          id: 1,
          order: this.getRecipe(1),
          createdAt: new Date().toISOString(),
          completedAt: new Date().toISOString(),
        },
        {
          id: 2,
          order: this.getRecipe(2),
          createdAt: new Date().toISOString(),
          completedAt: new Date().toISOString(),
        },
        {
          id: 3,
          order: this.getRecipe(3),
          createdAt: new Date().toISOString(),
          completedAt: new Date().toISOString(),
        },
      ],
    };
  }

  getRecipes(): RecipesList {
    return {
      recipes: [
        {
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
        },
        {
          id: 2,
          name: 'Rice with Meat',
          ingredients: [
            {
              id: 0,
              amount: 0.2,
              name: 'meat',
            },
            {
              id: 0,
              amount: 1,
              name: 'rice',
            },
            {
              id: 0,
              amount: 1,
              name: 'tomato',
            },
            {
              id: 0,
              amount: 1,
              name: 'onion',
            },
            {
              id: 0,
              amount: 0.01,
              name: 'ketchup',
            },
          ],
        },
        {
          id: 3,
          name: 'Chicken Tacos',
          ingredients: [
            {
              id: 0,
              amount: 0.2,
              name: 'chicken',
            },
            {
              id: 0,
              amount: 1,
              name: 'tomato',
            },
            {
              id: 0,
              amount: 0.5,
              name: 'onion',
            },
            {
              id: 0,
              amount: 1,
              name: 'lettuce',
            },
            {
              id: 0,
              amount: 0.01,
              name: 'ketchup',
            },
          ],
        },
        {
          id: 4,
          name: 'Baked Potatoes with Cheese',
          ingredients: [
            {
              id: 0,
              amount: 2,
              name: 'potatoes',
            },
            {
              id: 0,
              amount: 0.1,
              name: 'cheese',
            },
            {
              id: 0,
              amount: 0.5,
              name: 'onion',
            },
            {
              id: 0,
              amount: 0.01,
              name: 'ketchup',
            },
          ],
        },
        {
          id: 5,
          name: 'Rice with Vegetables',
          ingredients: [
            {
              id: 0,
              amount: 1,
              name: 'rice',
            },
            {
              id: 0,
              amount: 1,
              name: 'tomato',
            },
            {
              id: 0,
              amount: 1,
              name: 'onion',
            },
            {
              id: 0,
              amount: 1,
              name: 'lemon',
            },
            {
              id: 0,
              amount: 1,
              name: 'lettuce (optional)',
            },
          ],
        },
        {
          id: 6,
          name: 'Potato Omelette',
          ingredients: [
            {
              id: 0,
              amount: 3,
              name: 'potatoes',
            },
            {
              id: 0,
              amount: 1,
              name: 'onion',
            },
            {
              id: 0,
              amount: 2,
              name: 'eggs (optional)',
            },
            {
              id: 0,
              amount: 0.01,
              name: 'ketchup',
            },
          ],
        },
      ],
    };
  }

  private getRecipe(id: number): Recipe {
    return this.getRecipes().recipes.find((recipe) => recipe.id === id);
  }
}

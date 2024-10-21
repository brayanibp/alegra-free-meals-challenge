import { Controller } from '@nestjs/common';
import { OrderServiceService } from './order-service.service';
import {
  Order,
  OrderHistory,
  OrderID,
  OrderList,
  OrdersServiceController,
  OrdersServiceControllerMethods,
} from '@app/proto-definitions/generated/order';

@Controller()
@OrdersServiceControllerMethods()
export class OrderServiceController implements OrdersServiceController {
  constructor(private readonly orderService: OrderServiceService) {}
  getOrdersHistory(): OrderHistory {
    return this.orderService.getOrdersHistory();
  }
  putOrder(): OrderID {
    return this.orderService.putOrder();
  }
  getOrders(): OrderList {
    return this.orderService.getOrders();
  }
  getOrder(request: OrderID): Order {
    return this.orderService.getOrder(request);
  }
}

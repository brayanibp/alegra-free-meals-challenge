import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import {
  Order,
  OrderID,
  OrderList,
  OrdersServiceController,
  OrdersServiceControllerMethods,
} from '@app/proto-definitions/generated/order';
import { Observable } from 'rxjs';

@Controller('orders')
@OrdersServiceControllerMethods()
export class OrdersController implements OrdersServiceController {
  constructor(private readonly ordersService: OrdersService) {}
  putOrder(): Observable<OrderID> {
    return this.ordersService.putOrder();
  }
  getOrders(): Observable<OrderList> {
    return this.ordersService.getOrders();
  }
  getOrder(request: OrderID): Observable<Order> {
    return this.ordersService.getOrder(request);
  }
}

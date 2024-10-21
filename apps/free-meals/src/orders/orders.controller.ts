import { Controller, Get, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import {
  Order,
  OrderHistory,
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
  getOrder(request: OrderID): Observable<Order> {
    console.log('getOrder', request);
    throw new Error('Method not implemented.');
  }
  @Post('/new')
  @Put('/new')
  putOrder(): Observable<OrderID> {
    return this.ordersService.putOrder();
  }

  @Get('/list')
  getOrders(): Observable<OrderList> {
    return this.ordersService.getOrders();
  }

  @Get('/history')
  getOrdersHistory(): Observable<OrderHistory> {
    return this.ordersService.getOrdersHistory();
  }
}

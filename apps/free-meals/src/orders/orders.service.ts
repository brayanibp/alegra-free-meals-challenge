import {
  Order,
  OrderHistory,
  OrderID,
  OrderList,
  ORDERS_SERVICE_NAME,
  OrdersServiceClient,
} from '@app/proto-definitions/generated/order';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class OrdersService implements OnModuleInit {
  private ordersService: OrdersServiceClient;

  constructor(@Inject(ORDERS_SERVICE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.ordersService =
      this.client.getService<OrdersServiceClient>(ORDERS_SERVICE_NAME);
  }

  putOrder(): Observable<OrderID> {
    try {
      return this.putOrder();
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getOrders(): Observable<OrderList> {
    try {
      return this.ordersService.getOrders({});
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getOrdersHistory(): Observable<OrderHistory> {
    try {
      return this.ordersService.getOrdersHistory({});
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }

  getOrder(request: OrderID): Observable<Order> {
    try {
      return this.ordersService.getOrder(request);
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong.');
    }
  }
}

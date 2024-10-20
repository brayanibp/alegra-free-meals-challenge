"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Order = {
  id: number;
  status: 'en preparación' | 'finalizada';
};

export default function OrderStatus() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Simular la obtención de órdenes
    const mockOrders: Order[] = [
      { id: 1, status: 'en preparación' },
      { id: 2, status: 'finalizada' },
      { id: 3, status: 'en preparación' },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estado de las Órdenes</CardTitle>
      </CardHeader>
      <CardContent>
        {orders.map((order) => (
          <div key={order.id} className="mb-2">
            <span>Orden #{order.id}: </span>
            <span className={order.status === 'finalizada' ? 'text-green-500' : 'text-yellow-500'}>
              {order.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
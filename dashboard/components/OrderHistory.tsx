"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type OrderHistoryItem = {
  completedAt: string;
  dish: string;
};

export default function OrderHistory() {
  const [history, setHistory] = useState<OrderHistoryItem[]>([]);

  useEffect(() => {
    // Simular la obtención del historial de pedidos
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/history`)
      .then((res) => res.json())
      .then((data: { history: OrderHistoryItem[] }) => setHistory(data.history))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatDate = (date: string) => {
    const given_date = new Date(date);
    const formatter = new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    const formattedDate = formatter.format(given_date);
    return formattedDate;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Pedidos</CardTitle>
      </CardHeader>
      <CardContent>
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <span className="text-gray-500">{formatDate(item.completedAt)}: </span>
            <span className="font-bold">{item.dish}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
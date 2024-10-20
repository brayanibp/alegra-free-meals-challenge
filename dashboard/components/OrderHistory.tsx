"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type OrderHistoryItem = {
  id: number;
  date: string;
  dish: string;
};

export default function OrderHistory() {
  const [history, setHistory] = useState<OrderHistoryItem[]>([]);

  useEffect(() => {
    // Simular la obtención del historial de pedidos
    const mockHistory: OrderHistoryItem[] = [
      { id: 1, date: '2023-05-01', dish: 'Arroz con Pollo' },
      { id: 2, date: '2023-05-02', dish: 'Frijoles Refritos' },
      { id: 3, date: '2023-05-03', dish: 'Sopa de Verduras' },
    ];
    setHistory(mockHistory);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Pedidos</CardTitle>
      </CardHeader>
      <CardContent>
        {history.map((item) => (
          <div key={item.id} className="mb-2">
            <span>{item.date}: </span>
            <span className="font-bold">{item.dish}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
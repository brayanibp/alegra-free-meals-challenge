"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type InventoryItem = {
  name: string;
  quantity: number;
  unit: string;
};

export default function Inventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    // Simular la obtención del inventario
    const mockInventory: InventoryItem[] = [
      { name: 'Arroz', quantity: 50, unit: 'kg' },
      { name: 'Frijoles', quantity: 30, unit: 'kg' },
      { name: 'Pollo', quantity: 20, unit: 'kg' },
      { name: 'Tomates', quantity: 15, unit: 'kg' },
      { name: 'Cebollas', quantity: 10, unit: 'kg' },
    ];
    setInventory(mockInventory);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventario de Alimentos</CardTitle>
      </CardHeader>
      <CardContent>
        {inventory.map((item, index) => (
          <div key={index} className="mb-2">
            <span>{item.name}: </span>
            <span className="font-bold">{item.quantity} {item.unit}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
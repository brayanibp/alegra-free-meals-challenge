"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type InventoryItem = {
  id: number;
  name: string;
  amount: number;
  unit?: string | 'kg';
};

export default function Inventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    // getting inventory from api gateway
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/inventory`)
      .then((res) => {
        res.json()
          .then((data: { list: InventoryItem[] }) => {
            setInventory(data.list);
          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((error) => {
        console.log(error)
      });

  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventario de Alimentos</CardTitle>
      </CardHeader>
      <CardContent>
        {inventory?.map((item) => (
          <div key={item.id} className="mb-2">
            <span>{item.name}: </span>
            <span className="font-bold">{item.amount} {item.unit ?? 'kg'}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
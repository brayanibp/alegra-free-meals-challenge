"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function OrderButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleOrder = async () => {
    setIsLoading(true);
    // QUEUE order
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    setIsLoading(false);
    toast({
      title: "Pedido realizado",
      description: "Su pedido ha sido recibido y está siendo procesado.",
    });
  };

  return (
    <Button 
      onClick={handleOrder} 
      disabled={isLoading}
      className="w-full mb-4"
    >
      {isLoading ? "Procesando..." : "Pedir un plato"}
    </Button>
  );
}
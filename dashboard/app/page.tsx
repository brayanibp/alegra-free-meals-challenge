import { Suspense } from 'react';
import OrderButton from '@/components/OrderButton';
import OrderStatus from '@/components/OrderStatus';
import Inventory from '@/components/Inventory';
import OrderHistory from '@/components/OrderHistory';
import Recipes from '@/components/Recipes';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Pedidos de Comida Gratuita</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <OrderButton />
          <Suspense fallback={<div>Cargando estado de órdenes...</div>}>
            <OrderStatus />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>Cargando inventario...</div>}>
            <Inventory />
          </Suspense>
        </div>
      </div>
      <div className="mt-8">
        <Suspense fallback={<div>Cargando historial de pedidos...</div>}>
          <OrderHistory />
        </Suspense>
      </div>
      <div className="mt-8">
        <Suspense fallback={<div>Cargando recetas...</div>}>
          <Recipes />
        </Suspense>
      </div>
    </div>
  );
}
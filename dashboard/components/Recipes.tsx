"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Recipe = {
  name: string;
  ingredients: { name: string; quantity: number; unit: string }[];
};

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Simular la obtención de recetas
    const mockRecipes: Recipe[] = [
      {
        name: 'Arroz con Pollo',
        ingredients: [
          { name: 'Arroz', quantity: 2, unit: 'tazas' },
          { name: 'Pollo', quantity: 500, unit: 'g' },
          { name: 'Cebolla', quantity: 1, unit: 'unidad' },
        ]
      },
      {
        name: 'Frijoles Refritos',
        ingredients: [
          { name: 'Frijoles', quantity: 2, unit: 'tazas' },
          { name: 'Cebolla', quantity: 1, unit: 'unidad' },
          { name: 'Aceite', quantity: 2, unit: 'cucharadas' },
        ]
      },
      // Añadir más recetas aquí...
    ];
    setRecipes(mockRecipes);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recetas Disponibles</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {recipes.map((recipe, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{recipe.name}</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>
                      {ingredient.name}: {ingredient.quantity} {ingredient.unit}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
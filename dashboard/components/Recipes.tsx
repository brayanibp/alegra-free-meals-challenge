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
  id: number;
  name: string;
  ingredients: { name: string; amount: number; unit: string; }[];
};

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // get recipes
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/kitchen/recipes`)
      .then((res) => res.json())
      .then((data: { recipes: Recipe[] }) => {
        setRecipes(data.recipes);
      })
      .catch((err) => {
        console.error(err);
      });
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
                      {ingredient.name}: {Number(ingredient.amount).toFixed(1)} {ingredient.unit}
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
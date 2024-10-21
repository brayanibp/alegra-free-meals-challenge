-- Create Inventory table
CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(50) UNIQUE NOT NULL,
    quantity NUMERIC NOT NULL
);

-- Create Recipes table
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Create Recipe_Ingredients table to handle many-to-one relationship between recipes and inventory
CREATE TABLE recipe_ingredients (
    recipe_id INTEGER NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
    ingredient_id INTEGER NOT NULL REFERENCES inventory(id) ON DELETE CASCADE,
    quantity NUMERIC NOT NULL,
    PRIMARY KEY (recipe_id, ingredient_id)
);

-- Create Orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER NOT NULL REFERENCES recipes(id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Populate Inventory table
INSERT INTO inventory (item_name, quantity) VALUES
('chicken', 10),
('lettuce', 20),
('tomato', 50),
('onion', 30),
('meat', 10),
('rice', 40),
('ketchup', 5),
('potatoes', 100),
('cheese', 15),
('lemon', 10),
('eggs', 25);

-- Populate Recipes table
INSERT INTO recipes (name) VALUES
('Chicken Salad'),
('Rice with Meat'),
('Chicken Tacos'),
('Baked Potatoes with Cheese'),
('Rice with Vegetables'),
('Potato Omelette');

-- Populate Recipe_Ingredients table
-- Chicken Salad
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES
((SELECT id FROM recipes WHERE name = 'Chicken Salad'), (SELECT id FROM inventory WHERE item_name = 'chicken'), 0.2),
((SELECT id FROM recipes WHERE name = 'Chicken Salad'), (SELECT id FROM inventory WHERE item_name = 'lettuce'), 1),
((SELECT id FROM recipes WHERE name = 'Chicken Salad'), (SELECT id FROM inventory WHERE item_name = 'tomato'), 1),
((SELECT id FROM recipes WHERE name = 'Chicken Salad'), (SELECT id FROM inventory WHERE item_name = 'onion'), 0.5);

-- Rice with Meat
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES
((SELECT id FROM recipes WHERE name = 'Rice with Meat'), (SELECT id FROM inventory WHERE item_name = 'meat'), 0.2),
((SELECT id FROM recipes WHERE name = 'Rice with Meat'), (SELECT id FROM inventory WHERE item_name = 'rice'), 1),
((SELECT id FROM recipes WHERE name = 'Rice with Meat'), (SELECT id FROM inventory WHERE item_name = 'tomato'), 1),
((SELECT id FROM recipes WHERE name = 'Rice with Meat'), (SELECT id FROM inventory WHERE item_name = 'onion'), 1),
((SELECT id FROM recipes WHERE name = 'Rice with Meat'), (SELECT id FROM inventory WHERE item_name = 'ketchup'), 0.01);

-- Chicken Tacos
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES
((SELECT id FROM recipes WHERE name = 'Chicken Tacos'), (SELECT id FROM inventory WHERE item_name = 'chicken'), 0.2),
((SELECT id FROM recipes WHERE name = 'Chicken Tacos'), (SELECT id FROM inventory WHERE item_name = 'tomato'), 1),
((SELECT id FROM recipes WHERE name = 'Chicken Tacos'), (SELECT id FROM inventory WHERE item_name = 'onion'), 0.5),
((SELECT id FROM recipes WHERE name = 'Chicken Tacos'), (SELECT id FROM inventory WHERE item_name = 'lettuce'), 1),
((SELECT id FROM recipes WHERE name = 'Chicken Tacos'), (SELECT id FROM inventory WHERE item_name = 'ketchup'), 0.01);

-- Baked Potatoes with Cheese
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES
((SELECT id FROM recipes WHERE name = 'Baked Potatoes with Cheese'), (SELECT id FROM inventory WHERE item_name = 'potatoes'), 2),
((SELECT id FROM recipes WHERE name = 'Baked Potatoes with Cheese'), (SELECT id FROM inventory WHERE item_name = 'cheese'), 0.1),
((SELECT id FROM recipes WHERE name = 'Baked Potatoes with Cheese'), (SELECT id FROM inventory WHERE item_name = 'onion'), 0.5),
((SELECT id FROM recipes WHERE name = 'Baked Potatoes with Cheese'), (SELECT id FROM inventory WHERE item_name = 'ketchup'), 0.01);

-- Rice with Vegetables
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES
((SELECT id FROM recipes WHERE name = 'Rice with Vegetables'), (SELECT id FROM inventory WHERE item_name = 'rice'), 1),
((SELECT id FROM recipes WHERE name = 'Rice with Vegetables'), (SELECT id FROM inventory WHERE item_name = 'tomato'), 1),
((SELECT id FROM recipes WHERE name = 'Rice with Vegetables'), (SELECT id FROM inventory WHERE item_name = 'onion'), 1),
((SELECT id FROM recipes WHERE name = 'Rice with Vegetables'), (SELECT id FROM inventory WHERE item_name = 'lemon'), 1),
((SELECT id FROM recipes WHERE name = 'Rice with Vegetables'), (SELECT id FROM inventory WHERE item_name = 'lettuce'), 1);

-- Potato Omelette
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES
((SELECT id FROM recipes WHERE name = 'Potato Omelette'), (SELECT id FROM inventory WHERE item_name = 'potatoes'), 3),
((SELECT id FROM recipes WHERE name = 'Potato Omelette'), (SELECT id FROM inventory WHERE item_name = 'onion'), 1),
((SELECT id FROM recipes WHERE name = 'Potato Omelette'), (SELECT id FROM inventory WHERE item_name = 'eggs'), 2),
((SELECT id FROM recipes WHERE name = 'Potato Omelette'), (SELECT id FROM inventory WHERE item_name = 'ketchup'), 0.01);

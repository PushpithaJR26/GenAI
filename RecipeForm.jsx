import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';

export default function RecipeForm({ onSubmit, isLoading }) {
  const [ingredients, setIngredients] = useState('');
  const [mealType, setMealType] = useState('Any');
  const [dietary, setDietary] = useState('None');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ingredients.trim()) return;
    onSubmit({ ingredients, mealType, dietary });
  };

  return (
    <div className="glass-panel">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="ingredients">
            What ingredients do you have?
          </label>
          <input
            id="ingredients"
            type="text"
            className="form-input"
            placeholder="e.g., chicken, broccoli, garlic, rice"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="mealType">
            Meal Type
          </label>
          <select
            id="mealType"
            className="form-select"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            disabled={isLoading}
          >
            <option value="Any">Any</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="dietary">
            Dietary Restrictions
          </label>
          <select
            id="dietary"
            className="form-select"
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
            disabled={isLoading}
          >
            <option value="None">None</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Keto">Keto</option>
            <option value="Paleo">Paleo</option>
          </select>
        </div>

        <button type="submit" className="btn" disabled={isLoading || !ingredients.trim()}>
          {isLoading ? (
            <>
              <div className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }}></div>
              Cooking up a recipe...
            </>
          ) : (
            <>
              <ChefHat size={20} />
              Generate Recipe
            </>
          )}
        </button>
      </form>
    </div>
  );
}

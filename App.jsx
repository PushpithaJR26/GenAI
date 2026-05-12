import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeDisplay from './components/RecipeDisplay';
import { generateRecipe } from './services/ai';
import './index.css';

function App() {
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateRecipe = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecipe('');

    try {
      const generatedRecipe = await generateRecipe(
        data.ingredients,
        data.mealType,
        data.dietary
      );
      setRecipe(generatedRecipe);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Chef AI</h1>
        <p>Turn your ingredients into a culinary masterpiece</p>
      </header>

      <main>
        <RecipeForm onSubmit={handleGenerateRecipe} isLoading={isLoading} />
        
        {(recipe || error) && (
          <RecipeDisplay recipe={recipe} error={error} />
        )}
      </main>
    </div>
  );
}

export default App;

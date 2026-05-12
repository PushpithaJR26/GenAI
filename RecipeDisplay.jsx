import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function RecipeDisplay({ recipe, error }) {
  if (error) {
    return (
      <div className="glass-panel recipe-content">
        <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Oops! Something went wrong.</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!recipe) {
    return null;
  }

  return (
    <div className="glass-panel recipe-content">
      <div className="recipe-markdown">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </div>
  );
}

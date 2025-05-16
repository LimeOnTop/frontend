import React from 'react';

interface RecipeResultProps {
  recipe: string;
}

const RecipeResult: React.FC<RecipeResultProps> = ({ recipe }) => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '8px',
      marginTop: '20px'
    }}>
      <h3>Generated Recipe:</h3>
      <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{recipe}</pre>
    </div>
  );
};

export default RecipeResult;
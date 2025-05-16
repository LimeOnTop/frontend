import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductButton from '../components/Products/ProductButton';
import { getGPTRecommendation } from '../api/gpt';

const DashboardPage: React.FC<{ token: string }> = ({ token }) => {
  const navigate = useNavigate();
  const products = [
    { id: '1', name: 'Яблоки', image: 'apple.jpg' },
    { id: '2', name: 'Молоко', image: 'milk.jpg' },
    // Другие продукты
  ];

  const handleGenerateRecipe = async () => {
    try {
      const response = await getGPTRecommendation(token);
      navigate('/recipe', { state: { recipe: response.data } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Выберите продукты</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductButton key={product.id} product={product} token={token} />
        ))}
      </div>
      
      <button 
        onClick={handleGenerateRecipe}
        style={{
          padding: '10px 20px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginTop: '20px',
          cursor: 'pointer'
        }}
      >
        Придумать рецепт
      </button>
    </div>
  );
};

export default DashboardPage;
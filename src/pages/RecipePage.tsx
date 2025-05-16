import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RecipePage: React.FC<{ token: string }> = ({ token }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { recipe } = location.state || {};

    return (
        <div>
            <h2>Ваш рецепт</h2>
            {recipe ? (
                <div>
                    <p>{recipe}</p>
                    <button onClick={() => navigate('/dashboard')}>Назад к продуктам</button>
                </div>
            ) : (
                <p>Рецепт не найден</p>
            )}
        </div>
    );
};

export default RecipePage;
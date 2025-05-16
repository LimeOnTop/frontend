import React, { useState } from 'react';
import { addProduct, removeProduct } from '../../api/user';

interface ProductButtonProps {
    product: {
        id: string;
        name: string;
        image: string;
    };
    token: string;
}

const ProductButton: React.FC<ProductButtonProps> = ({ product, token }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = async () => {
        try {
            if (isSelected) {
                await removeProduct(product.id, token);
            } else {
                await addProduct(product.id, token);
            }
            setIsSelected(!isSelected);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: isSelected ? '#4CAF50' : '#f1f1f1',
                color: isSelected ? 'white' : 'black',
                padding: '10px',
                margin: '5px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer'
            }}
        >
            {product.name}
        </button>
    );
};

export default ProductButton;
export interface User {
    email: string;
    preferences?: {
        dietaryRestrictions?: string[];
        cuisine?: string;
        cookingTime?: number;
    };
}

export interface Product {
    id: string;
    name: string;
    category: string;
}

export interface GPTRecommendation {
    recipe: string;
    ingredients: string[];
    instructions: string[];
}

export interface AuthProps {
    token: string;
}
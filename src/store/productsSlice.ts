import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: string;
    name: string;
    selected: boolean;
}

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
        toggleProductSelection(state, action: PayloadAction<string>) {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                product.selected = !product.selected;
            }
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        }
    }
});

export const { setProducts, toggleProductSelection, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;
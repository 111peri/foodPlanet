import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: [], // Массив товаров в корзине
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload); // Добавление товара в корзину
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        removeProductFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(product => product.id !== productId);
        },
    },
});

export const { addToCart, removeFromCart,removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;


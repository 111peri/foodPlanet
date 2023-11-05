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
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;


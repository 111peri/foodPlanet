// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart', // Имя вашего слайса
    initialState: {
        items: [], // Массив товаров в корзине
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload); // Добавление товара в корзину
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id); // Удаление товара из корзины
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions; // Экспорт экшенов

export default cartSlice.reducer; // Экспорт редуктора


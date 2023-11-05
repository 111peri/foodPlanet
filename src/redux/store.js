import {configureStore} from "@reduxjs/toolkit";
import admin from "../redux/reducers/admin";
import auth from "../redux/reducers/admin";
import cart from '../redux/reducers/cartSlice'
import cartReducer from '../redux/reducers/cartSlice';

 export const store = configureStore({
    reducer: {
        admin,
        auth,
        cart,
        Cart: cartReducer,

    },
});



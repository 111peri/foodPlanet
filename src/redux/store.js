import {configureStore} from "@reduxjs/toolkit";
import admin from "./reducers/admin";
import auth from "./reducers/auth";
import cartReducer from './reducers/cartSlice'

export const store = configureStore({
    reducer: {
        admin,
        auth,
        cart: cartReducer
    }
})
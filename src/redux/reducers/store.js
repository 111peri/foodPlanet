import {configureStore} from "@reduxjs/toolkit";
import admin from "./reducers/admin";
import auth from "./reducers/auth";

export const store = configureStore({
    reducer: {
        admin,
        auth
    }
})
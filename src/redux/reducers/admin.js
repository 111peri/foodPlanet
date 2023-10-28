import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        admin: null,
    },
    reducers: {
        loginAdmin: (state, {payload}) => {
            state.admin = payload.userName === 'Perizat' && payload.password === 'secret123' ? {
                userName: payload.userName,
                role: 'admin',
            } : null
        },
        logoutAdmin: (state) => {
            state.admin = null
        }
    }
})

export default adminSlice.reducer
export const {loginAdmin, logoutAdmin} = adminSlice.actions
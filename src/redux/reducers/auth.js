import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk('auth/registerUser', async (userDate, thunkAPI) => {
    try {

        const {data} = await axios.post('http://localhost:4444/auth/register', userDate)
        return data

    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})


export const loginUser = createAsyncThunk('auth/loginUser', async (userDate, thunkAPI) => {
    try {

        const {data} = await axios.post('http://localhost:4444/auth/login', userDate)
        return data

    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false
    },
    reducers: {

        logoutUser: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, {payload}) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
            })
            .addCase(registerUser.rejected, (state, {payload}) => {
                state.isLoading = false
            })
            .addCase(loginUser.pending, (state, {payload}) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
            })
            .addCase(loginUser.rejected, (state, {payload}) => {
                state.isLoading = false
            })
    }
})

export default authSlice.reducer
export const {logoutUser} = authSlice.actions
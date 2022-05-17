import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setAuth } from "./isAuthAction";

export interface AuthType {
    password: string;
    username: string
    isAuth: boolean
    isLoading: boolean
    error: string
    errorInput: string
}

const initialState: AuthType = {
    password: '12345',
    username: 'Admin',
    isAuth: false,
    isLoading: false,
    error: '',
    errorInput: '',
}

export const authReduser = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        unLogin(state){
            state.isAuth = false;
        }},
    extraReducers: {
        [setAuth.fulfilled.type]: (state, action: PayloadAction<{ password: string, username: string }>) => {
            if (action.payload.password === state.password && action.payload.username === state.username) {
                state.isAuth = true;
                state.errorInput = ''
            } else state.errorInput = "Неверный логин или пароль"
            
            state.isLoading = false;
        },
        [setAuth.pending.type]: (state, action) => {
            state.isLoading = true;
        },
        [setAuth.rejected.type]: (state, action) => {
            state.isLoading = true;
            state.error = action.payload
        }
    }
})
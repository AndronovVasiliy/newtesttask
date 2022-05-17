import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { gewtNews } from "./getNewsAction"

export interface NewsType {
    userId: number
    id: number
    title: string
    body: string
}

const initialState = {
    news: [] as Array<NewsType>,
    isLoading: false,
    error: ""
}

export const newsReducer = createSlice({
    name: 'news',
    initialState,
    reducers: {
    },
    extraReducers: {
        [gewtNews.fulfilled.type]: (state, action: PayloadAction<NewsType[]>) => {
            state.news = action.payload
            state.isLoading = false
        },
        [gewtNews.pending.type]: (state, action: PayloadAction<NewsType[]>) => {
            state.isLoading = true
        },
        [gewtNews.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = true
            state.error = action.payload
        },
    }
})
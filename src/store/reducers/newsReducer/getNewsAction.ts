import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { NewsType } from "./newResucer"

export const gewtNews = createAsyncThunk(
    'news/getNews',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<NewsType[]>('https://jsonplaceholder.typicode.com/posts')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить новости")
        }
    }
)
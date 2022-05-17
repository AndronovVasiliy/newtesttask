import { createAsyncThunk } from "@reduxjs/toolkit"

export const setAuth = createAsyncThunk(
    'news/getNews',
    async ({ username, password }: { username: string, password: string }, thunkAPI) => {
        try {
            let data = {}
                data = {
                    username: username,
                    password: password
                }
                return data
        } catch (error) {
            return thunkAPI.rejectWithValue("Нет соединения")
        }
    }
)
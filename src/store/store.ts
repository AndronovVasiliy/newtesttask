import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReduser } from "./reducers/authReducer/authReducer";
import { newsReducer } from "./reducers/newsReducer/newResucer";

const rootReducer = combineReducers({
    news: newsReducer.reducer,
    auth: authReduser.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']

import { configureStore } from "@reduxjs/toolkit";
import { recipesApi } from "./recipes.api";
import {recipesReducer } from "./recipes.slice";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer:{
        [recipesApi.reducerPath]: recipesApi.reducer,
        recipesLibrary: recipesReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(recipesApi.middleware)
})


setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
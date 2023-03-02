import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe, SingleRecipe } from "../models/models";

const RTQ_ADD_LIB = 'rtq_add_to_library'

interface RecipesState {
    recipes:SingleRecipe[]
}

const initialState:RecipesState = {
    recipes: JSON.parse(localStorage.getItem(RTQ_ADD_LIB) ?? '[]')
}


export const recipesSlice = createSlice({
    name:'recipes',
    initialState,
    reducers:{
        addRecipe(state, action:PayloadAction<SingleRecipe>){
            state.recipes.push(action.payload)
            localStorage.setItem(RTQ_ADD_LIB, JSON.stringify(state.recipes))
        },
        removeRecipe(state, action:PayloadAction<number>){
            state.recipes = state.recipes.filter(rec => rec.id !== action.payload)
            localStorage.setItem(RTQ_ADD_LIB, JSON.stringify(state.recipes))
        }
    }
})

export const recipesActions = recipesSlice.actions
export const recipesReducer = recipesSlice.reducer
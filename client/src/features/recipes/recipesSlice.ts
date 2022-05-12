import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface RecipesState {
    recipes: any[]
}

const initialState: RecipesState = {
    recipes: [],
}

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<Object>) => {
            state.recipes.push(action.payload)
        },
        updateRecipeRatings: (state, action: PayloadAction<any>) => {
            state.recipes.find(recipe => recipe.id === action.payload.id).ratings.push(action.payload.rating)
        }
    },
})

export const { addRecipe, updateRecipeRatings } = recipesSlice.actions

export const selectRecipes = (state: RootState) => state.recipes.recipes

export default recipesSlice.reducer

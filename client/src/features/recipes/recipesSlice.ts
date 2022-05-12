import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { fetchRecipes, fetchRecipeById, fetchRecipeBySearch } from '../../api/'
import { RecipeType } from './recipeTypes'
import { useAppSelector } from '../../app/hooks'

interface RecipesState {
    recipes: any[],
    singleRecipe: any
}

const initialState: RecipesState = {
    recipes: [],
    singleRecipe: {}
}



export const fetchRecipesThunk: any = createAsyncThunk(
    'recipes/fetch',
    async (query) => {
        if(query !== undefined) {
            const recipes = await fetchRecipeBySearch(query)
            return recipes.data
        } else {
            const recipes = await fetchRecipes()
            return recipes.data
        }
    }
)

export const fetchByIdThunk: any = createAsyncThunk(
    'recipes/fetchById',
    async (id: string ) => {
        const recipe = await fetchRecipeById(id)
        return recipe.data
        
    }
)

export const fetchFromStateThunk: any = createAsyncThunk(
    'recipes/fetchFromState',
    async (recipe) => {
        return recipe
    }
)
        
    


export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchRecipesThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload
        },
        [fetchByIdThunk.fulfilled]: (state, action) => {
            state.singleRecipe = action.payload
        },
        [fetchFromStateThunk.fulfilled]: (state, action) => {
            state.singleRecipe = action.payload
        }
    }

})

// export const { addRecipe, updateRecipeRatings } = recipesSlice.actions

// export const selectRecipes = (state: RootState) => state.recipes.recipes

export default recipesSlice.reducer

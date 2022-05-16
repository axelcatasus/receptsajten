import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'
import { fetchRecipes, fetchRecipeById, fetchRecipeBySearch, postRating, fetchRecipesByCategoryAndSearch, fetchRecipesByCategory } from '../../api/'
import { RecipeType } from './recipeTypes'
// import { useAppSelector } from '../../app/hooks'

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

export const fetchRecipesByCategoryThunk: any = createAsyncThunk(
    'recipes/fetchByCategory',
    async (category: string) => {
        const recipes = await fetchRecipesByCategory(category)
        return recipes.data
    }
)

interface catSearchPayload {
        query: string,
        category: string,
}

export const fetchRecipesByCategoriesAndSearchThunk: any = createAsyncThunk(
    'categories/fetchBySearch',
    async (payload: catSearchPayload) => {
        if(payload.query !== undefined) {
        const recipes = await fetchRecipesByCategoryAndSearch(payload.category, payload.query)
        return recipes.data
        } else {
        const recipes = await fetchRecipesByCategory(payload.category)
        return recipes.data
        }
    }
)





export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addSingleRecipeToState: (state, action: PayloadAction<RecipeType>) => {
            state.singleRecipe = action.payload
        }
    },
    extraReducers: {
        [fetchRecipesThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload
        },
        [fetchByIdThunk.fulfilled]: (state, action) => {
            state.singleRecipe = action.payload
        },
        [fetchRecipesByCategoriesAndSearchThunk.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.recipes = action.payload
        },
        [fetchRecipesByCategoryThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload
        }
        
    }

})

export const { addSingleRecipeToState } = recipesSlice.actions

export default recipesSlice.reducer

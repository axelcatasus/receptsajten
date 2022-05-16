import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCategories, fetchRecipesByCategoryAndSearch } from '../../api'


interface CategoryState {
    categories: any,
    currentCategory: string
}


const initialState: CategoryState = {
    categories: [],
    currentCategory: ''
}


export const fetchCategoriesThunk = createAsyncThunk(
    'categories/fetch',
    async () => {
        const categories = await fetchCategories()
        return categories.data
    }
)



export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [fetchCategoriesThunk.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.categories = action.payload
        },
    }

})


export default categoriesSlice.reducer
        
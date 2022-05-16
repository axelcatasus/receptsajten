import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCategories } from '../../api'


interface CategoryState {
    categories: string[],
}


const initialState: CategoryState = {
    categories: [],
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
        [fetchCategoriesThunk.fulfilled.type]: (state, action) => {
            state.categories = action.payload
        },
    }

})


export default categoriesSlice.reducer
        
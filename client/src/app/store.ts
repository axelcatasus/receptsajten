import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from '../features/recipes/recipesSlice'
import categoriesReducer from '../features/categories/categoriesSlice'

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    categories: categoriesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
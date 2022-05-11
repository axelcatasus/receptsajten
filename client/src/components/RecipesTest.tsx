import { RootState } from '../store'
import { useAppSelector, useAppDispatch } from '../hooks'
import { addRecipe } from '../features/recipes/recipesSlice'
import { fetchRecipes } from '../api'

const RecipesTest = () => {
  const storedRecipes = useAppSelector((state: RootState) => state.recipes)
  const dispatch = useAppDispatch()
  const fetchAndStore = async () => {
    const recipes = await fetchRecipes()
    await dispatch(addRecipe(recipes))
}

  return (
    <div>
        <h1>HELLO</h1>
        <button onClick={() => fetchAndStore}>Fetch and put into store</button>
    </div>
  )
}

export default RecipesTest
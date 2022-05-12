import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchRecipesThunk } from "../features/recipes/recipesSlice";
import RecipeCard from "./RecipeCard";
import { RecipeType } from "../features/recipes/recipeTypes";

const RecipeList = () => {    
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipes.recipes);
    useEffect(() => {
        dispatch(fetchRecipesThunk())
    }, []);

    return (
        <div className="recipe-list">
            <form>
                <input type="text" placeholder="Sök efter recept"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(fetchRecipesThunk(e.target.value))}/>
                <button type="submit">Sök</button>
            </form>
            {recipes.map((recipe: RecipeType) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}

        </div>
    )
    }
export default RecipeList;

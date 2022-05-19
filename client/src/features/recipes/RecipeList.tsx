import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchRecipesThunk } from "../../features/recipes/recipesSlice";
import RecipeCard from "./RecipeCard";
import { RecipeType } from "./recipeTypes";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledRecipeList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    padding-bottom: 2rem;
`

const RecipeList = () => {    
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipes.recipes);
    useEffect(() => {
        dispatch(fetchRecipesThunk())
    }, [dispatch]);

    return (
        <StyledRecipeList>
            {recipes.map((recipe: RecipeType)=> 
            <NavLink to={`/recipes/${recipe._id}`}>
                <RecipeCard key={recipe._id} recipe={recipe} />
            </NavLink >)}
        </StyledRecipeList>
    )
    }
export default RecipeList;

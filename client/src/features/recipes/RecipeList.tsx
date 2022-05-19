import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchRecipesThunk } from "../../features/recipes/recipesSlice";
import RecipeCard from "./RecipeCard";
import { RecipeType } from "./recipeTypes";
import styled from "styled-components";
import { motion } from "framer-motion";


const StyledRecipeList = styled(motion.div)`
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
                            <RecipeCard 
                                recipe={recipe}
                                key={recipe._id}
                            />
                )}
            </StyledRecipeList>
    )
    }
export default RecipeList;

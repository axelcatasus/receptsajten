import { useEffect } from "react";
import RecipeCard from "../recipes/RecipeCard";
import { useParams } from "react-router-dom";
import SearchComponent from "../header/SearchComponent";
import { fetchRecipesByCategoryThunk } from "../recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RecipeType } from "../recipes/recipeTypes";
import styled from "styled-components";


const StyledCategoryView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    padding-bottom: 4rem;
`


const CategoryView = () => {
    const { category } = useParams();
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipes.recipes);
    // let onInputChange = (query: string) => {
    //     const payload = {
    //         category: category,
    //         query: query
    //     }
    //     dispatch(fetchRecipesByCategoriesAndSearchThunk(payload))
    // }
    
    useEffect(() => {
        dispatch(fetchRecipesByCategoryThunk(category));
    }, [dispatch, category]);
    return (
        <StyledCategoryView>
            <SearchComponent catSearch={true} category={category} />
            {recipes.map((recipe: RecipeType) =>
                <RecipeCard 
                    recipe={recipe}
                    key={recipe._id}
                />
            )}
            {!recipes.length && <h1>Inga recept hittades!</h1>}
        </StyledCategoryView>
    )
    }
    export default CategoryView;



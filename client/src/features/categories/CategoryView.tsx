// import styled from "styled-components";
import { useState, useEffect } from "react";
import { fetchRecipesByCategory } from "../../api";
import RecipeCard from "../recipes/RecipeCard";
import { useParams } from "react-router-dom";
import { fetchRecipesByCategoriesAndSearchThunk, fetchRecipesByCategoryThunk } from "../recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RecipeType } from "../recipes/recipeTypes";



const CategoryView = () => {
    const { category } = useParams<any>();
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipes.recipes);
    let onInputChange = (query: string) => {
        const payload = {
            category: category,
            query: query
        }
        dispatch(fetchRecipesByCategoriesAndSearchThunk(payload))
    }
    
    useEffect(() => {
        dispatch(fetchRecipesByCategoryThunk(category));
    }, [category])
    return (
        <div className="category-view">
            <h2>{category}</h2>
            <form onSubmit={(e: any) => e.preventDefault()}>
                <input type="text" placeholder={`Sök efter recept i kategorin ${category}`} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value)} />
                <button type="submit">Sök</button>
            </form>
            {recipes.map((recipe: RecipeType) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
        </div>
    )
    }
    export default CategoryView;



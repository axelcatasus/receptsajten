// import styled from "styled-components";
import {useState, useEffect} from "react";
import { fetchRecipesByCategory } from "../api";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";




const CategoryView = () => {
    const [recipes, setRecipes] = useState([]);
    const { id } = useParams<any>();
    console.log(id)
    useEffect(() => {
        fetchRecipesByCategory(id).then(recipes => setRecipes(recipes.data));
    }, [])
    return (
        <div className="category-view">
            <h1>HEJ</h1>
            {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
        </div>
    )
    }
    export default CategoryView;



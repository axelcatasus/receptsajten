import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
    const [recipes, setRecipes] = useState<any>([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            const recipes = await fetch('http://localhost:3000/recipes')
            .then(res => res.json())
        setRecipes(recipes);
    }
    fetchRecipes();
    }, [])

    return (
        <div className="recipe-list">
            {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
        </div>
    )
}

export default RecipeList;

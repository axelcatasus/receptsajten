import { useState, useEffect } from "react";


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
        <ul>
            {recipes.map((recipe: any) => <li key={recipe._id}>{recipe.title + ' ' + recipe.description}</li>)}
        </ul>
    )
}

export default RecipeList;

import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { fetchRecipes,  } from "../api";

const RecipeList = () => {    
    const [query, setQuery] = useState("");
    const searchRecipes = async (query: string) => {
        const recipes = await fetch(`http://localhost:3000/recipes?search=${query}`)
        .then(res => res.json())
        setRecipes(recipes);
    }
    const fetchRecipes = async () => {
        const recipes = await fetch('http://localhost:3000/recipes')
        .then(res => res.json())
        setRecipes(recipes);
    }

    const [recipes, setRecipes] = useState<any>([]);
    useEffect(() => {
  
    console.log(query)
    if(query){
        searchRecipes(query)
    }else{
        fetchRecipes();
    }
    }, [query])

    return (
        <div className="recipe-list">
            <form>
                <input type="text" placeholder="Sök efter recept"  onChange={(e) => setQuery((e.target as any).value)}/>
                <button type="submit">Sök</button>
            </form>
            {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}

        </div>
    )
    }
export default RecipeList;

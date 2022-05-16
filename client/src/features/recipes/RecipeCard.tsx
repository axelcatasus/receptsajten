import styled from "styled-components";
import Stars from "./Stars";
import {Link} from "react-router-dom";
import { RecipeType } from "./recipeTypes";

interface RecipeCardProps {
    recipe: RecipeType;
}

const StyledRecipeCard = styled.div`
    width: 50rem;
    max-height: 40rem;
    margin: 1rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    background-color: lemonchiffon;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    & > img {
        width: 50%;
        border-radius: 0.5rem;
        border: black solid 1px;
    }
    & h1 {
        text-align: center;
        font-family: 'Noto Serif', serif;
        font-weight: 700
    }
    & a {
        text-decoration: none;  
    }
    & .ratings-number {
        text-align: center;
        font-size: 0.8rem;
    }
`
const RecipeCard = ({recipe}: RecipeCardProps) => {
    return (
    <StyledRecipeCard>
        <img src={recipe.imageUrl} alt="receptbild" />
        <div>
        <Link to={`/recipes/${recipe._id}`}>
            <h1>{recipe.title}</h1>
        </Link>
            <p>{recipe.description}</p>
        </div>
        <div>
            <h2>{recipe.ingredients.length} Ingredienser | {recipe.timeinMins} Minuter</h2>
            <Stars recipeRatings={recipe.ratings} recipeId={recipe._id} edit={false}/>
            <p className="ratings-number">{recipe.ratings.length} omdömen</p>
        </div>
        <Link to={`/recipes/${recipe._id}`}>
            <p>{recipe.comments.length} kommentarer<span className="material-symbols-outlined">comment</span></p>
        </Link>
    </StyledRecipeCard>
    )
}

export default RecipeCard;

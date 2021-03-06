import styled from "styled-components";
import Stars from "./Stars";
import { RecipeType } from "./recipeTypes";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface RecipeCardProps {
    recipe: RecipeType;
    isVisible?: boolean;
}

const StyledRecipeCard = styled(motion.div)`
    @media (max-width: 1440px) {
        width: 90vw;
    }
    @media (max-width: 1000px) {
        grid-template-columns: 3fr 2fr;
        & .ratings-container {
            display: none;
        }
    }

    :hover {
        box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
        transition: box-shadow 0.3s ease-in-out;
    }

    display: grid;
    grid-template-columns: 3fr repeat(2, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    width: 70vw;
    height: 10rem;
    font-family: 'Esteban';
    text-align: center;
    margin: .5rem 0rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    background: linear-gradient(white, #e6e6e6);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 0rem;
    transition: box-shadow 0.3s ease-in-out;
    & h1 {
        text-align: center;
        font-family: 'Montserrat', serif;
        font-size: 1.5rem;
        color: black;
        font-weight: 700;
        text-transform: uppercase;
    }
    & a {
        text-decoration: none;  
    }
    & .ratings-average {
        margin-top: 0rem;
        line-height: 0;
    }
    & .ratings-count {
        font-size: 0.8rem;
        line-height: 0rem;
    }
    & .comments {
        text-align: center;
    }
    & .image {
        grid-area: 1 / 1 / 2 / 2;
        height: 10rem;
        background-size: 100%;
        background-repeat: no-repeat;
        border-radius: 6px 0px 0px 6px;
        background-position: left 20% center;
    }
    & .image h1 {
        padding-left: 1rem;
        color: white;
        font-size: 2rem;
        text-align: left;
        text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    & .center {
        grid-area: 1 / 2 / 2 / 3;
    }
    & .ratings-container {
        grid-area: 1 / 3 / 2 / 4;
        margin: 0;
    }
`
const RecipeCard = ({recipe}: RecipeCardProps) => {
    const imageStyle = {
        backgroundImage: `url(${recipe.imageUrl})`,
    }
    return (
        <NavLink to={`/recipes/${recipe._id}`}>
            <StyledRecipeCard
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
            >
                    <div className="image" style={imageStyle}>
                        <h1>{recipe.title}</h1>
                    </div>
                    <div className="center">
                        <p>{recipe.ingredients.length} Ingredienser | {recipe.timeinMins} Minuter</p>
                        <p className="comments">{recipe.comments.length} kommentarer</p>
                    </div>
                    <div className="ratings-container">
                        <Stars recipeRatings={recipe.ratings} recipeId={recipe._id} edit={false} size={40}/>
                        {recipe.ratings.length && <p className="ratings-average">{Math.round(recipe.ratings.reduce((a,b) => a + b, 0) / recipe.ratings.length * 100 + Number.EPSILON) / 100}/5</p>}
                        {recipe.ratings.length > 1 && <p className="ratings-count">({recipe.ratings.length} omd??men)</p>}
                        {recipe.ratings.length === 1 && <p className="ratings-count">({recipe.ratings.length} omd??me)</p>}
                        {!recipe.ratings.length && <p className="ratings-count">Inga omd??men ??n!</p>}
                    </div>
            </StyledRecipeCard>
        </NavLink>
    )
}

export default RecipeCard;

import { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Stars from './Stars';
import CommentForm from './CommentForm';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchByIdThunk, addSingleRecipeToState } from './recipesSlice';
import { IngredientType, InstructionType, CommentType } from './recipeTypes';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


const StyledRecipe = styled.div`
    display: grid;
    place-items: center;
    width: 70vw;
    background: white;
    height: 100%;
    margin: 2rem auto 0rem auto;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    .image {
        width: 100%;
        overflow: hidden;
        height: 40rem;
        background: no-repeat center/cover;
        display: grid;
        place-items: center;
        border-radius: 5px 5px 0 0;
    }
    & h1 {
        text-align: center;
        color: white;
        text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-family: 'Montserrat';
        text-transform: uppercase;
        font-size: 8rem;
    }
    & p {
        padding: 0rem 2rem;
        font-family: 'Esteban';
        font-size: 1.2rem
    }
    & li {
        font-family: 'Esteban';
        font-size: 1.2rem;
    }
    & .ingredients-instructions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 0rem;
        margin: 0rem 4rem;
        margin-bottom: 5rem;
    }
    & h2 {
        font-family: 'Montserrat';
        text-transform: uppercase;
        text-align: center;
    }
    & .ratings {
        text-align: center;
    }
    & .ratings > * {
        margin: 0rem 1rem;
        font-size: 1rem;
    }
    & .comment-list {
        display: flex;
        width: 40rem;
        flex-direction: column-reverse;
        gap: 1rem;
        margin: 1rem 0rem;
    }
    & .comment {
        border-radius: 5px;
        border: 1px solid black;
        padding: 1rem;
    }
    & .comment-name {
        font-weight: bold;
    }
    & .comment > p {
        padding: 0rem;
    }
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;
        .image {
            height: 15rem;
        }
        h1 {
            font-size: 3rem;
        }
        .ingredients-instructions {
            display: flex;
            flex-direction: column;
        }
        .comment-list {
            width: 90vw;
        }
    }
`

const Recipe = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const recipe = useAppSelector(state => state.recipes.singleRecipe);
    const recipes = useAppSelector(state => state.recipes.recipes);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    useEffect(() => {   
        const foundRecipe = recipes.find(recipe => recipe._id === id)
        if(!foundRecipe){
            dispatch(fetchByIdThunk(id));
        } else {
            dispatch(addSingleRecipeToState(foundRecipe))
        }
    }, [id, recipes, dispatch]);
    const imageStyle = {
        backgroundImage: `url(${recipe.imageUrl})`,
    }
    return (
        <StyledRecipe>
            <div className="image" style={imageStyle}>
                <h1>{recipe.title}</h1>
            </div>
            <div className="description">
                <p>{recipe.description}</p>
            </div>
            <div>
                <h3>{recipe.ratings && recipe.ingredients.length} Ingredienser | {recipe.timeinMins} Minuter</h3>
            </div>
            <div className="ingredients-instructions">
                <div className="ingredients">
                    <h2>Ingredienser</h2>
                    <ul>
                        {recipe.ingredients && recipe.ingredients.map((ingredient:IngredientType) => (
                            <li key={ingredient.ingredient}>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
                        ))}
                    </ul>
            </div>
                <div className="instructions">
                    <h2>Instruktioner</h2>
                    <ol>
                        {recipe.instructions && recipe.instructions.map((instruction: InstructionType) => (
                            <li key={instruction.toString()}>{instruction.toString()}</li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className='comments'>
                <div className='ratings'>
                    {!isMobile && recipe.ratings && <Stars edit={true} recipeId={recipe._id} recipeRatings={recipe.ratings} size={80} />}
                    {isMobile && recipe.ratings && <Stars edit={true} recipeId={recipe._id} recipeRatings={recipe.ratings} size={60} />}
                    {recipe.ratings.length && <p className="ratings-average">{Math.round(recipe.ratings.reduce((a,b) => a + b, 0) / recipe.ratings.length * 100 + Number.EPSILON) / 100}/5</p>}
                    {recipe.ratings.length > 1 && <p className="ratings-count">({recipe.ratings.length} omdömen)</p>}
                    {recipe.ratings.length === 1 && <p className="ratings-count">({recipe.ratings.length} omdöme)</p>}
                    {!recipe.ratings.length && <p className="ratings-count">Inga omdömen än!</p>}
                </div>
                <CommentForm recipeId={recipe._id} />
                <div className="comment-list">
                    {recipe.comments && recipe.comments.map((comment:CommentType) => (
                        <motion.div 
                            className="comment"
                            key={comment._id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className="comment-name">{comment.name}</p>
                            <p>{comment.comment}</p>
                            <p>{comment.createdAt}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </StyledRecipe>
    )
}

export default Recipe;
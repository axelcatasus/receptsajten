import { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Stars from './Stars';
import CommentForm from './CommentForm';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchByIdThunk, addSingleRecipeToState } from './recipesSlice';
import { IngredientType, InstructionType, CommentType } from './recipeTypes';

const StyledRecipe = styled.div`
    display: grid;
    place-items: center;
    margin: 0 20rem;
    padding: 2rem;
    width: 60%;
    border: 1px solid black;
    border-radius: 5px;
    background: linear-gradient(lemonchiffon, peru);
    & .flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    & .comments {
        display: flex;
        flex-direction: column;
    }
    & .comment {
        border: 1px solid black;
        border-radius: 0.5rem;
        background-color: lemonchiffon;
        padding: 1rem;
        margin: .5rem 0;
    }
    & .comment-list {
        display: flex;
        flex-direction: column-reverse
    }
    & .comment-name {
        font-weight: bold;
        margin: 0;
    } 
    & .rating-number {
        font-size: 0.8rem;
    }
`

const Recipe = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const commentSent = async () => {
        dispatch(fetchByIdThunk(id));
    }
  const recipe = useAppSelector(state => state.recipes.singleRecipe);
  const recipes = useAppSelector(state => state.recipes.recipes);

    useEffect(() => {   
        const foundRecipe = recipes.find(recipe => recipe._id === id)
        if(!foundRecipe){
            dispatch(fetchByIdThunk(id));
        } else {
            dispatch(addSingleRecipeToState(foundRecipe))
        }
    }, [id, recipes, dispatch]);

    return (
        <StyledRecipe>
            <h1>{recipe.title}</h1>
            <div>
                <div className='flex'>
                    <p>
                        {recipe.description}
                    </p>
                    <div>
                    {recipe.ratings && <Stars edit={true} recipeId={recipe._id} recipeRatings={recipe.ratings} />}
                    <p className="ratings-number">{recipe.ratings && recipe.ratings.length} omdömen</p>
                    <h3>{recipe.ratings && recipe.ingredients.length} Ingredienser | {recipe.timeinMins} Minuter</h3>
                    </div>
                <img src={recipe.imageUrl} alt={recipe.title} width="400px"/>
                </div>
            </div>
            <div>
                <h2>Ingredienser</h2>
                <ul>
                    {recipe.ingredients && recipe.ingredients.map((ingredient:IngredientType) => (
                        <li key={ingredient.ingredient}>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
                    ))}
                </ul>
                <h2>Gör såhär</h2>
                <ol>
                    {recipe.instructions && recipe.instructions.map((instruction: InstructionType) => (
                        <li key={instruction.toString()}>{instruction.toString()}</li>
                    ))}
                </ol>
            </div>
            <div className='comments'>
                <h2>Kommentarer</h2>
                <CommentForm recipeId={recipe._id} trigger={commentSent} />
                <div className="comment-list">
                    {recipe.comments && recipe.comments.map((comment:CommentType) => (
                        <div className="comment" key={comment._id}>
                            <h4 className="comment-name">{comment.name}</h4>
                            <p>{comment.commentBody}</p>
                            <p>{comment.createdAt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </StyledRecipe>
    )
}

export default Recipe;
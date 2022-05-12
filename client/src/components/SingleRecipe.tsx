import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Stars from './Stars';
// import { postRating } from '../api';
import CommentForm from './CommentForm';
import { fetchRecipeById } from '../api';
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchByIdThunk, fetchFromStateThunk } from '../features/recipes/recipesSlice';

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
`

const Recipe = () => {
    // const [recipe, setRecipe] = useState<any>({});
    const { id }: any = useParams();
    const [sentComment , setSentComment] = useState(false);
    const commentSent = () => {
        console.log('comment sent')
        setSentComment(!sentComment);
        fetchRecipeById(id).then(recipe => {
            // setRecipe(recipe.data);
        })
    }
  const dispatch = useAppDispatch();
  const recipe = useAppSelector(state => state.recipes.singleRecipe);
  const recipes = useAppSelector(state => state.recipes.recipes);

    useEffect(() => {   
        const foundRecipe = recipes.find(recipe => recipe._id === id)
        if(!foundRecipe){
            console.log("fetched")
            dispatch(fetchByIdThunk(id));
        } else {
            console.log('fetched from state')
            dispatch(fetchFromStateThunk(foundRecipe))
        }
        // fetchRecipeById(id).then(recipe => {
        //     setRecipe(recipe.data);
        // })
        
        // console.log('recipe', id)
        // dispatch(fetchByIdThunk(id));
        
    
}, []);
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
                    <h3>{recipe.ratings && recipe.ingredients.length} Ingredienser | {recipe.timeinMins} Minuter</h3>
                    </div>
                <img src={recipe.imageUrl} alt={recipe.title} width="400px"/>
                </div>
            </div>
            <div>
                <h2>Ingredienser</h2>
                <ul>
                    {recipe.ingredients && recipe.ingredients.map((ingredient:any) => (
                        <li key={ingredient.ingredient}>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
                    ))}
                </ul>
                <h2>Gör såhär</h2>
                <ol>
                    {recipe.instructions && recipe.instructions.map((step:any) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>
            </div>
            <div className='comments'>
                <h2>Kommentarer</h2>
                {sentComment ?  <p>Tack för din kommentar!</p> : <CommentForm recipeId={recipe._id} trigger={commentSent} />}
                <div className="comment-list">
                    {recipe.comments && recipe.comments.map((comment:any) => (
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
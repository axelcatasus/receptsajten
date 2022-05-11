import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Stars from './Stars';
// import { postRating } from '../api';

const StyledRecipe = styled.div`
    display: grid;
    place-items: center;
    margin: 0 20rem;
    padding: 2rem;
    background-color: tomato;
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
        margin: .5rem 0 ;
    }
    & .comment-name {
        font-weight: bold;
        margin: 0;
    }
`

const Recipe = () => {
    const [recipe, setRecipe] = useState<any>({});
    const { id } = useParams();
    useEffect(() => {
        const fetchRecipe = async () => {
            const recipe = await fetch(`http://localhost:3000/recipes/${id}`)
            .then(res => res.json())
        setRecipe(recipe);
    }
    fetchRecipe();
}, [id]);
console.log(recipe);
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
                <div>
                    {recipe.comments && recipe.comments.map((comment:any) => (
                        <div className="comment" key={comment.comment}>
                            <h4 className="comment-name">{comment.name}</h4>
                            <p>{comment.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </StyledRecipe>
    )
}

export default Recipe;
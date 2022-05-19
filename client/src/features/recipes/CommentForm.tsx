import styled from "styled-components";
import React, { useState } from "react";
import { postComment } from "../../api";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addCommentToSingleRecipe } from "./recipesSlice";

const StyledCommentForm = styled.form`
    display: grid;
    margin-top: 2rem;
    & textarea, input {
        resize: none;
        margin: 0.2rem 0rem;
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid black;
        outline: none;
        font-family: 'Esteban';
    }
    & textarea {
        height: 8rem;
    }
    & input {
        width: 40%;
    }
    & button {
        margin-top: 0.5rem;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0.5rem;
        border: 1px solid black;
        font-family: 'Esteban';
        background: linear-gradient(white, #e6e6e6);
        border-radius: 5px;
        margin-bottom: 1rem;
    }
`
interface CommentFormProps {
    recipeId: string,
}

const CommentForm = ({recipeId}: CommentFormProps) => {
    const [comment, setComment] = useState({
        comment: "",
        name: "",
        createdAt: new Date().toLocaleString()
    });
    const dispatch = useAppDispatch();

    const [formToggle, setFormToggle] = useState(true);
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setFormToggle(false)
        await postComment(recipeId, comment)
        dispatch(addCommentToSingleRecipe(comment))
    }
    return (
        formToggle ? <StyledCommentForm onSubmit={handleSubmit}>
            <h2>Kommentarer</h2>
            <input placeholder="Fyll i namn" required type="text" onChange={(e) => setComment({...comment, name: e.target.value})}/>
            <textarea placeholder="Skriv kommentar" className="textarea" required onChange={(e) => setComment({...comment, comment: e.target.value})}/>
            <button>Submit</button>
        </StyledCommentForm>
    : <p style={{textAlign: 'center'}}>Tack för din kommentar!</p>)
}

export default CommentForm;
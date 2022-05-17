import styled from "styled-components";
import React, { useState } from "react";
import { postComment } from "../../api";

const StyledCommentForm = styled.form`
    display: grid;
    margin-top: 2rem;
    & textarea, input {
        resize: none;
        margin: 0.2rem 0rem;
        font-size: 1rem;
        padding: 0.5rem;
        font-family: 'Esteban';
    }
    & button {
        margin-top: 0.5rem;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0.5rem;
        font-family: 'Esteban';
        background: linear-gradient(white, #e6e6e6);
        border-radius: 5px;
    }
    & p {
        font-size: 2rem;
        font-family: 'Esteban';
        text-align: center;
    }
`
interface CommentFormProps {
    recipeId: string,
    trigger: Function,
}

const CommentForm = ({recipeId, trigger}: CommentFormProps) => {
    const [comment, setComment] = useState({
        commentBody: "",
        name: "",
        createdAt: new Date().toLocaleString()
    });

const [formToggle, setFormToggle] = useState(true);
const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setFormToggle(false)
        await postComment(recipeId, comment)
        trigger()
    }
    return (
        formToggle ? <StyledCommentForm onSubmit={handleSubmit}>
            <h2>Kommentarer</h2>
            <input placeholder="Enter name" required type="text" onChange={(e) => setComment({...comment, name: e.target.value})}/>
            <textarea placeholder="Write a comment" className="textarea" required onChange={(e) => setComment({...comment, commentBody: e.target.value})}/>
            <button>Submit</button>
        </StyledCommentForm>
    : <p>Tack för din kommentar!</p>)
}

export default CommentForm;
import styled from "styled-components";
import React, { useState } from "react";
import { postComment } from "../../api";

const StyledCommentForm = styled.form`
    display: grid;
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
            <label>
                Name:
                <input required type="text" onChange={(e) => setComment({...comment, name: e.target.value})}/>
            </label>
            <label>
                Comment:
                <textarea required onChange={(e) => setComment({...comment, commentBody: e.target.value})}/>
            </label>
            <button>Submit</button>
        </StyledCommentForm>
    : <p>Tack för din kommentar!</p>)
}

export default CommentForm;
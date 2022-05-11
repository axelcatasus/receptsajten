import styled from "styled-components";
import { useState } from "react";
import { postComment } from "../api";

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

    const handleSubmit = async (e : any) => {
        e.preventDefault()
        await postComment(recipeId, comment)
        trigger()
    }
    return (
        <StyledCommentForm onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" onChange={(e) => setComment({...comment, name: e.target.value})}/>
            </label>
            <label>
                Comment:
                <textarea onChange={(e) => setComment({...comment, commentBody: e.target.value})}/>
            </label>
            <button>Submit</button>
        </StyledCommentForm>
    )
}

export default CommentForm;
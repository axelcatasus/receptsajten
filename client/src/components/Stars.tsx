import ReactStars from 'react-stars'
import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { postRating } from '../api/index';
import { updateRecipeRatings } from '../features/recipes/recipesSlice';
 

interface StarsProps {
    edit : boolean
    recipeRatings : [number]
    recipeId : string
    }

const calculateAverage = (rating : any) => {
    if(rating.length > 0){
        const sum = rating.reduce((a:number, b:number) => a + b);
        return sum / rating.length;
    }
    else{
        return
    }
};

const StyledStars = styled(ReactStars)`
    display: flex;
    justify-content: center;
`

const starColor = '#ffc107';

const Stars = ({recipeRatings, recipeId, edit}: StarsProps) => {
    const ratingChanged = async (newRating: any) => {
        await postRating(recipeId, newRating);
    }
    return (
    <StyledStars
    count={5}
    value={calculateAverage(recipeRatings)}
    onChange={ratingChanged}
    size={40}
    edit={edit}
    color2={starColor}
    half={false}
    />
    )
}
 


export default Stars
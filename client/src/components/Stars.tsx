import ReactStars from 'react-stars'
import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { postRating } from '../api/index';
 

interface StarsProps {
    edit : boolean
    recipeRatings : [number]
    recipeId : string
    }
// const ratingChanged = ({newRating}: any) => {
//   console.log(newRating)
// }

const calculateAverage = (rating : any) => {
    const sum = rating.reduce((a:number, b:number) => a + b);
    return sum / rating.length;
};

const StyledStars = styled(ReactStars)`
    display: flex;
    justify-content: center;
`

const starColor = '#ffc107';

const Stars = ({recipeRatings, recipeId, edit}: StarsProps) => {
    const ratingChanged = (newRating: any) => {
        console.log(newRating, recipeId)
        postRating(recipeId, newRating);
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
import ReactStars from 'react-stars'
import React from 'react'
import styled from 'styled-components'
import { useState} from 'react';
import { postRating } from '../../api/index';
import { useAppDispatch} from '../../app/hooks';
import { fetchByIdThunk} from './recipesSlice';
 

interface StarsProps {
    edit : boolean
    recipeRatings : [number]
    recipeId : string
    size: number
    }

const calculateAverage = (rating : number[]) => {
    if(rating.length > 0){
        const sum = rating.reduce((a:number, b:number) => a + b);
        return sum / rating.length;
    }
    else {
        return
    }
};

const StyledStars = styled(ReactStars)`
    display: flex;
    justify-content: center;
    margin: 0rem;
`

const starColor = '#ffc107';

const Stars = ({recipeRatings, recipeId, edit, size}: StarsProps) => {
    const [starToggle, setStarToggle] = useState(true);
    const dispatch = useAppDispatch();
    const ratingChanged = async (newRating: number) => {
        setStarToggle(false);
        await postRating(recipeId, newRating);
        dispatch(fetchByIdThunk(recipeId));
    }
    return  (
        starToggle ? 
    <StyledStars
    count={5}
    value={calculateAverage(recipeRatings)}
    onChange={ratingChanged}
    size={size}
    edit={edit}
    color2={starColor}
    half={false}
    />
    : <p>Tack för din röst!</p>
    )
}
 


export default Stars
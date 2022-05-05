import ReactStars from 'react-stars'
import React from 'react'
import styled from 'styled-components'
 

const ratingChanged = (newRating: any) => {
  console.log(newRating)
}

const calculateAverage = (rating : any) => {
    const sum = rating.reduce((a:number, b:number) => a + b);
    return sum / rating.length;
};

const StyledStars = styled(ReactStars)`
    display: flex;
    justify-content: center;
`

const starColor = '#ffc107';

const Stars = ({rating}: any) => (
    // <ReactStars
    <StyledStars
        count={5}
        value={calculateAverage(rating)}
        onChange={ratingChanged}
        size={40}
        color2={starColor}
        half={true}
    />
 )


export default Stars
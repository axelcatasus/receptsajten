import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

const CategoriesNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {

        const fetchCategories = async () => {
            const categories = await fetch('http://localhost:3000/category')
            .then(res => res.json())
        setCategories(categories);}
        
        fetchCategories();
    
    }, [])

    return (
        <StyledNav>
            <ul>
            {categories.map(category => <li key={category}>{category}</li>)}
            </ul>
        </StyledNav>
            )

}


export default CategoriesNav
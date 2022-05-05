import { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchCategories } from "../api";

const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .nav-item {
        :hover {
            cursor: pointer
        }
    }
    `

const CategoriesNav = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetchCategories().then(categories => setCategories(categories.data));
    }, [])

    return (
        <StyledNav>
            <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier ▼</h3>
            {showCategories && categories.map(category => <p key={category}>{category}</p>)}
        </StyledNav>
            )
}

export default CategoriesNav
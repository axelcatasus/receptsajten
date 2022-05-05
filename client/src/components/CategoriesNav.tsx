import { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchCategories } from "../api";
import {Link} from "react-router-dom";

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
    const [categories, setCategories] = useState<any[]>([]);
    useEffect(() => {
        fetchCategories().then(categories => setCategories(categories.data));
    }, [])

    return (
        <StyledNav>
            <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier ▼</h3>
            {showCategories && categories.map((category):any => <Link to={`/category/${category._id}`}> <p key={category}>{category._id} ({category.count})</p> </Link>)}
        </StyledNav>
            )
}

export default CategoriesNav
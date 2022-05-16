import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { fetchCategoriesThunk } from "./categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";




const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .nav-item {
        :hover {
            cursor: pointer;
            transform: scale(1.2)
        }
    }
    & a, a:visited {
        text-decoration: none;
        color: black;
    }
   
    & .active {
        font-weight: bold;
    }
    `

const CategoriesNav = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.categories);
    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    return (
        <StyledNav>
            {!showCategories && <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier ▼</h3>}
            {showCategories && <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier ▲</h3>}
            {showCategories && categories.map((category: any) => <NavLink to={`/category/${category._id}`}> <p key={category._id}>{category._id} ({category.count})</p> </NavLink>)}
        </StyledNav>
            )
}

export default CategoriesNav
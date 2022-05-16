import { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchCategories } from "../../api";
import {Link, NavLink} from "react-router-dom";
import { fetchCategoriesThunk } from "./categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";


interface Category {
    _id: string;
    count: number;
}

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
        // fetchCategories().then(categories => setCategories(categories.data));
        dispatch(fetchCategoriesThunk());
        console.log(categories);
    }, [showCategories])

    return (
        <StyledNav>
            {!showCategories && <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier ▼</h3>}
            {showCategories && <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier ▲</h3>}
            {showCategories && categories.map((category: any) => <NavLink to={`/category/${category._id}`}> <p key={category}>{category._id} ({category.count})</p> </NavLink>)}
            {/* {showCategories && categories.map((category: any) => <Link to={`/category/${category._id}`}> <p key={category}>{category._id} ({category.count})</p> </Link>)} */}
        </StyledNav>
            )
}

export default CategoriesNav
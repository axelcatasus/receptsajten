import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { fetchCategoriesThunk } from "./categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";




const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    place-items: center;
    min-width: 40rem;
    height: 5rem;
    margin: 0;
    padding: 0rem 1rem;
    width: 15rem;
    & .nav-item {
        :hover {
            cursor: pointer;
            transform: scale(1.2)
        }
    }
    & a, a:visited {
        text-decoration: none;
    }
    & .active {
        font-size: 1.2rem;
        text-decoration: underline
    }
    & .categories {
        list-style: none;
        text-align: left;
        margin: .5rem 0rem;
        padding: 0;
    }
    `

const CategoriesNav = () => {
    const location = useLocation();
    const splitPath = location.pathname.split("/")[2];
    console.log(splitPath)
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.categories);
    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    return (
        <StyledNav>
            {/* {!showCategories && <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier ▼</h3>}
            {showCategories && <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier ▲</h3>} */}
            {categories && 
                categories.map((category: any) => 
                    <ul className="categories">
                        <li key={category._id} className={splitPath === category._id ? 'active' : '' }>
                        <NavLink to={`/category/${category._id}`} >
                        {/* <NavLink to={`/category/${category._id}`} style={({ isActive }) => ({ color: isActive ? 'gray' : 'black',})} > */}
                            {category._id} ({category.count})
                        </NavLink>
                        </li>
                    </ul>)}
        </StyledNav>
            )
}

export default CategoriesNav
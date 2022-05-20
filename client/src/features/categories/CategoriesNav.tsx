import { useEffect } from "react";
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
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.categories);

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    return (
        <StyledNav>
            {categories && categories.map((category: any) => 
                    <ul className="categories">
                        <li key={category.name} className={splitPath === category.name ? 'active' : '' }>
                        <NavLink to={`/category/${category.name}`} >
                            {category.name} ({category.count})
                        </NavLink>
                        </li>
                    </ul>)}
        </StyledNav>
        )
}

export default CategoriesNav
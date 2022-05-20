import styled from "styled-components"
import { NavLink } from "react-router-dom"
import SearchComponent from "./SearchComponent"
import CategoriesNav from "../categories/CategoriesNav"
import { useMediaQuery } from "react-responsive"

const StyledHeader = styled.header`
    font-family: 'Montserrat';
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: white;
    height: 5rem;
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    h1 {
        font-size: 2rem;
        margin-left: 1rem;
    }
`

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return (
        <StyledHeader>
            <NavLink className="heading" to="/"><h1>RECEPTSAJTEN</h1></NavLink>
            {!isMobile && <CategoriesNav />}
            {!isMobile && <SearchComponent catSearch={false}/>}
        </StyledHeader>
    )
}
export default Header
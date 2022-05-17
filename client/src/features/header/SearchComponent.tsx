import { useAppDispatch } from "../../app/hooks";
import { fetchRecipesThunk } from "../recipes/recipesSlice";
import { fetchRecipesByCategoriesAndSearchThunk } from "../recipes/recipesSlice";
import styled from "styled-components";

const StyledSearchComponent = styled.div`
    margin: 0 1rem;
    & input {
        height: 2rem;
        font-family: 'Esteban';
        width: 15rem;
        padding: 0rem .5rem;
        transition: all ease 200ms;
        border: 1px black solid;
        background: url(https://img.icons8.com/ios-filled/344/search--v1.png) no-repeat right .5rem center white;
        background-size: 1rem;
        border-radius: 5px;
        margin: 0;
    } 
    & .all-search:focus {
        outline: none;
        transform: scale(1.05) translateX(-1rem);
        transition: all ease 400ms;
    }
    & input:focus {
        outline: none;
    }
`

interface SearchComponentProps {
    catSearch?: boolean
    category?: string
}


const SearchComponent = ({catSearch, category}: SearchComponentProps) => {
    const dispatch = useAppDispatch();
    let onInputChange = (query: string) => {
        const payload = {
            category: category,
            query: query
        }
        dispatch(fetchRecipesByCategoriesAndSearchThunk(payload))
    }
    return (
        <StyledSearchComponent>
            <form onSubmit={(e) => e.preventDefault()}>
                {!catSearch && <input className="all-search" type="text" placeholder="Sök efter recept" onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(fetchRecipesThunk(e.target.value))}/>}
                {catSearch && <input type="text" placeholder={`Sök i ${category}`} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value)} />}
            </form>
        </StyledSearchComponent>
    )
    }

export default SearchComponent
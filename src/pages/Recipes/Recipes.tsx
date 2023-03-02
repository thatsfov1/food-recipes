import React, {useEffect, useRef, useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import { BiSort } from 'react-icons/bi';
import {useNavigate} from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import RecipesRaw from '../../components/RecipesRaw/RecipesRaw';
import {useDebounce} from '../../hooks/debounce';
import {useLazySearchRecipesQuery, useSearchRecipesQuery} from '../../store/recipes.api';
import s from './Recipes.module.css'

const Recipes = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState<string>('');
    const [sortBy, setSortBy] = useState('');
    const [offset, setOffset] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const [sortDropdown, setSortDropdown] = useState(false);
    const debounced = useDebounce(query)
    const {isError, isLoading, data, error} = useSearchRecipesQuery({debounced}, {
        skip:debounced.length<3
    })

    const [fetchRecipes, {isLoading: areRecipesLoading, data:recipesData }] = useLazySearchRecipesQuery()

    useEffect(() => {
        setDropdown(debounced.length > 2 && data?.results?.length! > 0)
    }, [debounced, data]);

    const navigateToRecipe = (id: number) => {
        navigate(`/recipe/${id}`)
    }

    const fetchAllRecipes = () => {
        fetchRecipes({debounced})
        setDropdown(false)
    }

    const handleSortBy = (sort:string) => {
        setSortBy(sort)
        setSortDropdown(false)
    }

    const onPageChanged = async (event: React.ChangeEvent<unknown>, value: number) => {
         setOffset((value-1)*10)
         window.scroll(0,0)
    }


    useEffect(() => {
       debounced && fetchRecipes({debounced,offset,sort:sortBy})
    }, [sortBy,offset]);


  return (
    <div className={s.container}>
        <div className={s.searchField}>
            <input value={query} onChange={(e) => setQuery(e.target.value)}
                   type='text' placeholder='Search recipes...' />
            {dropdown && <ul className={s.dropdown}>
                {isLoading && <p>Loading...</p>}
                {data?.results.map(recipe => <li onClick={() => navigateToRecipe(recipe.id)} key={recipe.id}>
                   {recipe.title}
                </li>)}
            </ul>}
            <button disabled={!debounced} onClick={fetchAllRecipes} className={s.searchButton}>
                <AiOutlineSearch size={30} color='#fff'/>
            </button>
        </div>
        <div className={s.sort}>
            <button disabled={!debounced} onClick={() => setSortDropdown(!sortDropdown)} className={s.sortButton}>
                <BiSort/>
            </button>
            {sortDropdown && <div className={s.sortDropdown}>
                <SingleSortItem handleSortBy={handleSortBy} name='Popularity'/>
                <SingleSortItem handleSortBy={handleSortBy} name='Healthiness'/>
                <SingleSortItem handleSortBy={handleSortBy} name='Price'/>
                <SingleSortItem handleSortBy={handleSortBy} name='Time'/>
                <SingleSortItem handleSortBy={handleSortBy} name='Calories'/>
            </div>}
        </div>
        {areRecipesLoading && <Preloader/> }
        {recipesData?.results?.length! > 0 && debounced.length>2
            ? <RecipesRaw onPageChanged={onPageChanged} data={recipesData}/>
            : <p className={s.noMatches}>No matches found </p>}
    </div>
  )
}


const SingleSortItem = ({name,handleSortBy}:{name:string, handleSortBy(sort: string): void}) => {
  return (
      <div className={s.sortDropdownItem} onClick={() => handleSortBy(name)}>
          {name}
      </div>
  )
}

export default Recipes

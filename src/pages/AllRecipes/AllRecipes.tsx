import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import RecipesPagination from '../../components/Pagination/Pagination'
import Preloader from '../../components/Preloader/Preloader'
import RecipesRaw from '../../components/RecipesRaw/RecipesRaw'
import { ServerResponse } from '../../models/models'
import { useSearchRecipesQuery } from '../../store/recipes.api'

const AllRecipes = () => {

    const [offset, setOffset] = useState(0);
    const {mealType} = useParams()
    const {isLoading, isError, data} = useSearchRecipesQuery({type:mealType,offset})

    const onPageChanged = (event: React.ChangeEvent<unknown>, value: number) => {
        setOffset((value-1)*10)
        window.scroll(0,0)
    }


  return (
    <div>
        {isLoading && <Preloader/>}
        {isError && <ErrorPage/>}
        <RecipesRaw onPageChanged={onPageChanged} data={data}/>
    </div>
  )
}

export default AllRecipes

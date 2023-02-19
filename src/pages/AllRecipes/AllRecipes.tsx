import React from 'react'
import { useParams } from 'react-router-dom'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import Preloader from '../../components/Preloader/Preloader'
import RecipesRaw from '../../components/RecipesRaw/RecipesRaw'
import { useCategoryRecipesQuery } from '../../store/recipes.api'

const AllRecipes = () => {
    const {mealType} = useParams()
    // @ts-ignore
    const {isLoading, isError, data} = useCategoryRecipesQuery(mealType)
    // const [nextData, setNextData] = useState<ServerResponse>();

    const nextPageUrl = data?._links?.next?.href
    console.log(nextPageUrl)
  return (
    <div>
        {isLoading && <Preloader/>}
        {isError && <ErrorPage/>}
        <RecipesRaw data={data}/>
    </div>
  )
}

export default AllRecipes

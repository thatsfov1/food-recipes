import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Hit, ServerResponse } from '../../models/models'
import { useCategoryRecipesQuery } from '../../store/recipes.api'
import ErrorPage from '../ErrorPage/ErrorPage'
import RecipesPagination from '../Pagination/Pagination'
import Preloader from '../Preloader/Preloader'
import SingleRecipe from '../SingleRecipe/SingleRecipe'

const RecipesRaw = ({data}: { data?:ServerResponse }) => {
    return (
      <div style={{display:'flex',flexWrap:'wrap',
          justifyContent: 'space-between', gap: '30px'}}>
          {data?.hits.map((item:Hit) => <SingleRecipe key={item.recipe.uri} hit={item}/>)}
      </div>
  )
}

export default RecipesRaw

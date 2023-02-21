import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {Recipe, Result, SearchResponse } from '../../models/models'
import { useCategoryRecipesQuery } from '../../store/recipes.api'
import ErrorPage from '../ErrorPage/ErrorPage'
import RecipesPagination from '../Pagination/Pagination'
import Preloader from '../Preloader/Preloader'
import SingleRecipe from '../SingleRecipe/SingleRecipe'
import SingleSearchResult from '../SingleSearchResult/SingleSearchResult'

const RecipesRaw = ({data}: { data?:SearchResponse }) => {
    return (
      <div style={{display:'flex',flexWrap:'wrap',
          justifyContent: 'space-between', gap: '30px'}}>
          {data?.results.map((item:Result) => <SingleSearchResult key={item.id} recipe={item}/>)}
      </div>
  )
}

export default RecipesRaw

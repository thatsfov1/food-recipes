import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {Recipe, Result, SearchResponse, ServerResponse } from '../../models/models'
import ErrorPage from '../ErrorPage/ErrorPage'
import s from './RecipesRaw.module.css'
import RecipesPagination from '../Pagination/Pagination'
import Preloader from '../Preloader/Preloader'
import SingleRecipe from '../SingleRecipe/SingleRecipe'
import SingleSearchResult from '../SingleSearchResult/SingleSearchResult'


type Props = {
    data?:SearchResponse,
    onPageChanged(event: React.ChangeEvent<unknown>, value: number): void
}

const RecipesRaw = ({data,onPageChanged}:Props ) => {
    return (
        <div>
            <div className={s.container}>
                {data?.results.map((item: Result) => <SingleSearchResult key={item.id} recipe={item}/>)}
            </div>
            <div className={s.pagination}>
                <RecipesPagination onPageChanged={onPageChanged} totalResults={data?.totalResults} />
            </div>
        </div>

  )
}

export const RecipesRawForHome = ({data} :{data?:ServerResponse}) => {
    return (
        <div className={s.container}>
            {data?.recipes.map((item:Recipe) => <SingleRecipe recipe={item} key={item.id} />)}
        </div>
    )
}

export default RecipesRaw

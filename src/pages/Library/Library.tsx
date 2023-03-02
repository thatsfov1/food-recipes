import React from 'react'
import SingleLibraryRecipe from '../../components/SingleLibraryRecipe/SingleLibraryRecipe'
import { useAppSelector } from '../../hooks/redux'
import s from './Library.module.css'

const Library = () => {

    const { recipes } = useAppSelector(state => state.recipesLibrary)

    if (recipes.length < 1) return <p className={s.noRecipes}>No Recipes yet</p>
  return (
    <div>
        {recipes.map(rec => <SingleLibraryRecipe key={rec.id} recipe={rec}/>)}
    </div>
  )
}

export default Library

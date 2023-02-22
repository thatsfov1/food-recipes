import React from 'react'
import { NavLink } from 'react-router-dom'
import { Result } from '../../models/models'
import s from '../SingleRecipe/SingleRecipe.module.css'

const SingleSearchResult = ({recipe}:{recipe:Result}) => {
  return (
    <NavLink to={`/recipe/${recipe.id}`} className={s.container}>
        <div className={s.image} >
            <img src={recipe.image}/>
        </div>
        <div className={s.title}>
            {recipe.title}
        </div>
    </NavLink>
  )
}

export default SingleSearchResult

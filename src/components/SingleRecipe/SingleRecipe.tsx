import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { FaWeight } from 'react-icons/fa'
import { IoFastFoodOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { Recipe, Result } from '../../models/models'
import s from './SingleRecipe.module.css'
import noimage from '../../assets/no-image.png'
import { AiOutlineLike } from 'react-icons/ai'

const SingleRecipe = ({recipe}:{recipe: Recipe}) => {


  return (
    <NavLink to={`/recipe/${recipe.id}`} className={s.container}>
      <div className={s.image}>
          {recipe.image ? <img src={recipe.image} alt='food'/> : <img src={noimage}/>}
      </div>
        {recipe.sourceName && <div className={s.source}>
            {recipe.sourceName}
        </div>}
        <div className={s.title}>
            {recipe.title}
        </div>
        <div className={s.info}>
            {recipe.readyInMinutes>1 && <span>
                <BiTimeFive/> {recipe.readyInMinutes}
            </span>}
            <span>
                <FaWeight/> {Math.ceil(recipe.weightWatcherSmartPoints)}
            </span>
            <span>
                <AiOutlineLike/> {Math.ceil(recipe.aggregateLikes)}
            </span>
        </div>
    </NavLink>
  )
}

export default SingleRecipe

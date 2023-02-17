import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { FaWeight } from 'react-icons/fa'
import { IoFastFoodOutline } from 'react-icons/io5'
import { Hit } from '../../models/models'
import s from './SingleRecipe.module.css'

const SingleRecipe = ({hit}:{hit: Hit}) => {

  return (
    <div className={s.container}>
      <div className={s.image}>
        <img src={hit.recipe.image} alt='food'/>
      </div>
      <div className={s.type}>
        {hit.recipe.mealType}
      </div>
        <div className={s.title}>
            {hit.recipe.label}
        </div>
        <div className={s.info}>
            {hit.recipe.totalTime>1 && <span>
                <BiTimeFive/> {hit.recipe.totalTime}
            </span>}
            <span>
                <FaWeight/> {Math.ceil(hit.recipe.totalWeight)}
            </span>
            <span>
                <IoFastFoodOutline/> {Math.ceil(hit.recipe.calories)}
            </span>
        </div>
    </div>
  )
}

export default SingleRecipe

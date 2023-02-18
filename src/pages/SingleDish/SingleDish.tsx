import React, { useEffect } from 'react'
import {BiBookBookmark, BiDish, BiShareAlt, BiTimeFive } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaWeight } from 'react-icons/fa'
import { GiHotMeal, GiMeal } from 'react-icons/gi'
import { IoFastFoodOutline } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import Preloader from '../../components/Preloader/Preloader'
import { useSingleRecipeQuery } from '../../store/recipes.api'
import s from './SingleDish.module.css'

const SingleDish = () => {

  const {id} = useParams()

  // @ts-ignore
  const {isLoading, isError, error ,data} = useSingleRecipeQuery(id)



  return (
       <div>
    {isError && <ErrorPage error={error}/>}
    {isLoading && <Preloader/>}
    <div className={s.container}>
      <div className={s.header}>
          <span>
            <BsFillPersonFill/>
              <a rel="noopener noreferrer" href={data?.source} target='_blank'>
               {data?.source}
              </a>
          </span>
        <span>
            <IoFastFoodOutline/>
          {data && Math.ceil(data.calories)} calories
          </span>
        <span>
          <FaWeight/>
          {data && Math.ceil(data.totalWeight)} g
        </span>
        <span>
          <BiBookBookmark/>
          { data?.cuisineType.reduce((a,b) => a +',' + b)}
        </span>
        <span>

        </span>
        <span>
         <GiMeal/>
          {data?.mealType}
        </span>
        <span>
          <BiDish/> {data?.dishType}
        </span>
        <span className={s.share}>
          <BiShareAlt/>
        </span>
      </div>
      <div className={s.image}>
        <img src={data?.image}/>
      </div>
      <div className={s.under}>
        time ingr count serving
      </div>
    </div>
  </div>
  )
}

export default SingleDish

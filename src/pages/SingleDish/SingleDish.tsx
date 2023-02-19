import React, {useEffect} from 'react'
import {BiBookBookmark, BiDish, BiShareAlt, BiTimeFive} from 'react-icons/bi'
import {BsBookmarksFill, BsFillPersonFill, BsPeopleFill} from 'react-icons/bs'
import {FaWeight} from 'react-icons/fa'
import {GiFruitBowl, GiHotMeal, GiMeal} from 'react-icons/gi'
import {IoFastFoodOutline} from 'react-icons/io5'
import {useParams} from 'react-router-dom'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import Preloader from '../../components/Preloader/Preloader'
import { Ingredient } from '../../models/models'
import {useSingleRecipeQuery} from '../../store/recipes.api'
import s from './SingleDish.module.css'

const SingleDish = () => {

    const {id} = useParams()

    // @ts-ignore
    const {isLoading, isError, error, data} = useSingleRecipeQuery(id)

    return (
        <div>
            {isError && <ErrorPage error={error}/>}
            {isLoading ? <Preloader/> :
            <div className={s.container}>
                <div className={s.header}>
                  <span>
                    <BsFillPersonFill/>
                      <a rel="noopener noreferrer" href={data?.url} target='_blank'>
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
                        {data?.cuisineType.reduce((a, b) => a + ',' + b)}
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
                <div className={s.dishContainer}>
                    <div className={s.allDesc}>
                        <div className={s.dishImage}>
                            <img alt='dish-image' src={data?.image}/>
                            <div className={s.addButton}>
                                <BsBookmarksFill/> Save to my library
                            </div>
                        </div>
                        <div className={s.description}>
                            <div className={s.smallDesc}>
                                <div className={s.singleSmallDesc}>
                                    <BiTimeFive/>
                                    <span>
                                <b>Cook time</b>
                                        {data?.totalTime} Min
                            </span>
                                </div>
                                <div className={s.singleSmallDesc}>
                                    <GiFruitBowl/>
                                    <span>
                                <b>Ingredients</b>
                                        {data?.ingredients.length}
                            </span>
                                </div>
                                <div className={s.singleSmallDesc}>
                                    <BsPeopleFill/>
                                    <span>
                                <b>Serving</b>
                                        {data?.yield}
                            </span>
                                </div>
                            </div>
                            <div className={s.mainDesc}>
                                <div className={s.preparing}>
                                    {data?.ingredientLines.map(ingr => (
                                        <div className={s.singleIngr} key={ingr}>
                                            {ingr}
                                        </div>))}
                                </div>
                                <div className={s.tags}>
                                    {data?.healthLabels.map(tag => (
                                        <div key={tag}>
                                            #{tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.dishRecipe}>

                    </div>
                </div>

            </div>}
        </div>
    )
}


export default SingleDish

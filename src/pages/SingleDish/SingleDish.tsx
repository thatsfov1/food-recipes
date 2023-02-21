import React, {useEffect} from 'react'
import {BiBookBookmark, BiDish, BiShareAlt, BiTimeFive} from 'react-icons/bi'
import {BsBookmarksFill, BsFillPersonFill, BsPeopleFill} from 'react-icons/bs'
import {FaWeight} from 'react-icons/fa'
import {GiFruitBowl, GiGluttony, GiHotMeal, GiMeal} from 'react-icons/gi'
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
                  <div className={s.recipeTitle}>
                      {data?.title}
                  </div>
                    <div className={s.desc}>
                        {data && <div  dangerouslySetInnerHTML={{__html: data.summary}}></div>}
                    </div>
                    <div className={s.source}>
                       Recipe by <a target='_blank' href={data?.sourceUrl}>{data?.sourceName}</a>
                    </div>
                    <span className={s.addButton}>
                        <BsBookmarksFill/> Save to my library
                    </span>
                </div>
                <div className={s.dishContainer}>
                    <div className={s.allDesc}>
                        <div className={s.dishImage}>
                            <img alt='dish-image' src={data?.image}/>
                        </div>
                        <div className={s.description}>
                            <div className={s.smallDesc}>
                                <div className={s.singleSmallDesc}>
                                    <BiTimeFive/>
                                    <span>
                                <b>Cook time</b>
                                        {data?.readyInMinutes} Min
                            </span>
                                </div>
                                <div className={s.singleSmallDesc}>
                                    <GiFruitBowl/>
                                    <span>
                                <b>Ingredients</b>
                                        {data?.extendedIngredients.length}
                            </span>
                                </div>
                                <div className={s.singleSmallDesc}>
                                    <BsPeopleFill/>
                                    <span>
                                <b>Serving</b>
                                        {data?.servings}
                            </span>
                                </div>
                            </div>
                            <div className={s.mainDesc}>
                                <div className={s.preparing}>

                                </div>
                                <div className={s.tags}>

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

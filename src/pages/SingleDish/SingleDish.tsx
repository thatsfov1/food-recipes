import React, {useEffect, useState} from 'react'
import {BiBookBookmark, BiDish, BiShareAlt, BiTimeFive} from 'react-icons/bi'
import {BsBookmarksFill, BsFillPersonFill, BsPeopleFill} from 'react-icons/bs'
import {FaWeight} from 'react-icons/fa'
import {GiFruitBowl, GiGluttony, GiHotMeal, GiMeal} from 'react-icons/gi'
import {IoFastFoodOutline} from 'react-icons/io5'
import {useParams} from 'react-router-dom'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import Preloader from '../../components/Preloader/Preloader'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import {ExtendedIngredient, Ingredient, Step } from '../../models/models'
import {useSingleRecipeQuery} from '../../store/recipes.api'
import s from './SingleDish.module.css'
import noimage from '../../assets/no-image.png'

const SingleDish = () => {
    const { recipes } = useAppSelector(state => state.recipesLibrary)
    const {id} = useParams()
    const {isLoading, isError, error, data} = useSingleRecipeQuery(id!)
    const [isInLib, setIsInLib] = useState(recipes.includes(data!));

    const {addRecipe, removeRecipe} = useActions()

    const addToLibrary = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault()
            data && addRecipe(data)
            setIsInLib(true)
    }
    const removeFromLibrary = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault()
            data && removeRecipe(data.id)
            setIsInLib(false)
    }
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
                    {isInLib ? <button onClick={removeFromLibrary} className={s.addButton}>
                                 <BsBookmarksFill/> Remove from my library
                                 </button>
                            : <button onClick={addToLibrary} className={s.addButton}>
                                <BsBookmarksFill/> Save to my library
                            </button>
                    }
                </div>
                <div className={s.dishContainer}>
                    <div className={s.mainInfo}>
                        <div className={s.dishImage}>
                            <img alt='dish-image' src={data?.image || noimage}/>
                        </div>
                        <div className={s.recipeDetailsContainer}>
                            <div className={s.recipeDetails}>
                                <SingleDetail title='Prep time:' condition={data?.preparationMinutes! > -1 ? data?.preparationMinutes + ' Min' : 'Unknown'}/>
                                <SingleDetail title='Cook time:' condition={data?.cookingMinutes! > -1 ? data?.cookingMinutes + ' Min' : 'Unknown'}/>
                                <SingleDetail title='Total time:' condition={data?.readyInMinutes! > -1 ? data?.readyInMinutes + ' Min' : 'Unknown'}/>
                                <SingleDetail title='Servings:' condition={data?.servings || 'Unknown'}/>
                                <SingleDetail title='Yield:' condition={data?.servings + ' Servings' || 'Unknown'}/>
                            </div>
                            <a href="#nutritions" className={s.featuresRedirect}>
                                Jump to <span>Features</span>
                            </a>
                        </div>
                    </div>
                    <div className={s.dishRecipe}>
                        <div className={s.ingredients}>
                            <span className={s.title}>Ingredients</span>
                            <ul>
                                {data?.extendedIngredients.map((ingr:ExtendedIngredient) => <li key={ingr.id}>
                                    <span>{ingr.original}</span>
                                </li>)}
                            </ul>
                        </div>
                        {data?.analyzedInstructions[0] && <div className={s.directions}>
                            <span className={s.title}>Directions</span>
                            {data?.analyzedInstructions[0].steps.map((step: Step) => (
                                <SingleStep key={step.number} step={step}/>)
                            )}
                        </div>}
                    </div>
                    <div className={s.nutritionsContainer}>
                        <span className={s.title}>
                            Nutritions Facts (per serving)
                        </span>
                        <div id='nutritions' className={s.nutritions}>
                            <div className={s.singleNutrition}>
                                <b>{Math.floor(data?.nutrition.nutrients[0].amount)}</b>
                                {data?.nutrition.nutrients[0].name}
                            </div>
                            <div className={s.singleNutrition}>
                                <b>{Math.floor(data?.nutrition.nutrients[1].amount) + 'g'}</b>
                                {data?.nutrition.nutrients[1].name}
                            </div>
                            <div className={s.singleNutrition}>
                                <b>{Math.floor(data?.nutrition.nutrients[8].amount) + 'g'}</b>
                                {data?.nutrition.nutrients[8].name}
                            </div>
                            <div className={s.singleNutrition}>
                                <b>{Math.floor(data?.nutrition.nutrients[3].amount) + 'g'}</b>
                                {data?.nutrition.nutrients[3].name}
                            </div>
                        </div>
                    </div>
                </div>

            </div>}
        </div>
    )
}


const SingleDetail = ({title,condition}:{title:string, condition:any}) => {
    return (
        <div className={s.singleRecipeDetail}>
            <span className={s.recipeDetailTitle}>
                   {title}
            </span>
            <span className={s.recipeDetailInfo}>
                {condition}
            </span>
        </div>
    )
}

const SingleStep = ({step}:{step:Step}) => {
  return (
      <div className={s.step}>
          <span className={s.stepTitle}>Step {step.number}</span>
          <div className={s.stepInfo}>{step.step}</div>
      </div>
  )
}

export default SingleDish

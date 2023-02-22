import React from 'react'
import Banner from '../../components/Banner/Banner'
import s from './Categories.module.css'
import breakfast from '../../assets/breakfast.jpeg'
import dinner from '../../assets/dinner.jpeg'
import lunch from '../../assets/lunch.jpeg'
import snack from '../../assets/snack.jpeg'
import appetizer from '../../assets/appetizer.jpeg'
import beverage from '../../assets/beverage.jpeg'
import bread from '../../assets/bread.jpeg'
import dessert from '../../assets/dessert.jpeg'
import marinade from '../../assets/marinade.jpeg'
import salad from '../../assets/salad.jpeg'
import sause from '../../assets/sause.jpeg'
import sidedish from '../../assets/side-dish.jpeg'
import drink from '../../assets/drink.png'
import fingerfood from '../../assets/finger-food.png'
import soup from '../../assets/soup.png'
import { NavLink } from 'react-router-dom'

const Categories = () => {
  return (
    <div className={s.container}>
      <Banner>Categories</Banner>
        <div className={s.categories}>
            <SingleCategory mealType='Breakfast' mealImage={breakfast}/>
            <SingleCategory mealType='Main course' mealImage={dinner}/>
            <SingleCategory mealType='Lunch' mealImage={lunch}/>
            <SingleCategory mealType='Soup' mealImage={soup}/>
            <SingleCategory mealType='Snack' mealImage={snack}/>
            <SingleCategory mealType='Fingerfood' mealImage={fingerfood}/>
            <SingleCategory mealType='Drink' mealImage={drink}/>
            <SingleCategory mealType='Side dish' mealImage={sidedish}/>
            <SingleCategory mealType='Sause' mealImage={sause}/>
            <SingleCategory mealType='Salad' mealImage={salad}/>
            <SingleCategory mealType='Marinade' mealImage={marinade}/>
            <SingleCategory mealType='Dessert' mealImage={dessert}/>
            <SingleCategory mealType='Bread' mealImage={bread}/>
            <SingleCategory mealType='Appetizer' mealImage={appetizer}/>
            <SingleCategory mealType='Beverage' mealImage={beverage}/>
        </div>
    </div>
  )
}


const SingleCategory = ({mealType, mealImage}:{mealType:string,mealImage:string}) =>{
    return <NavLink to={`/category/${mealType.toLowerCase()}`} className={s.singleCategory}>
            <div className={s.catImage}>
                <img src={mealImage} alt={mealType}/>
            </div>
            <span>{mealType}</span>
    </NavLink>
}

export default Categories

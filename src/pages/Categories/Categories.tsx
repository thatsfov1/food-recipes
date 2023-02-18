import React from 'react'
import Banner from '../../components/Banner/Banner'
import s from './Categories.module.css'
import breakfast from '../../assets/breakfast.jpeg'
import dinner from '../../assets/dinner.jpeg'
import lunch from '../../assets/lunch.jpeg'
import teatime from '../../assets/teatime.png'
import snack from '../../assets/snack.jpeg'

const Categories = () => {
  return (
    <div className={s.container}>
      <Banner>Categories</Banner>
        <div className={s.categories}>
            <SingleCategory mealType='Breakfast' mealImage={breakfast}/>
            <SingleCategory mealType='Dinner' mealImage={dinner}/>
            <SingleCategory mealType='Lunch' mealImage={lunch}/>
            <SingleCategory mealType='Teatime' mealImage={teatime}/>
            <SingleCategory mealType='Snack' mealImage={snack}/>
        </div>
    </div>
  )
}


const SingleCategory = ({mealType, mealImage}:{mealType:string,mealImage:string}) =>{
    return <div className={s.singleCategory}>
            <div className={s.catImage}>
                <img src={mealImage} alt={mealType}/>
            </div>
            <span>{mealType}</span>
    </div>
}

export default Categories

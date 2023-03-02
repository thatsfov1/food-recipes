import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/actions'
import { SingleRecipe } from '../../models/models'
import s from '../../pages/Library/Library.module.css'

const SingleLibraryRecipe = ({recipe}:{recipe:SingleRecipe}) => {

    const {removeRecipe} = useActions()

    const removeFromLibrary = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeRecipe(recipe.id)
    }

  return (
    <NavLink className={s.singleContainer} to={`/recipe/${recipe.id}`} >
        <div className={s.image}>
          <img src={recipe.image} alt='recipe'/>
        </div>
      <div className={s.title}>
        {recipe.title}
      </div>
      <button onClick={removeFromLibrary} className={s.delete}>
        <MdDeleteOutline/>
      </button>
    </NavLink>
  )
}

export default SingleLibraryRecipe

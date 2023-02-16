import React from 'react'
import { Hit } from '../models/models'

const SingleRecipe = ({hit}:{hit: Hit}) => {
  return (
    <div>
      {hit.recipe.label}
    </div>
  )
}

export default SingleRecipe

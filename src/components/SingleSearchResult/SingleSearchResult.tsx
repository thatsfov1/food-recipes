import React from 'react'
import { Result } from '../../models/models'

const SingleSearchResult = ({recipe}:{recipe:Result}) => {
  return (
    <div>
      <img src={recipe.image}/>
    </div>
  )
}

export default SingleSearchResult

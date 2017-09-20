import React from 'react'
import { Image } from 'semantic-ui-react'

const Recipe = ({recipe}) => {
  return(
    <div>
      <h3>{recipe.title}</h3>
      <Image src={recipe.image_url} />
      <a href={recipe.source_url} target="_blank">Recipe by: {recipe.publisher}</a>
    </div>
  )
}

export default Recipe

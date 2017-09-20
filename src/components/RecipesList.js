import React from 'react'
import Recipe from './Recipe'
import { Grid } from 'semantic-ui-react'


const RecipesList = ({recipes}) => {

  const recipesHTML = recipes.map( (r,i) => <Grid.Column key={i}> <Recipe key={i} recipe={r} /> </Grid.Column>)

  return(
    <div>
      <Grid >
        <Grid.Row columns={6}>
          {recipesHTML}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default RecipesList

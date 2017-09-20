import React from 'react'
import { connect } from 'react-redux'
import * as RecipeActions from '../actions/recipes'
import { bindActionCreators } from 'redux'
import RecipesList from './RecipesList'
import { Grid } from 'semantic-ui-react'

class RecipesContainer extends React.Component {

  componentDidMount(){                      //change to thunk
    fetch('http://localhost:3000/api/v1/')
      .then(res => res.json())
      .then( recipes => this.props.addRecipes(recipes) )
  }

  render(){
    return(
      <div>
        <RecipesList recipes={this.props.recipes} />
      </div>
    )
  }

}


function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(RecipeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)

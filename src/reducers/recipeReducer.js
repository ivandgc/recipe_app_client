export default function recipeReducer(state= {recipes: []}, action) {

  switch (action.type) {
    case 'ADD_RECIPES':
      return {...state, recipes: [...state.recipes, ...action.payload]}
    default:
      return state
  }
}

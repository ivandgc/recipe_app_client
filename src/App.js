import React, { Component } from 'react';
import './App.css';
import RecipesContainer from './components/RecipesContainer'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
        <Route to="/" component={RecipesContainer} />
      </div>
    );
  }
}

export default App

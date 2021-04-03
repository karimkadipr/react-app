import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProjectShop from './components/ProjectShop'
import ProjectSocialMedia from './components/ProjectSocialMedia'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={HomePage} exact />
        <Route path='/project/shop' component={ProjectShop} exact />
        <Route
          path='/project/SocialMedia'
          component={ProjectSocialMedia}
          exact
        />
      </Router>
    </div>
  )
}

export default App

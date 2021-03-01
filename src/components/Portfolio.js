import React from 'react'
import './styles/portfolio.css'
import Prj from './Prj'

function Portfolio() {
  return (
    <div className='me'>
      <h1 id='portfolio'>My Projects</h1>
      <hr />
      <Prj
        backColor='purple'
        classname='right'
        TextField='E-Commerce Website'
        dataAos='fade-up'
        ButtonUrl='https://ecommercekarimkadi.herokuapp.com/'
        imgURL='ecommerce'
      />
      <Prj
        backColor='blue'
        classname='left'
        TextField='Messaging App'
        dataAos='fade-up'
        imgURL='messaging'
      />
      <Prj
        backColor='brown'
        classname='right'
        TextField='Social Media App'
        dataAos='fade-up'
        imgURL='social'
      />
    </div>
  )
}

export default Portfolio

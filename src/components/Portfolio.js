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
        backColor='brown'
        classname='left'
        TextField='Social Media App'
        dataAos='fade-up'
        imgURL='social'
        ButtonUrl='https://karim-social-media.herokuapp.com/'
      />
      {/*       <Prj
        backColor='blue'
        classname='right'
        TextField='Messaging App'
        dataAos='fade-up'
        imgURL='messaging'
      /> */}
    </div>
  )
}

export default Portfolio

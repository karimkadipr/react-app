import React  from 'react'
import './portfolio.css'
import Prj from './Prj'


function Portfolio() {

    return (
        <div  className="me">
            <h1 id="portfolio">My Projects</h1>
            <hr/>
            <Prj classname="right"TextField="E-Commerce Website" dataAos="fade-up" ButtonUrl="https://www.amazon.fr" imgURL="ecommerce"/>
            <Prj classname="left" TextField="Messaging App" dataAos="fade-up"  ButtonUrl="https://www.facebook.com" imgURL="https://paperpillar.com/assets/images/crisp-works.png"/>
            <Prj classname="right" TextField="Social Media App" dataAos="fade-up"  ButtonUrl="https://www.twitter.com" imgURL="https://paperpillar.com/assets/images/crisp-works.png"/>
        </div>
    )
}

export default Portfolio

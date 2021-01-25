import React  from 'react'
import './portfolio.css'
import Prj from './Prj'


function Portfolio() {

    return (
        <div  className="me">
            <h1 id="portfolio">My Projects</h1>
            <hr/>
            <Prj dataAos="fade-up"/>
            <Prj dataAos="fade-up"/>
            <Prj dataAos="fade-up"/>
        </div>
    )
}

export default Portfolio

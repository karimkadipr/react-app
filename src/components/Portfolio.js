import React  from 'react'
import Project from './Project'
import './portfolio.css'
import logo from './prj.jpg'
import Prj from './Prj'


function Portfolio() {

    return (
        <div className="me">
            <h1>Portfolio</h1>
            <hr/>
            <Prj dataAos="fade-down"/>
            <Prj dataAos="fade-left"/>
            <Prj dataAos="zoom-in"/>
        </div>
    )
}

export default Portfolio

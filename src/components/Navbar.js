import React from 'react';
import './Navbar.css' ;
import SimpleMenu from './SimpleMenu'

function Navbar() {
    return (
        <div className = "navbar"> 
            <div>My Portfolio</div>
            <div>
                <ul className="MyList">
                    <li className="Hide"><a href="https://www.google.fr">About me</a></li>
                    <li className="Hide"><a href="https://www.google.fr">My Projects</a></li>
                    <li className="Hide"><a href="https://www.google.fr">Contact me</a></li>
                    <SimpleMenu   item1="About me" item2="My Projects" item3="Contact me" />
                </ul>
            </div>
        </div> 
    )
}

export default Navbar

import React from 'react'
import './styles/Navbar.css'
import SimpleMenu from './SimpleMenu'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link smooth={true} to='homepage' offset={-70} duration={1000}>
          <div className='title'>My Portfolio</div>
        </Link>
      </div>
      <div>
        <ul className='MyList'>
          <li className='Hide'>
            <Link smooth={true} to='mern_stack' offset={-30} duration={1000}>
              MERN Stack
            </Link>
          </li>
          <li className='Hide'>
            <Link smooth={true} to='myskills' offset={-50} duration={1000}>
              My Skills
            </Link>
          </li>
          <li className='Hide'>
            <Link smooth={true} to='portfolio' offset={-55} duration={1000}>
              My Projects
            </Link>
          </li>
          <li className='Hide'>
            <Link smooth={true} to='contact' duration={1000}>
              Contact me
            </Link>
          </li>
          <SimpleMenu />
        </ul>
      </div>
    </div>
  )
}

export default Navbar

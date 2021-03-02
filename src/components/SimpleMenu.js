import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import './styles/SimpleMenu.css'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-scroll'

function iconStyles() {
  return {
    successIcon: {
      color: '#f5f5f7',
    },
  }
}

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = makeStyles(iconStyles)()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className='Menu'>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}>
        <MenuIcon className={classes.successIcon} />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link smooth={true} to='h1_slider' offset={-80} duration={1000}>
            My Skills
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link smooth={true} to='portfolio' offset={-40} duration={1000}>
            My Projects
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link smooth={true} to='contact' offset={-30} duration={1000}>
            Contact me
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

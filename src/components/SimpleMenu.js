import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import './SimpleMenu.css'
import { makeStyles } from '@material-ui/core/styles';

function iconStyles() {
  return {
    successIcon: {
      color: '#f5f5f7',
    },
  }
}

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = makeStyles(iconStyles)();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Menu">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.successIcon}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href="https://www.google.fr">{props.item1}</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://www.google.fr">{props.item2}</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://www.google.fr">{props.item3}</a></MenuItem>
      </Menu>
    </div>
  );
}
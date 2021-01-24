import React from 'react'
import './button.css'
import Button from '@material-ui/core/Button';
function But({url , text  , className}) {
    return (
        <div className="wrapper">
            <Button className={className} variant="contained"><a href={url}>{text}</a></Button>
        </div>
    )
}

export default But

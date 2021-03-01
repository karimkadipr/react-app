import React from 'react'
import './styles/button.css'
import Button from '@material-ui/core/Button'

function But({ url, text, classname }) {
  return (
    <div className='wrapper'>
      <Button variant='contained'>
        <a href={url}>{text}</a>
      </Button>
    </div>
  )
}

export default But

import React from 'react'
import classes from './Button.module.css'
import Button from '@material-ui/core/Button'


const ButtonCustom = props => {
  const cls = [
    classes.Button,
    classes[props.type]
  ]

  return(
    <Button
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
      color={props.type}
      variant="contained"
    >
      {props.children}
    </Button>
  )
}

export default ButtonCustom
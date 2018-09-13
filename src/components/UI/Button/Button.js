import React from 'react';
import classes from './Button.css';

const Button = (props) => {
  let buttonClasses = [classes.Button, classes[props.buttonType]].join(' ');

  return (
    <button className={buttonClasses} onClick={props.clicked}>
      {props.children}
    </button>
  )
}

export default Button;
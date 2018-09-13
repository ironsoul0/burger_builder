import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
  return ( 
    <header className={classes.Toolbar}>
      <div onClick={props.sideDrawerToggler.bind(this, true)} className={classes.Toggler}>
        <div className={classes.HamburgerStick}></div>
        <div className={classes.HamburgerStick}></div>
        <div className={classes.HamburgerStick + ' ' + classes.CornerCase}></div>
      </div>
      <div className={classes.ToolbarLogo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar;
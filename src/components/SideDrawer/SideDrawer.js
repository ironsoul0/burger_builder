import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let backdropShow = false, sideDrawerState = "Close";

  if (props.show) {
    backdropShow = props.show;
    sideDrawerState = "Open";
  }

  return (
    <React.Fragment>
      <Backdrop show={backdropShow} clicked={props.sideDrawerToggler.bind(this, false)} />
      <div className={classes.SideDrawer + ' ' + classes[sideDrawerState]}>
        <div className={classes.SideDrawerLogo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
}

export default SideDrawer;
import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    sideDrawerShow: false
  }

  sideDrawerToggler = (newValue) => {
    this.setState({
      sideDrawerShow: newValue
    })
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar sideDrawerToggler={this.sideDrawerToggler} />
        <SideDrawer show={this.state.sideDrawerShow} sideDrawerToggler={this.sideDrawerToggler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
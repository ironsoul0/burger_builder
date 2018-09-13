import React, { Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    const isVisible = {
      visibility: this.props.show ? 'visible' : 'hidden',
      transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
    }

    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <div style={isVisible} className={classes.Modal}>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}

export default Modal;
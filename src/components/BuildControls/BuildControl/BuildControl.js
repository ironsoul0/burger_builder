import React from 'react';
import classes from './BuildControl.css';

const ingredientColors = {
  meat: {
    color: '#ff5000'
  },
  cheese: {
    color: '#eeff00'
  },
  salad: {
    color: '#1e6b09'
  },
  bacon: {
    color: '#ff3200'
  }
}

const BuildControl = (props) => {
  let isLessDisabled = (props.currentAmount === 0);
  let isMoreDisabled = (props.currentAmount === 5);
  
  let lessDisabled = (props.currentAmount === 0 ? classes.disabled : '');
  let moreDisabled = (props.currentAmount === 5 ? classes.disabled : '');

  let lessClasses = [classes.less, classes.button, lessDisabled];
  let moreClasses = [classes.more, classes.button, moreDisabled];
  
  let contentOfLess = (props.currentAmount === 0 ? <i className="fa fa-ban" /> : <i className="fa fa-minus" />);
  let contentOfMore = (props.currentAmount === 5 ? <i className="fa fa-ban" /> : <i className="fa fa-plus" />);

  return (
    <div className={classes.BuildControl}>
      <p style={ingredientColors[props.type]} className={classes.title}>
        {props.type}
      </p>
      <button className={moreClasses.join(' ')} disabled={isMoreDisabled} onClick={props.setIngredientAmount.bind(this, props.type, 1)}>
        {contentOfMore}
      </button>
      <button className={lessClasses.join(' ')} disabled={isLessDisabled} onClick={props.setIngredientAmount.bind(this, props.type, -1)}>
        {contentOfLess}
      </button>
    </div>
  );
}

export default BuildControl;
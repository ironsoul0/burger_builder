import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.css';

const BurgerIngredient = (props) => {
  let type = props.type;
  if (type === 'bread-bottom') {
    return <div className={styles.BreadBottom}></div>
  } else if (type === 'meat') {
    return <div className={styles.Meat}></div>
  } else if (type === 'cheese') {
    return <div className={styles.Cheese}></div>
  } else if (type === 'salad') {
    return <div className={styles.Salad}></div>
  } else if (type === 'bacon') {
    return <div className={styles.Bacon}></div>
  } else if (type === 'bread-top') {
    return (
      <div className={styles.BreadTop}>
        <div className={styles.Seeds1}></div>
        <div className={styles.Seeds2}></div>
      </div>
    )
  }
  return null;
}

BurgerIngredient.propTypes = {
  type: PropTypes.oneOf(['bread-bottom', 'meat', 'cheese', 'salad', 'bacon', 'bread-top']).isRequired
}

export default BurgerIngredient; 
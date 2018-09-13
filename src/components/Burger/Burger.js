import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const TYPES = ['meat', 'cheese', 'salad', 'bacon'];

const Burger = (props) => {
  var transformedIngredients = [];
  for (let i = 0; i < TYPES.length; i++) {
    for (let j = 0; j < props.ingredients[TYPES[i]]; j++) {
      transformedIngredients.push(
        <BurgerIngredient key={TYPES[i] + j} type={TYPES[i]} />
      );
    }
  }

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>
        Please start adding ingredients
      </p>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
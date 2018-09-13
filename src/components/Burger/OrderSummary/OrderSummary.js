import React from 'react';
import Button from '../../UI/Button/Button';

const capitalize = (element) => {
  let first = element.substring(0, 1);
  let second = element.substring(1);
  return first.toUpperCase() + second;
}

const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients);

  const ingredientsSummary = ingredients.map(ingredient => {
    return (
      <li key={ingredient}>
        {capitalize(ingredient)}: {props.ingredients[ingredient]}
      </li>
    )
  });

  return (
    <React.Fragment>
      <h3>
        Your order
      </h3>
      <p>
        Very tasty burger with the following ingredients:
      </p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>
        <strong>
          Total price: {props.totalPrice.toFixed(2)} $
        </strong>
      </p>
      <p>
        Continue to checkout?
      </p>
      <Button buttonType="Danger" clicked={props.purchaseClickedHandler.bind(this, false)}>
        Cancel
      </Button>
      <Button buttonType="Success" clicked={props.purchaseContinueHandler}>
        Continue
      </Button>
    </React.Fragment>
  );
}

export default OrderSummary;
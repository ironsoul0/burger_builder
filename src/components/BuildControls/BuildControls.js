import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.css';

let iconClasses = '';
let randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 25) {
  iconClasses = 'fa fa-truck'
} else if (randomNumber < 50) {
  iconClasses = 'fa fa-paper-plane';
} else if (randomNumber < 75) {
  iconClasses = 'fa fa-check';
} else {
  iconClasses = 'fa fa-dove';
}

const BuildControls = (props) => {
  let types = Object.keys(props.ingredients);
  let buildControls = [
    <p key="price" className={styles.price}>
      Total price: {props.totalPrice.toFixed(2)} $ 
    </p>
  ];

  for (let i = 0; i < types.length; i++) {
    buildControls.push((
      <BuildControl 
        setIngredientAmount={props.setIngredientAmount} 
        type={types[i]}
        key={types[i]} 
        currentAmount={props.ingredients[types[i]]} />
    ));
  } 

  let iconStyling = {
    marginLeft: '8px'
  }

  let iconPurchasable = (props.purchasable ? <i style={iconStyling} className={iconClasses} /> : null);

  return (
    <div className={styles.BuildControls}>
      {buildControls}
      <button onClick={props.purchaseClickedHandler.bind(this, true)} className={styles.OrderButton} disabled={!props.purchasable}>
        Order Now {iconPurchasable}
      </button>
    </div>
  );

}

export default BuildControls;
import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  meat: 2.3,
  cheese: 1.0,
  salad: 1.5,
  bacon: 2.0
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    },
    totalPrice: 3.5,
    numberOfIngredients: 0,
    purchasable: false,
    purchaseClicked: false,
    loading: false
  }

  componentDidMount() {
    axios.get('/ingredients.json')
      .then(response => {
        this.setState({
          ingredients: response.data
        })
      })
      .catch(error => {

      })
  }

  setIngredientAmount = (type, delta) => {
    let value = this.state.ingredients[type];
    let newIngredients = { ...this.state.ingredients };
    newIngredients[type] = value + delta;
    this.setState((prevState, props) => {
      let newPrice = prevState.totalPrice + INGREDIENT_PRICES[type] * delta;
      let newNumberOfIngredients = prevState.numberOfIngredients + delta;
      return {
        ingredients: newIngredients,
        totalPrice: newPrice,
        numberOfIngredients: newNumberOfIngredients,
        purchasable: newNumberOfIngredients > 0
      }
    });
  }

  purchaseClickedHandler = (newValue) => {
    this.setState({
      purchaseClicked: newValue
    })
  }

  purchaseContinueHandler = () => {
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'T1mka Yussupov',
        address: {
          street: 'DummyStreet',
          zipCode: '777',
          country: 'Brazil'
        },
        email: 'dummy@mail.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false,
          purchaseClicked: false
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          purchaseClicked: false
        })
      })
  }

  render() {
    let orderSummary = <OrderSummary purchaseContinueHandler={this.purchaseContinueHandler} totalPrice={this.state.totalPrice} purchaseClickedHandler={this.purchaseClickedHandler} ingredients={this.state.ingredients} />;

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <React.Fragment>
        <Modal clicked={this.purchaseClickedHandler.bind(this, false)} show={this.state.purchaseClicked} purchaseClickedHandler={this.purchaseClickedHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          purchaseClickedHandler={this.purchaseClickedHandler}
          purchasable={this.state.purchasable}
          totalPrice={this.state.totalPrice}
          setIngredientAmount={this.setIngredientAmount}
          ingredients={this.state.ingredients} />
      </React.Fragment>
    );
  }
}

//export default BurgerBuilder;
export default withErrorHandler(BurgerBuilder, axios);
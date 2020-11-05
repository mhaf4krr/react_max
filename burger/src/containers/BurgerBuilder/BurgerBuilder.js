import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchaseable: false,
  };

  updatePurchaseState = (updatedIngredients) => {
    const ingredients = { ...updatedIngredients };

    let sum = Object.keys(ingredients).map((ing) => {
      return ingredients[ing];
    });

    sum = sum.reduce((acc, el) => {
      return acc + el;
    }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;

    //Handling Price

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount === 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;

    //Handling Price

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice}
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
        />
      </React.Fragment>
    );
  }
}

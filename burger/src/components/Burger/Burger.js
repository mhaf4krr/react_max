import React from "react";
import styles from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  let transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please Start Adding ingredients</p>;
  }

  console.log(transformIngredients);
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;

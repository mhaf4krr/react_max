import React from "react";

import styles from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Bacon",
    type: "bacon",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
  {
    label: "Meat",
    type: "meat",
  },
];

export default function BuildControls(props) {
  return (
    <div className={styles.BuildControls}>
      <p> Current Price : {props.price.toFixed(2)}</p>
      {controls.map((control) => {
        return (
          <BuildControl
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            key={control.label}
            label={control.label}
          />
        );
      })}

      <button disabled={!props.purchaseable} className={styles.OrderButton}>
        ORDER NOW
      </button>
    </div>
  );
}

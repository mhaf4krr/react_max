import React from 'react'

import Button from "../../UI/Button/Button"

export default function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return (<li>
                <span
                style={{
                    textTransform:"capitalize"
                }}>{igKey}</span> : {props.ingredients[igKey]}
            </li>)
        })

        console.log(ingredientSummary)
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
    <p><strong>Total Pice:{props.price}</strong></p>
                <p>Continue to CheckOut</p>
            </ul>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </React.Fragment>
    )
}

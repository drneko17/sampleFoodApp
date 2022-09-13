import React, { useRef, useState, useContext } from "react";
import classes from "./FoodItem.module.css";
import Button from "../../UI/Button/Button";
import CartContext from "../../../store/cart-context";

const FoodItem = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const addFoodHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };

  return (
    <div className={classes.foodContainer}>
      <div className={classes.foodInfo}>
        <div className={classes.foodName}>{props.name}</div>
        <div className={classes.foodText}>{props.text}</div>
        <div className={classes.foodPrice}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <form onSubmit={addFoodHandler} className={classes.foodForm}>
        <div className={classes.foodAmountPanel}>
          <label className={classes.foodLabel} htmlFor={`amount_${props.id}`}>
            Amount
          </label>
          <input
            ref={amountInputRef}
            type="number"
            className={classes.foodAmount}
            min="1"
            defaultValue="1"
            id={`amount_${props.id}`}
          ></input>
        </div>
        <Button type="submit">+ Add</Button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
      </form>
    </div>
  );
};

export default FoodItem;

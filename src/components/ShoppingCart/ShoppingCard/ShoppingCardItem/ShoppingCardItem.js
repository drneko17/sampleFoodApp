import React from "react";
import classes from "./ShoppingCardItem.module.css";
import Button from "../../../UI/Button/Button";

const ShoppingCardItem = (props) => {
  return (
    <div className={classes.shoppingCartItemContainer}>
      <div className={classes.shoppingCartLeft}>
        <div className={classes.shoppingLeft__namecost}>
          <div className={classes.shoppingCartItemName}>{props.name}</div>
          <div className={classes.shoppingCartItemCost}>
            ${props.price.toFixed(2)}
          </div>
        </div>
        <div className={classes.shoppingCartItemAmount}>x {props.amount}</div>
      </div>
      <div className={classes.shoppingCartRight}>
        <Button className={classes.addSubButton} onClick={props.onRemove}>
          -
        </Button>
        <Button className={classes.addSubButton} onClick={props.onAdd}>
          +
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCardItem;

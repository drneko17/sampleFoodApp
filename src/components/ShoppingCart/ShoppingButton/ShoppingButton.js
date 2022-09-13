import React, { useContext, useEffect, useState } from "react";
import classes from "./ShoppingButton.module.css";
import CartContext from "../../../store/cart-context";

const ShoppingButton = (props) => {
  const [btnIsHigh, setBtnIsHigh] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClasses = `${classes.shoppingButtonContainer} ${
    btnIsHigh ? classes.bump : ""
  }`;

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHigh(true);

    const timer = setTimeout(() => {
      setBtnIsHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div onClick={props.cartToggle} className={btnClasses}>
      <div className={classes.shoppingButtonLabel}>Shopping Cart</div>
      <div className={classes.shoppingButtonCount}>{numberOfCartItems}</div>
    </div>
  );
};

export default ShoppingButton;

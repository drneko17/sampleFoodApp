import React from "react";
import classes from "./Nav.module.css";
import ShoppingButton from "../ShoppingCart/ShoppingButton/ShoppingButton";

const Nav = (props) => {
  return (
    <div className={classes.navBar}>
      <div className={classes.leftSide}>
        <p className={classes.navName}>ReactMeals</p>
      </div>
      <div className={classes.rightSide}>
        <ShoppingButton cartToggle={props.cartToggle} />
      </div>
    </div>
  );
};

export default Nav;

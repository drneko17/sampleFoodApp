import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${classes.myButton} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;

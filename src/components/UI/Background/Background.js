import React from "react";
import classes from "./Background.module.css";

const Background = (props) => {
  return (
    <>
      <div className={classes.firstHalf}>
        <img src="https://images.unsplash.com/photo-1577308856961-8e9ec50d0c67?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"></img>
      </div>
      <div className={classes.secondHalf}></div>
    </>
  );
};

export default Background;

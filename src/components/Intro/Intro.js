import React from "react";
import classes from "./Intro.module.css";
import Card from "../UI/Card/Card";

const Intro = () => {
  return (
    <Card className={classes.introCard}>
      <h2 className={classes.introH2}>Delicious Food, Delivered To You</h2>
      <p className={classes.introP}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={classes.introP}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by expedienced chefs!
      </p>
    </Card>
  );
};

export default Intro;

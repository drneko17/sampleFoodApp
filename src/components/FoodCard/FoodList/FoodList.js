import { useEffect, useState } from "react";

import React from "react";
import classes from "./FoodList.module.css";
import Card from "../../UI/Card/Card";
import FoodItem from "../FoodItem/FoodItem";

const FoodList = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://samplefoodorderapp-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];
      for (let key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          text: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.foodLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <Card className={classes.foodListCard}>
      {meals.map((item) => (
        <FoodItem
          key={item.id}
          name={item.name}
          text={item.text}
          price={item.price}
          id={item.id}
        />
      ))}
    </Card>
  );
};

export default FoodList;

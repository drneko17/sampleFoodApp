import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";
import FoodList from "./components/FoodCard/FoodList/FoodList";
import Background from "./components/UI/Background/Background";
import ShoppingCard from "./components/ShoppingCart/ShoppingCard/ShoppingCard";
import CartProvider from "./store/CartProvider";

function App() {
  const [isShoppingCardShown, setIsShoppingCardShown] = useState(false);

  const shoppingCardToggler = () => {
    if (isShoppingCardShown === false) {
      setIsShoppingCardShown(true);
    } else {
      setIsShoppingCardShown(false);
    }
  };

  return (
    <CartProvider>
      <Background />
      <Nav cartToggle={shoppingCardToggler} />
      {isShoppingCardShown && <ShoppingCard cartToggle={shoppingCardToggler} />}
      <Intro />
      <FoodList />
    </CartProvider>
  );
}

export default App;

import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./ShoppingCard.module.css";
import Card from "../../UI/Card/Card";
import ShoppingCardItem from "./ShoppingCardItem/ShoppingCardItem";
import CartContext from "../../../store/cart-context";
import Button from "../../UI/Button/Button";
import Checkout from "../Checkout";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ShoppingCard = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const addItemInsideCart = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemInsideCart = (item) => {
    cartCtx.removeItem(item);
  };

  const orderHandler = () => {
    if (isCheckout) {
      setIsCheckout(false);
    } else {
      setIsCheckout(true);
    }
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://reactguideudemy-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = cartCtx.items.map((item) => (
    <ShoppingCardItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={addItemInsideCart.bind(null, item)}
      onRemove={removeItemInsideCart.bind(null, item)}
    ></ShoppingCardItem>
  ));

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.totalContainer}>
        <div className={classes.totalAmountText}>Total Amount</div>
        <div className={classes.totalAmountNumber}>${totalAmount}</div>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={orderHandler} />
      )}
      {!isCheckout && (
        <Button className={classes.orderButton} onClick={orderHandler}>
          Order
        </Button>
      )}
    </>
  );

  const isSubmittingModalContent = (
    <>
      <p>Sending order data...</p>
    </>
  );

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      {/* <button>Close</button> */}
    </>
  );

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.cartToggle} />,
        document.querySelector("#backdrop-root")
      )}
      <Card className={classes.shoppingCardCard}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {didSubmit && didSubmitModalContent}
      </Card>
    </>
  );
};

export default ShoppingCard;

import React from "react";
import Toppings from "./Toppings";
import OrderName from "./OrderName";
import Size from "./Size";
import Sauce from "./Sauce";
import Special from "./Special";

export default function Form(props) {
  return (
    <div>
      <header>Build Your Own Pizza</header>
      <h1>Build Your Own Pizza</h1>
      <OrderName />
      <Size />
      <Sauce />
      <Toppings />
      <Special />
      <div>
        <button id="order-button">Add to Order</button>
      </div>
    </div>
  );
}

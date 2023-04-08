import React, { useState } from "react";
import Toppings from "./Toppings";
import OrderName from "./OrderName";
import Size from "./Size";
import Sauce from "./Sauce";

export default function Form(props) {
  const [user, setUser] = useState({
    specialInstructions: "",
  });

  const onChange = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
    console.log(evt.target);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setUser({
      specialInstructions: "",
    });
  };

  return (
    <div>
      <header>Build Your Own Pizza</header>
      <h1>Build Your Own Pizza</h1>
      <OrderName />
      <Size />
      <Sauce />
      <Toppings />
      <form onSubmit={onSubmit}>
        <label>
          <h2>Special Instructions</h2>
          <input
            id="special-text"
            name="specialInstructions"
            type="text"
            value={user.specialInstructions}
            onChange={onChange}
          />
        </label>
      </form>
    </div>
  );
}

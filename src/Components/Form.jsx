import React, { useState } from "react";
import Toppings from "./Toppings";
// import * as Yup from "yup";

export default function Form(props) {
  const [user, setUser] = useState({
    name: "",
    specialInstructions: "",
    sauce: false,
    size: "",
  });

  const onChange = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
    console.log(evt.target);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setUser({
      name: "",
      specialInstructions: "",
      sauce: false,
      size: "",
    });
  };

  return (
    <div>
      <header>Build Your Own Pizza</header>
      <h1>Build Your Own Pizza</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name on Order
          <input
            id="name-input"
            name="name"
            type="text"
            value={user.name}
            onChange={onChange}
          />
        </label>
      </form>
      <form id="pizza-form" onSubmit={onSubmit}>
        <label>
          <h2>Choice of Size</h2>
          Required
          <select
            id="size-dropdown"
            name="size"
            value={user.size}
            onChange={onChange}
          >
            <option value="">--Select--</option>
            <option value="10inch">10 Inch</option>
            <option value="12inch">12 Inch</option>
            <option value="16inch">16 Inch</option>
            <option value="20inch">20 Inch</option>
          </select>
        </label>
      </form>
      <form onSubmit={onSubmit}>
        <div>
          <h2>Choice of Sauce</h2>
          <p>Required</p>
        </div>
        <div>
          <label>
            <input
              name="sauce"
              type="radio"
              value="option1"
              checked={user.sauce === "option1"}
              onChange={onChange}
            />
            Original Red
          </label>
          <label>
            <input
              name="sauce"
              type="radio"
              value="option2"
              checked={user.sauce === "option2"}
              onChange={onChange}
            />
            Garlic Ranch
          </label>
          <label>
            <input
              name="sauce"
              type="radio"
              value="option3"
              checked={user.sauce === "option3"}
              onChange={onChange}
            />
            BBQ Sauce
          </label>
          <label>
            <input
              name="sauce"
              type="radio"
              value="option4"
              checked={user.sauce === "option4"}
              onChange={onChange}
            />
            Spinach Alfredo
          </label>
        </div>
      </form>
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

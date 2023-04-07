import React, { useState } from "react";

export default function Toppings(props) {
  const [toppings, setToppings] = useState({
    pepperoni: "",
    sausage: "",
    canadianBacon: "",
    spicyItalianSausage: "",
    grilledChicken: "",
    onions: "",
    greenPepper: "",
    dicedTomatos: "",
    blackOlives: "",
    roastedGarlic: "",
    artichokeHearts: "",
    threeCheese: "",
    pineapple: "",
    extraCheese: "",
  });

  const onChange = (evt) => {
    const { name, type, value, checked } = evt.target;
    const updatedInfo = type === "checkbox" ? checked : value;
    setToppings({ ...toppings, [name]: updatedInfo });
    console.log(evt.target);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setToppings({
      name: "",
      specialInstructions: "",
      sauce: false,
      size: "",
      toppings: false,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Add Toppings</h2>
        <p>Choose up to 10</p>
      </div>
      <div>
        <label>
          <input
            name="pepperoni"
            type="checkbox"
            checked={toppings.pepperoni}
            onChange={onChange}
          />
          Pepperoni
        </label>
        <label>
          <input
            name="sausage"
            type="checkbox"
            checked={toppings.sausage}
            onChange={onChange}
          />
          Sausage
        </label>
        <label>
          <input
            name="canadianBacon"
            type="checkbox"
            checked={toppings.canadianBacon}
            onChange={onChange}
          />
          Canadian Bacon
        </label>
        <label>
          <input
            name="spicyItalianSausage"
            type="checkbox"
            checked={toppings.spicyItalianSausage}
            onChange={onChange}
          />
          Spicy Italian Sausage
        </label>
        <label>
          <input
            name="grilledChicken"
            type="checkbox"
            checked={toppings.grilledChicken}
            onChange={onChange}
          />
          Grilled Chicken
        </label>
        <label>
          <input
            name="onions"
            type="checkbox"
            checked={toppings.onions}
            onChange={onChange}
          />
          Onions
        </label>
        <label>
          <input
            name="greenPepper"
            type="checkbox"
            checked={toppings.greenPepper}
            onChange={onChange}
          />
          Green Pepper
        </label>
        <label>
          <input
            name="dicedTomato"
            type="checkbox"
            checked={toppings.dicedTomato}
            onChange={onChange}
          />
          Diced Tomato
        </label>
        <label>
          <input
            name="blackOlives"
            type="checkbox"
            checked={toppings.blackOlives}
            onChange={onChange}
          />
          Black Olives
        </label>
        <label>
          <input
            name="roastedGarlic"
            type="checkbox"
            checked={toppings.roastedGarlic}
            onChange={onChange}
          />
          Roasted Garlic
        </label>
        <label>
          <input
            name="artichokeHearts"
            type="checkbox"
            checked={toppings.artichokeHearts}
            onChange={onChange}
          />
          Artichoke Hearts
        </label>
        <label>
          <input
            name="threeCheese"
            type="checkbox"
            checked={toppings.threeCheese}
            onChange={onChange}
          />
          Three Cheese
        </label>
        <label>
          <input
            name="pineapple"
            type="checkbox"
            checked={toppings.pineapple}
            onChange={onChange}
          />
          Pineapple
        </label>
        <label>
          <input
            name="extraCheese"
            type="checkbox"
            checked={toppings.extraCheese}
            onChange={onChange}
          />
          Extra Cheese
        </label>
      </div>
    </form>
  );
}

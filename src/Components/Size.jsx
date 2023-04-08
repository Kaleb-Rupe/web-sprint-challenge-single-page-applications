import React, { useState } from "react";

export default function Size(props) {
  const [pizzaSize, setPizzaSize] = useState({
    size: "",
  });

  const onChange = (evt) => {
    setPizzaSize({ ...pizzaSize, [evt.target.name]: evt.target.value });
    console.log(evt.target.size);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setPizzaSize({
      size: "",
    });
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <label>
        <h2>Choice of Size</h2>
        Required
        <select
          id="size-dropdown"
          name="size"
          value={pizzaSize.size}
          onChange={onChange}
        >
          <option value="select">--Select--</option>
          <option value="tenInch">10 Inch</option>
          <option value="twelveInch">12 Inch</option>
          <option value="sixteenInch">16 Inch</option>
          <option value="twentyInch">20 Inch</option>
        </select>
      </label>
    </form>
  );
}

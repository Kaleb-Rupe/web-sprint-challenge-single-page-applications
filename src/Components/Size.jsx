import React, { useState } from "react";

export default function Size(props) {
  const [pizzaSize, setPizzaSize] = useState({
    size: "",
  });

  const onChange = (evt) => {
    setPizzaSize({ ...pizzaSize, [evt.target.name]: evt.target.value });
    console.log(evt.target);
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
          <option value="">--Select--</option>
          <option value="10inch">10 Inch</option>
          <option value="12inch">12 Inch</option>
          <option value="16inch">16 Inch</option>
          <option value="20inch">20 Inch</option>
        </select>
      </label>
    </form>
  );
}

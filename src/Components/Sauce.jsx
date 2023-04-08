import React, { useState } from "react";

export default function Sauce(props) {
  const [sauceChoice, setSauceChoice] = useState({
    sauce: false,
  });

  const onChange = (evt) => {
    setSauceChoice({ ...sauceChoice, [evt.target.name]: evt.target.value });
    console.log(evt.target);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setSauceChoice({
      sauce: false,
    });
  };

  return (
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
            checked={sauceChoice.sauce === "option1"}
            onChange={onChange}
          />
          Original Red
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
            value="option2"
            checked={sauceChoice.sauce === "option2"}
            onChange={onChange}
          />
          Garlic Ranch
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
            value="option3"
            checked={sauceChoice.sauce === "option3"}
            onChange={onChange}
          />
          BBQ Sauce
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
            value="option4"
            checked={sauceChoice.sauce === "option4"}
            onChange={onChange}
          />
          Spinach Alfredo
        </label>
      </div>
    </form>
  );
}

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
            value="originalRed"
            checked={sauceChoice.sauce === "originalRed"}
            onChange={onChange}
          />
          Original Red
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
            value="garlicRanch"
            checked={sauceChoice.sauce === "garlicRanch"}
            onChange={onChange}
          />
          Garlic Ranch
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
            value="bbqSauce"
            checked={sauceChoice.sauce === "bbqSauce"}
            onChange={onChange}
          />
          BBQ Sauce
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
            value="spinachAlfredo"
            checked={sauceChoice.sauce === "spinachAlfredo"}
            onChange={onChange}
          />
          Spinach Alfredo
        </label>
      </div>
    </form>
  );
}

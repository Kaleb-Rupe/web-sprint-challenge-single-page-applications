import React, { useState } from "react";

export default function Special(props) {
  const [special, setSpecial] = useState({
    specialInstructions: "",
  });

  const onChange = (evt) => {
    setSpecial({ ...special, [evt.target.name]: evt.target.value });
    console.log(evt.target);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setSpecial({
      specialInstructions: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <h2>Special Instructions</h2>
        <input
          id="special-text"
          name="specialInstructions"
          type="text"
          value={special.specialInstructions}
          onChange={onChange}
        />
      </label>
    </form>
  );
}

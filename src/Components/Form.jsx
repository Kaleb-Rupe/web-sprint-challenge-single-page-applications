import React from "react";

export default function Form(props) {
  return (
    <div>
      <h1>Build Your Own Pizza</h1>
      <form id="pizza-form">
        <h2>Build Your Own Pizza</h2>
        <label>
          Choice of Size
          <p>Required</p>
          <input id="name-input" type="text" name="name" />
        </label>
      </form>
    </div>
  );
}

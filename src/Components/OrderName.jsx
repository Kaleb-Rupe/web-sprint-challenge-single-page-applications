import React, { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(2, "name must be at least 2 characters"),
});

export default function OrderName(props) {
  const [orderName, setOrderName] = useState({
    name: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const onChange = (evt) => {
    setOrderName({ ...orderName, [evt.target.name]: evt.target.value });
    const { name, value } = evt.target;
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
    setOrderName({ ...orderName, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setOrderName({
      name: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name on Order
        <input
          id="name-input"
          name="name"
          type="text"
          value={orderName.name}
          onChange={onChange}
        />
      </label>
      {errors.name.length > 0 && <p className="error">{errors.name}</p>}
    </form>
  );
}

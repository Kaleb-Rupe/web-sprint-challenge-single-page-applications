import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Form from "./Form";

export default function Home(props) {
  return (
    <div>
      <h1>Your Favorite Food, Delivered While Coding</h1>
      <Link to="pizza">
        <button>Pizza?</button>
      </Link>
      <Routes>
        <Route path="pizza/*" element={<Form />} />
      </Routes>
      <h3>Food Delivery in Gothem City</h3>
    </div>
  );
}

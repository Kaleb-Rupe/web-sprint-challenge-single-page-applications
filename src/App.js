import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";

const App = () => {
  return (
    <div>
      <header>
        BloomTech Eats
        <nav>
          <Link to="/">Home</Link>&nbsp;
          <Link id="order-pizza" to="pizza">
            Order
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza/*" element={<Form />} />
      </Routes>
    </div>
  );
};
export default App;

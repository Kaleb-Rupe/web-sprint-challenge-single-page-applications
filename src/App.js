import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Your Favorite Food, Delivered While Coding</h1>
      <button>Pizza?</button>
      <h3>Food Delivery in Gothem City</h3>
    </div>
  );
}

function Form(props) {
  return (
    <div>
      <h1>Build Your Own Pizza</h1>
      <form>
        <label>
          Build Your Own Pizza
          <input />
        </label>
      </form>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>BloomTech Eats</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link id="order-pizza" to="pizza">
          Order
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza/*" element={<Form />} />
      </Routes>
    </div>
  );
};
export default App;

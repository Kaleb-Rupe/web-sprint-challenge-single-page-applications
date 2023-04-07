import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home(props) {
  return <h2>Home</h2>;
}

function Order(props) {
  return <h2>Order</h2>;
}

const App = () => {
  return (
    <div>
      <h1>BloomTech Eats</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="order">Order</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </div>
  );
};
export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";

function Nav() {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Order" element={<Order/>}/>     
        </Routes>   
    </Router>
  );
}
export default Nav;
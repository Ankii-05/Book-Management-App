import React from "react";
import Home from "./Pages/Home"; 
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Navbar from "./Component/Navbar";
import SignUp from "./Pages/SignUp";
import MyBookApp from "./Pages/MyBookApp";
import Favorite from "./Pages/Favorite";
import Cart from "./Pages/Cart";
function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/MyBookApp" element={<MyBookApp />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;

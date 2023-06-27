import './App.css';
import {Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Order from './components/Order';
import Login from './components/Login';
import React from "react";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

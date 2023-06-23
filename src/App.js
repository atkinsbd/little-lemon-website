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

const updateTimes = (state, action) => {

  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1)
  tomorrow = tomorrow.toISOString().substring(0,10);
  today = today.toISOString().substring(0,10);
  
  switch (action.type) {

    case today:
      return ["16:00", "17:00"];

    case tomorrow:
      return ["17:00"];
    
    default:
      return state;
  }
}

const initialiseTimes = (initialState) => {
  return initialState;
}

function App() {

  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const [availableTimes, dispatch] = React.useReducer(updateTimes, initialState, initialiseTimes);

  // dispatch({type: "1"})

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservation' element={<Reservation availableTimes={availableTimes} dispatch={dispatch}/>} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

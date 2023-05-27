import './App.css';
import {Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<Homepage />} />
        <Route path='/Menu' element={<Homepage />} />
        <Route path='/Reservation' element={<Homepage />} />
        <Route path='/Order' element={<Homepage />} />
        <Route path='/Login' element={<Homepage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Rides from './pages/Rides/Rides';
import Drive from './pages/Drive/Drive';
import Food from './pages/Food/Food';
import About from './pages/About us/About';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Login';
import Item from './pages/item/item';
import Footer from './components/footer/footer';
import Foods from './admin/foods/Foods';
import AddFood from './admin/addFoods/AddFood';
import EditFood from './admin/editFoods/EditFood';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/food" element={<Food />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/item" element={<Item />} />

        <Route path="/admin/foods" element={<Foods/>} />
        <Route path="/admin/foods/add" element={<AddFood/>} />
        <Route path="/admin/foods/edit/:id" element={<EditFood/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

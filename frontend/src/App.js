
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/home/Loginpage/Login';
import Rides from './pages/home/Rides/Rides';
import Food from './pages/home/Food/food'; // Renamed to "Food"
import Drive from './pages/home/Drive/drive';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/food" element={<Food />} /> 
          <Route path="/drive" element={<Drive />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}



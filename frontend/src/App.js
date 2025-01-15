
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/home/Loginpage/Login';
import Rides from './pages/home/Rides/Rides';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Rides" element={<Rides />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


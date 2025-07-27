import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import SeatALayout from './pages/SeatALayout';
import MovieDetails from './pages/MovieDetails';
import MyBooking from './pages/MyBooking';
import Favorites from './pages/Favorites';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
 
const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster/> 
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/movies" element={<Movies />} />
        <Route path = "/movies/:id" element={<MovieDetails />} />
        <Route path = "/movies/:id/:date" element={<SeatALayout />} />
        <Route path = "/mybookings" element={<MyBooking />} />
        <Route path = "/favorites" element={<Favorites />} />



      </Routes>
    </>
  )
}

export default App;
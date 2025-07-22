import React from 'react';
import Navbar from './components/Navbar.jsx';
import {Route,Routes} from 'react-router-dom  '; // Assuming you have a Routes component for routing
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
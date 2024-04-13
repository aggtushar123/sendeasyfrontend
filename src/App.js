import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import TravelerListing from './pages/TravelerListing';
import CreateTravellerListing from './pages/CreateTravellerLising';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Traveler from './pages/Traveler';

function App() {
  const ViewHeader = useSelector((state) => state.header.value);
  console.log(ViewHeader);
  return (
    <>
      <Router>
        {ViewHeader && <Header />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/travelerListing' element={<TravelerListing />} />
        </Routes>
        {/* <TravelerListing/> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

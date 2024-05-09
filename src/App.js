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
import Traveler from './components/Traveler';
import LuggageListing from './pages/LugageListing';
import ForgetPassword from './components/ForgetPassword';
import ForgetOtp from './components/ForgetOtp';
import Sidebar from './components/Sidebar';
import Terms from './pages/Terms';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoggedInSuccess from './pages/LoggedInSuccess';
import CreateLuggageListing from './pages/CreateLuggageListing'
import PrivateRoute from './components/PrivateRoute';

function App() {
  const ViewHeader = useSelector((state) => state.header.value);

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<PrivateRoute />} >
          <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route path='/fp' element={<ForgetPassword />} />
          <Route path='/t&c' element={<Terms />} />
          <Route path='/fo' element={<ForgetOtp />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/loggedInSuccess' element={<LoggedInSuccess />} />
          <Route path='/travelerListing' element={<TravelerListing />} />
          <Route path='/luggageListing' element={<LuggageListing />} />
          <Route path='/createTraveler' element={<PrivateRoute />} >
          <Route path='/createTraveler' element={<CreateTravellerListing />} />
          </Route>
          <Route path='/createLuggage' element={<PrivateRoute />} >
          <Route path='/createLuggage' element={<CreateLuggageListing/>} />
          </Route>
          
        </Routes>
        {/* <TravelerListing/> */}
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

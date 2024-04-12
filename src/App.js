import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTravellerListing from "./pages/CreateTravellerLising";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import { useState } from "react";


function App() {



  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/contact" element={<Contact />}   />
          <Route path="/login" element={<Login />}   />
          <Route path="/Signup" element={<Signup />}   />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;

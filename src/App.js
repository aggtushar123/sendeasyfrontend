import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TravelerListing from "./pages/TravelerListing";
import CreateTravellerListing from "./pages/CreateTravellerLising";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import LuggageListing from "./pages/LugageListing";
import ForgetPassword from "./components/ForgetPassword";
import ForgetOtp from "./components/ForgetOtp";
import Terms from "./pages/Terms";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateLuggageListing from "./pages/CreateLuggageListing";
import PrivateRoute from "./components/PrivateRoute";
import DashboardComponent from "./components/Dashboard/DashboardComponent";
import Profile from "./components/Dashboard/Profile";
import Chats from "./components/Dashboard/Chats";
import Notifications from "./components/Dashboard/Notifications";
import UpdateKyc from "./components/Dashboard/UpdateKyc";
import TravelerDetails from "./pages/TravelerDetails";
import GoogleAuthSuccess from "./components/GoogleAuthSuccess";
import LuggageDetails from "./pages/LuggageDetails";

function App() {

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardComponent />} />
              <Route path="profile" element={<Profile />} />
              <Route path="notification" element={<Notifications />} />
              <Route path="chats" element={<Chats />} />
              <Route path="updatekyc" element={<UpdateKyc />} />
              <Route path="t&c" element={<Terms />} />
            </Route>
          </Route>
          <Route path="/auth/google/success" element={<GoogleAuthSuccess/>}/>
          <Route path="/fp" element={<ForgetPassword />} />
          <Route path="/t&c" element={<Terms />} />
          <Route path="/fo" element={<ForgetOtp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
         

          <Route path="/travelerListing" element={<TravelerListing />} />
          <Route path="/travelerListing/travelerdetails" element={<TravelerDetails />} />

          <Route path="/luggageListing" element={<LuggageListing />} />
          <Route path="/luggageListing/luggagedetails" element={<LuggageDetails />} />
          <Route path="/createTraveler" element={<PrivateRoute />}>
            <Route
              path="/createTraveler"
              element={<CreateTravellerListing />}
            />
          </Route>
          <Route path="/createLuggage" element={<PrivateRoute />}>
            <Route path="/createLuggage" element={<CreateLuggageListing />} />
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

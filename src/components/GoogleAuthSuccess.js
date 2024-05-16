import React, {useEffect} from "react"
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../features/auth/authSlice';

const GoogleAuthSuccess = () => {
  const dispatch = useDispatch();
  

  // Dispatch googleLogin() action upon component mount (or useEffect if needed)
  
  useEffect(() => {
    console.log("dispatch")
    dispatch(googleLogin());
    }, [ dispatch]);

  // Redirect to home page or any other desired route after dispatching the action
  return <Navigate to="/" />;
};

export default GoogleAuthSuccess;

import React, {useEffect} from "react"
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { facebookLogin } from '../features/auth/authSlice';

const FacebookAuthSuccess = () => {
  const dispatch = useDispatch();
  

  // Dispatch googleLogin() action upon component mount (or useEffect if needed)
  
  useEffect(() => {
    dispatch(facebookLogin());
    }, [ dispatch]);

  // Redirect to home page or any other desired route after dispatching the action
  return <Navigate to="/" />;
};

export default FacebookAuthSuccess;

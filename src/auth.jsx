import React from 'react';
import { Route } from "react-router-dom";
import { Login, Register } from './pages';




const Auth = () => {
  return (
    <div>
      <Route exact path = '/auth/login' component = { Login } />
      <Route exact path = '/auth/register' component = { Register } />
    </div>
  )
}

export default Auth;
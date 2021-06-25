import { Main, Login, Register } from "@pages";
import { initializeApp } from "@redux/app-reducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import App from "./app";

import './App.less'
import Auth from "./auth";
import { selectInitialize } from "./selectors/app-selector";



const Root = () => {

  const dispatch = useDispatch();
  const initialized = useSelector(selectInitialize);

  React.useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  if (!initialized) {
    return <div></div>
  }

  return (
    <div className='app-wrapper'>
      <Route path='/auth' component={ Auth } />
      <Route path='/app' component={ App } />
    </div>
  )
}


export default Root;

import React from 'react';
import { Route } from "react-router-dom";

import { Main } from './pages';

import Header from '@components/Header/header';
import Sidebar from '@components/Sidebar/sidebar';



const App = () => {
  return (
    <div className = 'app'>
      <Header />

      <div className = 'app__inner'>
        <Sidebar />
        
        <Route exact path = '/app/main' component = { Main } />
        
      </div>
    </div>
  )
}

export default App;
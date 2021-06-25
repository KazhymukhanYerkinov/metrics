import React from 'react';
import { Route } from "react-router-dom";

import { Diagnostics, Guides, Main, Mode, Settings } from './pages';

import Header from '@components/Header/header';
import Sidebar from '@components/Sidebar/sidebar';



const App = () => {
  return (
    <div className = 'app'>
      <Header />

      <div className = 'app__inner'>
        <div className = 'app__sidebar'>
          <Sidebar />
        </div>
        
        <div className = 'app__content'>
          <Route exact path = '/app/main' component = { Main } />
          <Route exact path = '/app/mode' component = { Mode } />
          <Route exact path = '/app/settings' component = { Settings } />
          <Route exact path = '/app/guides' component = { Guides } />
          <Route exact path = '/app/diagnos' component = { Diagnostics } />
        </div>
        
      </div>
    </div>
  )
}

export default App;
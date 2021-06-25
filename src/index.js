import React from "react";
import ReactDOM from "react-dom";
import store from "@redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

import App from "./root";


ReactDOM.render(
  <BrowserRouter>
    <Provider store = { store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

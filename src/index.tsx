import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'moment/locale/pt-br'
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import store from './Store/index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);


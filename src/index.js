import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { db, auth } from './firebase-config';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    auth,
    db
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

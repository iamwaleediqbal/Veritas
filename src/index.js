import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './Components/Header';
import Login from './Components/Login';
import Navigation from './Components/Navigation';

ReactDOM.render(

  <React.StrictMode>
       <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
  
);

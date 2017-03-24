import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/header.js';
import App from './App';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css'
import '../bower_components/jquery/dist/jquery.min.js'
import './index.css';

ReactDOM.render(
  <div>
    <HeaderBar />
    <App />
  </div>,

  document.getElementById('root')
);

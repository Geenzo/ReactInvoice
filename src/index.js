import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/header.js';
import YourDetails from './components/YourDetails.js';
import ProjectDetails from './components/ProjectDetails.js';
import Lineitems from './components/Lineitems.js';
import Footer from './components/Footer.js';
import App from './App';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css'
import '../bower_components/jquery/dist/jquery.min.js'
import './index.css';

ReactDOM.render(
  <div>
    <HeaderBar />
    <YourDetails />
    <ProjectDetails />
    <Lineitems />
    <Footer />
    <App />
  </div>,

  document.getElementById('root')
);

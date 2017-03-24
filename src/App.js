import React, { Component } from 'react';
import YourDetails from './components/YourDetails.js';
import ProjectDetails from './components/ProjectDetails.js';
import Lineitems from './components/Lineitems.js';
import Footer from './components/Footer.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <YourDetails />
        <ProjectDetails />
        <Lineitems />
        <Footer />
      </div>
    );
  }
}

export default App;

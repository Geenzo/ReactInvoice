import React, { Component } from 'react';
import YourDetails from './components/YourDetails.js';
import ProjectDetails from './components/ProjectDetails.js';
import Lineitems from './components/Lineitems.js';
import Footer from './components/Footer.js';
import './css/App.css';



class App extends Component {
  constructor(){
    super()
    this.state = {
      Phone: 'Your Phone Number',
      Email: 'Your Email Address',
      Website: 'Your Website',
      YourName: 'Your Name',
    };
  }

  changeInfo(YourName){
    this.setState({YourName});
  }

  render() {
    return (
      <div className="App container">
        <YourDetails changeInfo={this.changeInfo.bind(this)} YourName={this.state.YourName}/>
        <ProjectDetails />
        <Lineitems />
        <Footer />
      </div>
    );
  }
}

export default App;

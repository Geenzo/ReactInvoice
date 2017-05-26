import React, { Component } from 'react';
import MainBody from './components/MainBody.js';
import HeaderBar from './components/header.js';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import './css/App.css';



class App extends Component {
  constructor(){
    super()
    this.state = {
      numChildren: 1,
      hourly_rate: 0,
      total: 0
    };
  }

  updateRate(){
  	this.setState({hourly_rate: ''})
  }

  render() {
  return(
    <div>
      <HeaderBar hourly_rate={this.state.hourly_rate} updateRate={this.updateRate}/>
      <MainBody />
    </div>

  )}
}

export default App;

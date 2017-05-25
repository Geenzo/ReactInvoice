import React, { Component } from 'react';
import YourDetails from '../components/YourDetails.js';
import ProjectDetails from '../components/ProjectDetails.js'
import ParentComponent from '../components/ParentComponent.js';
import Lineitems from '../components/Lineitems.js';
import Footer from '../components/Footer.js';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import '../css/App.css';



class MainBody extends Component {
  constructor(){
    super()
    this.state = {
      Phone: 'Your Phone Number',
      Email: 'Your Email Address',
      Website: 'Your Website',
      YourName: 'Your Names',
      numChildren: 1,
      HourlyRate: 0,
    };
  }

  changeInfo(YourName){
    this.setState({YourName});
  }

  onAddChild(){
      this.setState({
          numChildren: this.state.numChildren + 1
      });
  }

  render() {
      const children = [];

      for (var i = 0; i < this.state.numChildren; i += 1) {
          children.push(<Lineitems number={i} />);
      };

    return (
      <div className="App container">
        <YourDetails changeInfo={this.changeInfo.bind(this)} YourName={this.state.YourName}/>
        <ProjectDetails />
          <ParentComponent addChild={this.onAddChild.bind(this)}>
                {children}
          </ParentComponent>
        <Footer />
      </div>
    );
  }
}

export default MainBody;

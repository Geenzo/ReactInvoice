import React, { Component } from 'react';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import '../css/Lineitems.css';

class Lineitems extends Component {
  constructor(props){
    super(props);
    this.state = {
      Task: "Name of Task",
      BriefDescription: "Brief Description of Task",
      Deliverable: "Deliverable Name",
      Hours: "0",
      Discount: "0",
    }
  }

  changeState = (newState) => {
  this.setState(newState);
  };

  virtualServerCallback = (newState) => {
  if (this.state.simulateXHR) {
  window.setTimeout(function() {
    this.changeState(newState);
  }.bind(this), this.state.XHRDelay);
  } else {
  this.changeState(newState);
  }
  };

  render() {
    return (
      <div className="Lineitems">
        <div className="row">
          <div className="col-sm-3">
            <label>Description</label>
          </div>
          <div className="col-sm-4">
            <label>Deliverables</label>
          </div>
          <div className="col-sm-2">
            <label>Hours</label>
          </div>
          <div className="col-sm-2">
            <label>Price</label>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
          <p>
            <RIEInput value={this.state.Task}
                      change={this.virtualServerCallback}
                      propName="Task"/>
          </p>
          <p>
            <RIETextArea
            value={this.state.BriefDescription}
            change={this.virtualServerCallback}
            propName="BriefDescription"/>
          </p>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <RIEInput value={this.state.Deliverable}
                        change={this.virtualServerCallback}
                        propName="Deliverable"/>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="row">
                <RIENumber value={this.state.Hours}
                          change={this.virtualServerCallback}
                          propName="Hours"/>
                <span> Hours</span>
            </div>
            <div className="row">
              <RIENumber value={this.state.Discount}
                        change={this.virtualServerCallback}
                        propName="Discount"/>
              <span> % Discount</span>
            </div>
          </div>
          <div className="col-sm-2">
            <span>$placeholder$ for price state</span>
          </div>
          <div className="col-sm-1">
              <button type="text" className="btn btn-danger col-sm-2">-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Lineitems;

import React, { Component } from 'react';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import '../css/ParentComponent.css';

class ParentComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      Task: "Name of Task",
      BriefDescription: "Brief Description of Task",
      Deliverable: "Deliverable Names",
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
          <a href="#" onClick={this.props.addChild}><button onClick={this.props.onAddChild} type="text" className="btn btn-primary addbutton">Add</button></a>
            <div id="children-pane">
                {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}

export default ParentComponent;

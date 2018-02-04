import React, { Component } from 'react';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import '../css/ParentComponent.css';
import { Button, Col } from 'react-bootstrap';

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
          <Col xs={12} md={8}>
          <a href="#" onClick={this.props.addChild}><Button onClick={this.props.onAddChild} bsStyle="primary">Add</Button></a>
          <br />
          </Col>
          <div className="row">
            <div id="children-pane">
                {this.props.children}
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ParentComponent;

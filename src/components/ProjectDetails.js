import React, { Component } from 'react';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import '../css/ProjectDetails.css';

class ProjectDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      ProjectName: "Name of Project",
      ProjectContact: "Project Contact",
      ProjectDescription: "Description",
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
      <div className="ProjectDetails">
        <div className="row">
          <div className="col-sm-3">
            <label>Project Name:</label><br />
            <RIEInput value={this.state.ProjectName}
                      change={this.virtualServerCallback}
                      propName="ProjectName">
            </RIEInput>
          </div>
          <div className="col-sm-3">
            <label>Issued To:</label><br />
            <RIEInput value={this.state.ProjectContact}
                      change={this.virtualServerCallback}
                      propName="ProjectContact">
            </RIEInput>
          </div>
          <div className="col-sm-6">
            <label>Details:</label><br/>
            <RIETextArea
            value={this.state.ProjectDescription}
            change={this.virtualServerCallback}
            propName="ProjectDescription"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;

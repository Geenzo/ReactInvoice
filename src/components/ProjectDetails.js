import React, { Component } from 'react';
import '../css/ProjectDetails.css';

class ProjectDetails extends Component {
  render() {
    return (
      <div className="ProjectDetails">
        <div className="row">
          <div className="col-sm-3">
            <label>Project Name:</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="col-sm-3">
            <label>Issued To:</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="col-sm-6">
            <label>Details:</label>
            <textarea className="form-control"></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;

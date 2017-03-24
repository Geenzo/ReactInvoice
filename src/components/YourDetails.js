import React, { Component } from 'react';
import '../css/YourDetails.css';

class YourDetails extends Component {
  render() {
    return (
      <div className="YourDetails">
          <div className="row">
            <div className="col-sm-5 YourLogo">
              <span type="file" className="btn btn-primary col-sm-8">FILE</span>
            </div>

            <div className="col-sm-7 YourContactDetails">
              <div className="col-sm-6">
                <div className="row">
                  <label >Phone Number: </label>
                </div>
                <div className="row">
                  <label >Email: </label>
                </div>
                <div className="row">
                  <label >Website: </label>
                </div>
              </div>
              <div className="col-sm-6">
                <input type="text" className="form-control"></input>
                <input type="text" className="form-control"></input>
                <input type="text" className="form-control"></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <input type="text" className="form-control"></input>
              <span>Date created : DD-MM-YYYY</span>
            </div>
          </div>
      </div>
    );
  }
}

export default YourDetails;

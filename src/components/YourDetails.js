import React, { Component } from 'react';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import '../css/YourDetails.css';


class YourDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      YourName: "Your Name",
      Phone: "Phone Number",
      Email: "Email",
      Website: "Website",
      CreateDate: "DD-MM-YYYY",
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
      <div className="YourDetails">
          <div className="row">
            <div className="col-sm-5 YourLogo">
              <span type="file" className="btn btn-primary col-sm-8">FILE</span>
            </div>

            <div className="col-sm-7 YourContactDetails">
            <h1>
            <RIEInput value={this.state.YourName}
                      change={this.virtualServerCallback}
                      propName="YourName">
            </RIEInput>
            </h1>
              <div className="col-sm-6">
                <div className="row">
                  <p >Phone Number: </p>
                </div>
                <div className="row">
                  <p >Email: </p>
                </div>
                <div className="row">
                  <p >Website: </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                <p>
                  <RIEInput value={this.state.Phone}
                            change={this.virtualServerCallback}
                            propName="Phone">
                  </RIEInput>
                </p>
                </div>
                <div className="row">
                <p>
                  <RIEInput value={this.state.Email}
                            change={this.virtualServerCallback}
                            propName="Email">
                  </RIEInput>
                </p>
                </div>
                <div className="row">
                <p>
                  <RIEInput value={this.state.Website}
                            change={this.virtualServerCallback}
                            propName="Website">
                  </RIEInput>
                </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <p>Date created : </p>
              <p>
                <RIEInput value={this.state.CreateDate}
                          change={this.virtualServerCallback}
                          propName="CreateDate">
                </RIEInput>
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default YourDetails;

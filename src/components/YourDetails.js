import React, { Component } from 'react';
import '../css/YourDetails.css';


class YourDetails extends Component {
  handleChange(e){
    const YourName = e.target.value;
    this.props.changeInfo(YourName);
  }

  ComponentDidMount(){
    console.log('This Has Changed');
  }

  render() {
    return (
      <div className="YourDetails">
          <div className="row">
            <div className="col-sm-5 YourLogo">
              <span type="file" className="btn btn-primary col-sm-8">FILE</span>
            </div>

            <div className="col-sm-7 YourContactDetails">
              <div className="col-sm-6">
                <h1>{this.props.YourName}</h1>
                <div className="row">
                  <p >Phone Number: </p><span>{this.props.Phone}</span>
                </div>
                <div className="row">
                  <p >Email: </p><span>{this.props.Email}</span>
                </div>
                <div className="row">
                  <p >Website: </p><span>{this.props.Website}</span>
                </div>
              </div>
              <div className="col-sm-6">
                <input type="text" className="form-control" placeholder='' onChange={this.handleChange.bind(this)} value={this.props.YourName}></input>
                <input type="text" className="form-control" placeholder=''></input>
                <input type="text" className="form-control" placeholder=''></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <input type="text" className="form-control" placeholder=''></input>
              <span>Date created : DD-MM-YYYY</span>
            </div>
          </div>
      </div>
    );
  }
}

export default YourDetails;

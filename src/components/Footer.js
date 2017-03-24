import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="row">
          <div className="col-sm-8">
          </div>
          <div className="col-sm-4">
            <div className="row">
              <span>Sub Total: $00.00</span>
            </div>
            <div className="row">
              <span>Total: $00.00</span>
            </div>
            <hr></hr>
          </div>
        </div>

        <div className="row">
          <div className="col-span-8">
            <div className="col-span-5">
              <textarea className="form-control"></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

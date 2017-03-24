import React, { Component } from 'react';
import '../css/HeaderBar.css';

class HeaderBar extends Component {
  render() {
    return (
      <div className="HeaderBar">
        <div callName="Container">
          <div className="row">
            <h2 className="HeaderTitle col-sm-3">ReactInvoice</h2>
            <h4 className="col-sm-3">Your Hourly Rate</h4>
            <h4 className="col-sm-3">Discounts</h4>
          </div>
          <div className="row">
            <h4 className="col-sm-3">Instant Invoice Templating</h4>
            <div className="col-sm-2">
              <input className="form-control" type="number"></input>
            </div>
            <div className="col-sm-3">
              <select className="form-control">
              <option>£/$ - Flat Discount</option>
              <option>% - Percentage Discount</option>
            </select>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;

import React, { Component } from 'react';
import '../css/HeaderBar.css';

class HeaderBar extends Component {
  render() {
    return (
      <div className="HeaderBar">
        <div callName="Container">
            <h2 className="col-sm-12">ReactInvoice</h2>
            <h4 className="HeaderTitle col-sm-12">Instant Invoice Templating</h4>
            <h4 className="col-sm-12">Your Hourly Rate</h4>
            <div className="col-sm-12">
              <input className="form-control" type="number"></input>
            </div>
            <h4 className="col-sm-12">Discounts</h4>
            <div className="col-sm-12">
              <select className="form-control">
              <option>£/$ - Flat Discount</option>
              <option>% - Percentage Discount</option>
            </select>
          </div>

          </div>
        </div>
    );
  }
}

export default HeaderBar;

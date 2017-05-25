import React, { Component } from 'react';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import '../css/HeaderBar.css';

class HeaderBar extends Component {
  constructor(){
    super()
    this.state = {
      user_hourly_rate: 0
    };
  }
  updateRate(){
    	this.props.updateRate('dd');
    }

  render() {
    return (
      <div className="HeaderBar">
        <div callName="Container">
            <h2 className="col-sm-12">ReactInvoice</h2>
            <h4 className="HeaderTitle col-sm-12">Instant Invoice Templating</h4>
            <h4 className="col-sm-12">Your Hourly Rate</h4>
            <div className="col-sm-12">
              <input className="form-control" type="number" value={this.props.hourly_rate} onChange={this.updateRate}></input>
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

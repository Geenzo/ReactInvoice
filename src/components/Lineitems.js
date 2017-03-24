import React, { Component } from 'react';
import '../css/Lineitems.css';

class Lineitems extends Component {
  render() {
    return (
      <div className="Lineitems">
        <div className="row">
          <div className="col-sm-3">
            <label>Description</label>
          </div>
          <div className="col-sm-4">
            <label>Deliverables</label>
          </div>
          <div className="col-sm-2">
            <label>Hours</label>
          </div>
          <div className="col-sm-2">
            <label>Price</label>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <input type="text" className="form-control" placeholder="Task"></input>
            <textarea type="text" className="form-control" placeholder="Brief Description"></textarea>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <input type="text" className="form-control col-sm-2" placeholder="Description"></input>
              <button type="text" className="btn btn-danger col-sm-2">-</button>
            </div>
            <button type="text" className="btn btn-primary">Add</button>
          </div>
          <div className="col-sm-2">
            <div className="row">
              <div className="col-sm-6">
                <input type="number" className="form-control col-sm-6"></input>
              </div>
              <div className="col-sm-6">
              <input type="number" className="form-control col-sm-6"></input>
              </div>
            </div>
            <div className="row">
              <label>Hours</label>
              <label>Discount</label>
            </div>
          </div>
          <div className="col-sm-2">
            <span>$placeholder$</span>
            <textarea type="text" className="form-control" placeholder="Brief Description"></textarea>
          </div>
          <div className="col-sm-1">
            <button type="text" className="btn btn-primary col-sm-2">&uarr;</button>
            <button type="text" className="btn btn-primary col-sm-2">&darr;</button>
            <button type="text" className="btn btn-danger col-sm-2">-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Lineitems;

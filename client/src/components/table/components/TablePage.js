'use strict';

import React, { Component } from 'react';
import TableList from './TableList';

class TablePage extends Component {

  static propTypes = {
    portfolios: React.PropTypes.array,
    handleClick: React.PropTypes.func,
    handleSum: React.PropTypes.func,
    clearSum: React.PropTypes.func,
    sum: React.PropTypes.number,
    count: React.PropTypes.number,
    records: React.PropTypes.any,
    onChange: React.PropTypes.func.isRequired
  }

  render() {
    const countString = new Intl.NumberFormat().format(this.props.count);
    return (
      <div className="container">
        <div className="row">
          <h1>Table</h1>
          <p>This page should display a table with some data. In Memory = {countString}</p>
          <button type="submit" className="btn btn-primary" onClick={this.props.handleClick}>Reload</button>
          <input type="text" placeholder="# Records to show" style={{marginLeft:2}} onChange={this.props.onChange} value={this.props.records} />
          <button type="submit" className="btn" style={{marginLeft:10}} onClick={this.props.handleSum}>Sum</button>
          <button type="submit" className="btn" style={{marginLeft:2}} onClick={this.props.clearSum}>Clear</button>
          <input type="text" placeholder="Sum of Quantity" style={{marginLeft:2}} value={this.props.sum} />
        </div>
        <div>
          <TableList portfolios={this.props.portfolios} />
        </div>
      </div>
    );
  }
}

export default TablePage;

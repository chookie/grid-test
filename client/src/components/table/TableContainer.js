import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

import { loadData, setNumberOfRecords } from './tableActions';
import TablePage from './components/TablePage.js';
// import calculator from './calculator';
// if(process.env.WEBPACK) require('./LoginContainer.scss');
import {calculateSumOfProperty} from './calculator';

class TableContainer extends Component {
  static propTypes = {
    loadData: React.PropTypes.func.isRequired,
    clearAlert: React.PropTypes.func,
    showErrorMessage: React.PropTypes.bool,
    data: React.PropTypes.array,
    allData: React.PropTypes.array,
    records: React.PropTypes.string,
    setNumberOfRecords: React.PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      sum: '',
      records: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSum = this.handleSum.bind(this);
    this.clearSum = this.clearSum.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.updateRecordsState = this.updateRecordsState.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.records != nextProps.records) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({records: nextProps.records});
    }
  }

  handleAlertDismiss() {
    this.props.clearAlert();
  }

  showAlert(message) {
    return (
      <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
        <h4>{message}</h4>
      </Alert>
    );
  }

  handleClick(event) {
    event.preventDefault();
    this.props.loadData();
  }

  handleSum(event) {
    console.log('handleSum');
    event.preventDefault();
    const sum = calculateSumOfProperty(this.props.allData, (obj) => obj.quantity100);
    this.setState({ sum });
  }

  clearSum(event) {
    console.log('clearSum');
    event.preventDefault();
    this.setState({ sum: '' });
  }

  updateRecordsState(event) {
    const records = event.target.value;
    this.props.setNumberOfRecords(records);
    this.setState({records: records});
  }

  render() {
    let errorAlert;
    if (this.props.showErrorMessage) {
      errorAlert = this.showAlert('Oh snap! You have a load error!');
    }
    const count = this.props.allData ? this.props.allData.length : 0;

    return (
      <div>
        {errorAlert}
        <TablePage
          portfolios={this.props.data}
          count={count}
          sum={this.state.sum}
          records={this.state.records}
          handleClick={this.handleClick}
          handleSum={this.handleSum}
          clearSum={this.clearSum}
          onChange={this.updateRecordsState}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const records = state.table.records;
  let allData = state.table.data ? state.table.data:[];
  let filteredData = allData;
  if (!isNaN(records) && records !== '') {
    filteredData = allData.slice(0,records);
  }
  return {
    records: records,
    data: filteredData,
    allData: allData,
    showErrorMessage: state.table.showErrorMessage
  };
}


export default connect(mapStateToProps, { loadData, setNumberOfRecords })(TableContainer);

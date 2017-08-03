import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();

var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

const side = ['SELL', 'BUY'];
const ordType = ['LIMIT']
const timeInForce = ['DAY']


const selectRow = {
    mode: 'checkbox',
    bgColor: 'rgb(135, 206, 250)'
};

const cellEditProp = {
    mode: 'click',
    blurToSave: true
};

var orders = [{
    symbol: "MSFT",
    price: 74.12,
    side: "BUY",
    ordType: "LIMIT",
    timeInForce: "DAY",
    ordQty: 1200,
    sharesFilled: 1000,
    avgFillPrice: 10.10,
    orderStatus: "Fill",
    clOrdID: 1,
    origClOrdID: 2,
    check: "Done",
    statusInternal: 1,
    routingInternal: 1

}, {
    symbol: "IBM",
    price: 153.12,
    side: "SELL",
    ordType: "LIMIT",
    timeInForce: "DAY",
    ordQty: 1100,
    sharesFilled: 1000,
    avgFillPrice: 10.10,
    orderStatus: "Fill",
    clOrdID: 2,
    origClOrdID:2,
    check: "Done",
    statusInternal: 1,
    routingInternal: 1
}];

ReactDOM.render
  ( <BootstrapTable data = { orders }
    selectRow = { selectRow }
    cellEdit = { cellEditProp }
    insertRow = { true }
    condensed = { true }
    striped = { true }
    hover height = '520px'
    bordered = { true }
    headerStyle = {{ background: '#C6DEEE' }}>

    <TableHeaderColumn isKey dataField = 'clOrdID' dataAlign = 'center' dataSort = { true } > ClOrdID </TableHeaderColumn>
    <TableHeaderColumn dataField = 'symbol'    dataAlign = 'center' dataSort = { true } > Symbol </TableHeaderColumn>
    <TableHeaderColumn dataField = 'price'    dataAlign = 'center' > Price </TableHeaderColumn>
    <TableHeaderColumn dataField = 'side'    dataAlign = 'center'    dataSort = { true } editable = {{ type: 'select', options: { values: side } }} > Side </TableHeaderColumn>
    <TableHeaderColumn dataField = 'ordType' dataAlign = 'center' editable = {{ type: 'select', options: { values: ordType } }} > OrdType </TableHeaderColumn>
    <TableHeaderColumn dataField = 'timeInForce' dataAlign = 'center' editable = {{ type: 'select', options: { values: timeInForce } }} > TimeInForce </TableHeaderColumn>
    <TableHeaderColumn dataField = 'ordQty'    dataAlign = 'center' > OrdQty </TableHeaderColumn>
    <TableHeaderColumn dataField = 'sharesFilled'  dataAlign = 'center'  editable={ false} > SharesFilled </TableHeaderColumn>
    <TableHeaderColumn dataField = 'avgFillPrice'    dataAlign = 'center' editable={ false} > avgFillPrice </TableHeaderColumn>
    <TableHeaderColumn dataField = 'orderStatus'    dataAlign = 'center' dataSort = { true } editable={ false} > OrderStatus </TableHeaderColumn>
    <TableHeaderColumn dataField = 'origClOrdID' dataAlign = 'center' dataSort = { true } editable={ false} > OrigClOrdID </TableHeaderColumn>
    <TableHeaderColumn dataField = 'check' dataAlign = 'center' dataSort = { true } editable ={ false} > Check </TableHeaderColumn>
    <TableHeaderColumn dataField = 'statusInternal' dataAlign = 'center' dataSort = { true } editable={ false} > Status </TableHeaderColumn>
    <TableHeaderColumn dataField = 'routingInternal' dataAlign = 'center' dataSort = { true } editable={ false} > Routing </TableHeaderColumn>
    </BootstrapTable>,
    document.getElementById('basic')
);

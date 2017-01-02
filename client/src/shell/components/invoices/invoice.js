import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Select from 'react-select';
import { Link } from 'react-router';


const currencies = [
    { value: 1, label: 'GHS' },
    { value: 1, label: 'USD' }
]

function logChange(val) {
    console.log("Selected: " + val);
}


export default class Invoice extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addLine = this.addLine.bind(this)
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            invoiceDate: moment(),
            dueDate: moment(),
            lines: []
        };
    }

    handleChange(date) {
        this.setState({ invoiceDate: date });
    }

    addLine() {
        let newItem = {
            item_id: 0,
            description: "",
            quantity: 1,
            discount: 0,
            tax: 0,
            unit_cost: ""
        };
        this.state.lines.push(newItem);
        let newState = this.state;
        this.setState(newState);
    }

    onInputChange() {

    }

    computePrice(quantity, unit_cost) {
        if (quantity === 0)
            return 0;
        if (!unit_cost || unit_cost === 0)
            return 0;
    }

    removeRow(idx) {
        this.state.lines.splice(idx, 1);
        this.setState(this.state);
    }

    renderLineItems() {
        let renderLine = (line, idx) => {
            return (
                <tr key={idx}>
                    <td> {idx + 1}. </td>
                    <td className="item-name-col">

                    </td>
                    <td className="item-description-col">
                        <input
                            className="form-control input-sm tright"
                            onChange={this.onInputChange}
                            type="text"
                            value={line.description} />
                    </td>
                    <td>
                        <input
                            className="form-control input-sm tright"
                            onChange={this.onInputChange}
                            type="text"
                            value={line.quantity} />
                    </td>
                    <td>
                        <input
                            className="form-control input-sm tright"
                            onChange={this.onInputChange}
                            type="text"
                            value={line.unit_cost} />
                    </td>
                    <td>
                        <input
                            className="form-control input-sm tright"
                            onChange={this.onInputChange}
                            type="text"
                            value={line.discount} />
                    </td>
                    <td>
                        <input
                            className="form-control input-sm tright"
                            onChange={this.onInputChange}
                            type="text"
                            value={line.tax} />
                    </td>
                    <td>
                        <input
                            className="form-control input-sm tright"
                            onChange={this.onInputChange}
                            type="text"
                            value={this.computePrice(line.quantity, line.unit_cost)} />
                    </td>
                    <td>
                        <a onClick={() => this.removeRow(idx)}> <i className="fa fa-trash"></i> </a>
                    </td>
                </tr>
            );
        }

        return (
            <table className="table-custom table">
                <thead>
                    <tr>
                        <th className="col-1"></th>
                        <th className="item-name-col"> Item </th>
                        <th className="item-description-col"> Description </th>
                        <th> Quantity </th>
                        <th> Unit cost </th>
                        <th> Discount </th>
                        <th> Tax </th>
                        <th> Price </th>
                        <th className="col-1"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.lines.map(renderLine)}
                </tbody>
            </table>
        )
    }

    renderInvoiceHeader() {
        var options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];

        return (
            <div className="row">
                <div className="col-md-3">
                    <div>
                        <label> Invoice Date </label>
                        <div>
                            <DatePicker className="form-control"
                                selected={this.state.invoiceDate}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <label> Due Date </label>
                        <div>
                            <DatePicker className="form-control"
                                selected={this.state.dueDate}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <label> Client </label>
                    <div className>
                        <Select
                            name="client_id"
                            value="one"
                            options={options}
                            onChange={logChange}
                            />
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <label> Invoice Number </label>
                        <div>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderInvoicerFooter() {
        return (
            <div>
                <div className="summing-box clearfix">
                    <div className="row">
                        <div className="col-sm-3 pull-right">
                            <label for="">Currency </label>
                            <div>
                                <Select
                                    name="client_id"
                                    value="one"
                                    options={currencies}
                                    onChange={logChange}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 pull-right">
                            <label for="">Tax amount: </label>
                            <label className="pull-right"> $ 45.00 </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 pull-right">
                            <label for="">Sub Total: </label>
                            <label className="pull-right"> $ 1700.00 </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 pull-right total-box">
                            <label for="">Total: </label>
                            <label className="pull-right"> $ 1745.00 </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {

        let actionLinks = <span className="pull-right">
            <Link to="/invoices" className="btn btn-default"> Cancel </Link>
            <a href="" className="btn btn-success"> Create invoice </a>
        </span>
        return (
            <div className="invoice">
                <div className="content-header">
                    <span className="title"> New Invoice </span>
                    {actionLinks}
                </div>
                <div>
                    {this.renderInvoiceHeader()}

                    <div className="clearfix">
                        <div className="pull-right add-btn">
                            <a className="btn btn-default" onClick={this.addLine}>  <i className="fa fa-plus"></i> Add Item </a>
                        </div>
                    </div>
                    <div className="">
                        {this.renderLineItems()}
                    </div>
                    <div>
                        {this.renderInvoicerFooter()}
                    </div>
                    <div className="clearfix actions">
                        {actionLinks}
                    </div>
                </div>
            </div>
        )
    }
}
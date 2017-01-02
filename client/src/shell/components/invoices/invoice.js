import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Select from 'react-select';


export default class Invoice extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            invoiceDate: moment(),
            dueDate: moment()
        }
    }

    handleChange(date) {
        this.setState({ invoiceDate: date })
    }

    render() {
        var options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];

        function logChange(val) {
            console.log("Selected: " + val);
        }

        return (
            <div>
                <div className="content-header">
                    <span className="title"> New Invoice </span>
                </div>
                <div>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { Link } from 'react-router';
import {
    renderInput,
    renderCheckbox,
    renderRadio,
    renderDate,
    renderSelect
} from '../utils/forms';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products';
import { getClients } from '../../actions/clients';
import { addInvoice, cacheInvoice, getInvoice, showNewInvoice } from '../../actions/invoices';
import { getCurrencies } from '../../actions';
import { hashHistory } from 'react-router';
import _ from 'lodash';


const validate = (values) => {
    const errors = {};

    return errors;
}

const renderLineItems = (props) => {
    console.log(props);
    let {fields, products} = props;
    const addLine = () => {
        console.log('adding a line')
        let newItem = {
            item_id: 0,
            description: "",
            quantity: 1,
            discount_flat: 0,
            discount_percentage: 0,
            tax: 0,
            price: ""
        };
        fields.push(newItem);
    }

    const renderLine = (line, idx) => {
        return (
            <tr key={idx}>
                <td> {idx + 1}. </td>
                <td className="item-name-col">
                    <Field name={`${line}.product`} component={renderSelect} className="input-sm tright" options={products} />
                </td>
                <td className="item-description-col">
                    <Field name={`${line}.description`} component={renderInput} className="input-sm tright" />
                </td>
                <td>
                    <Field name={`${line}.quantity`} component={renderInput} className="input-sm tright" />
                </td>
                <td>
                    <Field name={`${line}.price`} component={renderInput} className="input-sm tright" />
                </td>

                <td>
                    <Field name={`${line}.tax`} component={renderInput} className="input-sm tright" />
                </td>
                <td>
                    <Field name={`${line}.line_total`} component={renderInput} className="input-sm tright" />
                </td>
                <td>
                    <a onClick={() => fields.remove(idx)}> <i className="fa fa-trash"></i> </a>
                </td>
            </tr>
        );
    }

    return (
        <div>
            <div className="clearfix">
                <div className="pull-right add-btn">
                    <a className="btn btn-default" onClick={addLine}>  <i className="fa fa-plus"></i> Add Item </a>
                </div>
            </div>
            <div className="">
                <table className="table-custom table">
                    <thead>
                        <tr>
                            <th className="col-1"></th>
                            <th className="item-name-col"> Item </th>
                            <th className="item-description-col"> Description </th>
                            <th> Quantity </th>
                            <th> Price </th>
                            <th> Tax </th>
                            <th> Line Total </th>
                            <th className="col-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map(renderLine)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

class Form extends Component {

    constructor(props) {
        super(props);
    }

    handleChange(date) {

    }

    onInputChange() {

    }

    computePrice(quantity, unit_cost) {
        if (quantity === 0)
            return 0;
        if (!unit_cost || unit_cost === 0)
            return 0;
    }

    renderInvoiceHeader() {

        return (
            <div className="row">
                <div className="col-md-3">
                    <Field name="invoice_date" component={renderDate} placeholder="Invoice Date" />
                </div>
                <div className="col-md-3">
                    <Field name="due_date" component={renderDate} placeholder="Due Date" />
                </div>
                <div className="col-md-3">
                    <Field name="client" component={renderSelect} placeholder="Client" options={this.props.clients} />
                </div>
                <div className="col-md-3">
                    <Field name="invoice_number" component={renderInput} placeholder="Invoice Number" />
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
                            <Field name="currency"
                                component={renderSelect}
                                placeholder="Currency"
                                options={this.props.currencies}
                                labelKey="currency_code" />
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

        let {handleSubmit, saveInvoice, pristine, submitting, products, clients} = this.props;
        let actionLinks = <span className="pull-right">
            <Link to="/invoices" className="btn btn-default"> Cancel </Link>
            <button type="submit" className="btn btn-success" disabled={pristine || submitting}> Create invoice </button>
        </span>;

        return (
            <div className="invoice">
                <div className="content-header">
                    <span className="title"> New Invoice </span>
                    {actionLinks}
                </div>
                <form onSubmit={handleSubmit(saveInvoice)}>
                    <div>
                        {this.renderInvoiceHeader()}
                        <FieldArray name="invoice_lines" component={renderLineItems} products={products} />
                        <div>
                            {this.renderInvoicerFooter()}
                        </div>
                        <div className="clearfix actions">
                            {actionLinks}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

let InvoiceForm = reduxForm({
    form: 'invoice',
    enableReinitialize: true,
    validate
})(Form);


class InvoiceContainer extends Component {
    componentWillMount() {
        let id = this.props.params.id;
        if (id) {
            this.props.getInvoice(id);
        }
        this.props.loadResources();
    }

    componentWillReceiveProps() {
        if (!this.props.params.id && !_.isEqual(this.props.current, {})) {
            this.props.showNewInvoice();
        }
    }

    render() {
        return (
            <div>
                <InvoiceForm {...this.props} />
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        ...state.invoices,
        clients: state.clients.all,
        products: state.products.all,
        currencies: state.currencies.all,
        initialValues: state.invoices.current
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadResources() {
            dispatch(getClients());
            dispatch(getProducts());
            dispatch(getCurrencies());
        },
        onEditClick(id) {
            //dispatch(editContact(id))
        },
        onDeleteClick(id) {
            //dispatch(deleteContact(id))
        },
        getInvoice(id) {
            dispatch(getInvoice(id));
        },
        showNewInvoice() {
            dispatch(showNewInvoice())
        },
        saveInvoice(invoice) {
            console.log(invoice)
            console.log('adding a invoice')
            dispatch(cacheInvoice(invoice));
            dispatch(addInvoice(transformInvoiceToPersist(invoice)));
            console.log('after dispatch');
        }
    }
}

const transformInvoiceToPersist = (invoice) => {
    invoice.client_id = invoice.client.id;
    invoice.currency_id = invoice.currency.id;
    invoice.invoice_lines = invoice.invoice_lines.map((line) => {
        line.product_id = line.product.id;
        return line;
    });
    return invoice;
}

const Invoice = connect(mapStateToProps, mapDispatchToProps)(InvoiceContainer)
export default Invoice;


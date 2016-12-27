import React from 'react';
import { connect } from 'react-redux';
import Table from '../utils/table';
import {Link} from 'react-router';

const InvoiceList = (props) => {
    let {clients, current, children, onEditClick, onDeleteClick} = props;
    let tableFields = [
            { name: 'invoice_date', header: "Invoice Date" },
            { name: 'due_date', header: "Due Date" },
            { name: "client", header: "Client" },
            { name: "total_amount", header: "Total Amount" },
            { name: "total_tax", header: "Total Tax" },
            // { name: 'view', type: 'action', header: '', action: 'viewTransaction' }
        ];
    return(
        <div>
            <div className="content-header">
                <span className="title"> Invoices </span>
                <span className="pull-right">
                    <Link to="/invoices/new" className="btn btn-primary"> New invoice </Link>
                </span>
            </div>
            <Table tableData={[]} tableFields={tableFields} />
        </div>
    )
}

const mapStateToProps = (state, ownState) => {
    console.log(state)
    return {
        ...state.invoices,
        //transactionForm: state.form['transactions-search']
    }
}


const mapDispatchToProps = (dispatch, state) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceList);

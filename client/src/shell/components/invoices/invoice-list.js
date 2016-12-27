import React from 'react';
import { connect } from 'react-redux';
import Table from '../utils/table'

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
            <h2> Invoices </h2>
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

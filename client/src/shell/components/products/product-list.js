import React from 'react';
import { connect } from 'react-redux';
import Table from '../utils/table'

import {Link} from 'react-router';
const ProductList = (props) => {
    let {clients, current, children, onEditClick, onDeleteClick} = props;
    let tableFields = [
            { name: 'name', header: "Name" },
            { name: 'description', header: "Description" },
            { name: "product_type", header: "Product Type" },
            { name: "reorder_level", header: "Re-Order Level" },
            // { name: 'view', type: 'action', header: '', action: 'viewTransaction' }
        ];
    return(
        <div>
            <div className="content-header">
                <span className="title"> Products </span>
                <span className="pull-right">
                    <Link to="/products/new" className="btn btn-primary"> New Product </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

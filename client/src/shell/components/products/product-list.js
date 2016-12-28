import React from 'react';
import { connect } from 'react-redux';
import Table from '../utils/table'

import {Link} from 'react-router';
const ProductList = (props) => {
    let {all, current, children, onEditClick, onDeleteClick} = props;
    let tableFields = [
            { name: 'name', header: "Name" },
            { name: 'description', header: "Description" },
            { name: "product_type", header: "Product Type" },
            { name: "reorder_level", header: "Re-Order Level" },
            // { name: 'view', type: 'action', header: '', action: 'viewTransaction' }
        ];
    
    let content  = <div className="zero-items"> No products present, kindly add one. </div>
    if(all.length > 0){
        content =  <Table tableData={all} tableFields={tableFields} />   
    }

    return(
        <div>
            <div className="content-header">
                <span className="title"> Products </span>
                <span className="pull-right">
                    <Link to="/products/new" className="btn btn-primary"> New Product </Link>
                </span>
            </div>
           { content }
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

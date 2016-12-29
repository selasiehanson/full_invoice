import React from 'react';
import { connect } from 'react-redux';
import Table from '../utils/table'
import  {Link} from 'react-router';

const ClientList = (props) => {
    let {clients, current, children, onEditClick, onDeleteClick} = props;
    let tableFields = [
            { name: 'name', header: "Name" },
            { name: "email", header: "Email" },
            { name: "phone_number", header: "Phone Number" },
            { name: "address", header: "Address" },
            // { name: 'view', type: 'action', header: '', action: 'viewTransaction' }
        ];
    let content = <span> No clients present, kindly add one. </span>
    if(clients.length !== 0){
       content = <Table 
                tableData={clients} 
                tableFields={tableFields} /> 
    }
    return(
        <div>
            <div className="content-header">
                <span className="title"> Clients </span>
                <span className="pull-right">
                    <Link to="/clients/new" className="btn btn-primary"> New Client </Link>
                </span>
            </div>
            { content }
        </div>
    )
}

const mapStateToProps = (state, ownState) => {
    let {all } = state.clients
    return {
        clients:all,
        //transactionForm: state.form['transactions-search']
    }
}


const mapDispatchToProps = (dispatch, state) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);

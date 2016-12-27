import React from 'react';
import { connect } from 'react-redux';
import Table from '../utils/table'
import  {Link} from 'react-router';

const Clients = (props) => {
    let {clients, current, children, onEditClick, onDeleteClick} = props;
    let tableFields = [
            { name: 'name', header: "Name" },
            { name: "email", header: "Email" },
            { name: "phone_number", header: "Phone Number" },
            { name: "address", header: "Address" },
            // { name: 'view', type: 'action', header: '', action: 'viewTransaction' }
        ];
    return(
        <div>
            <div className="content-header">
                <span className="title"> Clients </span>
                <span className="pull-right">
                    <Link to="/clients/new" className="btn btn-primary"> New Client </Link>
                </span>
            </div>
            <Table 
                tableData={clients} 
                tableFields={tableFields} />
        </div>
    )
}

const mapStateToProps = (state, ownState) => {
    console.log(state.clients)
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

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

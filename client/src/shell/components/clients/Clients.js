import React from 'react';
import { connect } from 'react-redux';
import Table from '../utils/table'

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
            <h2> Clients </h2>
            <Table tableData={[]} tableFields={tableFields} />
        </div>
    )
}

const mapStateToProps = (state, ownState) => {
    console.log(state)
    return {
        ...state.clients,
        //transactionForm: state.form['transactions-search']
    }
}


const mapDispatchToProps = (dispatch, state) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

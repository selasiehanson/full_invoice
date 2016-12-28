import React from 'react';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import {renderInput} from '../utils/forms';
import { connect } from 'react-redux';

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Please provide a name.'
    }

    if (!values.email) {
        errors.email = 'Please provide an email.'
    }

    if (!values.phone_number) {
        errors.phone_number = 'Please provide a phone number.'
    }

    if (!values.address) {
        errors.address = 'Please provide an address.'
    }


    return errors;
}


const Form = ({params, editMode, onAddClient, handleSubmit, invalid, submitting}) => {
    return (
        <div className="clearfix">
            <div className="content-header">
                <span className="title"> {editMode} Client </span>
            </div>
            <div className="col-md-3"> </div>
            <div className="col-md-6"> 
                <form onSubmit={handleSubmit(onAddClient)}>
                    <Field name="name" component={renderInput} placeholder="Full Name" />
                    <Field name="email" component={renderInput} placeholder="Email" />
                    <Field name="phone_number" component={renderInput} placeholder="Phone Number" />
                    <Field name="address" component={renderInput} placeholder="Address" />
                    <div className="pull-right form-buttons" >
                        <Link to="/clients" className="btn btn-default" > Cancel </Link>
                        <button type="submit" className="btn btn-success"> Submit </button>
                    </div>
                </form>
            </div>            
            <div className="col-md-3"> </div>
        </div >
    );
}

let ClientForm = reduxForm({
    form: 'client',
    validate
})(Form);

const mapStateToProps = (state, ownProps) => {
    return {
        current: state.clients.current,
        editMode: state.clients.editMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditClick(id) {
            //dispatch(editContact(id))
        },
        onDeleteClick(id) {
            //dispatch(deleteContact(id))
        },

        onAddClient(client) {
            console.log(client)
            //dispatch(addClient());
            // dispatch({
            //     type: 'CLIENTS_ADD', 
            //     payload: axios.post("http://localhost/clients", client)
            // });
            console.log('after dispatch')
        }
    }
}

const Client = connect(mapStateToProps, mapDispatchToProps)(ClientForm)
export default Client;
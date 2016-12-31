import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { renderInput } from '../utils/forms';
import { connect } from 'react-redux';
import { addClient, cacheClient } from '../../actions/clients';
import { hashHistory } from 'react-router';


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


const Form = ({params, mode, onAddClient, handleSubmit, invalid, pristine, submitting}) => {
    return (
        <div className="clearfix">
            <div className="content-header">
                <span className="title"> {mode} Client </span>
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
                        <button type="submit" className="btn btn-success" disabled={pristine || submitting}> Submit </button>
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

class ClientContainer extends Component {
    shouldComponentUpdate() {
        console.log(this.props)
        if (this.props.afterSave) {
            this.goToClients();
            return false;
        }
        return true;
    }

    goToClients() {
        hashHistory.push('clients');
    }

    render() {
        //anti pattern
        if (this.props.afterSave) {
            this.goToClients();
            return null;
        }

        return (
            <div>
                <ClientForm  {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.clients
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
            console.log('adding a client')
            dispatch(cacheClient(client));
            dispatch(addClient(client));
            console.log('after dispatch')
        }
    }
}

const Client = connect(mapStateToProps, mapDispatchToProps)(ClientContainer)
export default Client;
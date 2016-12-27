import React from 'react';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import {renderInput} from './utils/forms'


//const doSubmit = values => console.log(values)

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Please provide a name.'
    }

    if (!values.phone) {
        errors.phone = 'Please provide a phone number.'
    }

    return errors;
}


const Client = ({params, editMode, onAddClient, handleSubmit, invalid, submitting}) => {
    return (
        <div>
            <div className="content-header">
                <span className="title"> {editMode} Client </span>
            </div>
            <form onSubmit={handleSubmit(onAddClient)}>
                <Field name="name" component={renderInput} placeholder="Full Name" />
                <Field name="phone" component={renderInput} placeholder="Phone" />
                <div className="pull-right form-buttons" >
                    <Link to="/clients" className="btn btn-default" > Cancel </Link>
                    <button type="submit" className="btn btn-success"> Submit </button>
                </div>
            </form>
            showing client with id of {params.id}
        </div >
    );
}

export default reduxForm({
    form: 'client',
    validate
})(Client);
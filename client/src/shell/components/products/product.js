import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { renderInput, renderCheckbox, renderRadio } from '../utils/forms';
import { connect } from 'react-redux';
import { addProduct, cacheProduct } from '../../actions/products';
import { hashHistory } from 'react-router';


const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Please provide a name.'
    }

    if (!values.description) {
        errors.description = 'Please provide an description.'
    }

    if (!values.reorder_level) {
        errors.reorder_level = 'Please provide a number for reorder level.'
    }

    if (!values.address) {
        errors.address = 'Please provide an address.'
    }

    return errors;
}


const Form = ({params, mode, onAddProduct, handleSubmit, invalid, pristine, submitting}) => {
    return (
        <div className="clearfix">
            <div className="content-header">
                <span className="title"> {mode} Product </span>
            </div>
            <div className="col-md-3"> </div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onAddProduct)}>
                    <Field name="name" component={renderInput} placeholder="Name" />
                    <Field name="description" component={renderInput} placeholder="Description" />
                    <Field name="reorder_level" component={renderInput} placeholder="Re-Order Level" />
                    
                    <div className="form-group">
                        <label>Product Type</label>
                        <div>
                            <label className="radio-inline"><Field name="product_type" component="input" type="radio" value="consumable"/> Consumable</label>
                            <label className="radio-inline"><Field name="product_type" component="input" type="radio" value="durable"/> Durable</label>
                            <label className="radio-inline"><Field name="product_type" component="input" type="radio" value="service"/> Service</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label> Extra Info </label> <br />
                        <Field name="can_be_sold" component={renderCheckbox} placeholder="Can be sold" />
                        <Field name="can_be_purchased" component={renderCheckbox} placeholder="Can be purchased" />
                    </div>
                    
                    <div className="pull-right form-buttons" >
                        <Link to="/products" className="btn btn-default" > Cancel </Link>
                        <button type="submit" className="btn btn-success" disabled={pristine || submitting}> Submit </button>
                    </div>
                </form>
            </div>
            <div className="col-md-3"> </div>
        </div >
    );
}

let ProductForm = reduxForm({
    form: 'product',
    validate
})(Form);

class ProductContainer extends Component {
    shouldComponentUpdate() {
        console.log(this.props)
        if (this.props.afterSave) {
            this.goToProducts();
            return false;
        }
        return true;
    }

    goToProducts() {
        hashHistory.push('products');
    }

    render() {
        //anti pattern
        if (this.props.afterSave) {
            this.goToProducts();
            return null;
        }

        return (
            <div>
                <ProductForm  {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.products
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
        onAddProduct(product) {
            console.log(product)
            console.log('adding a product')
            dispatch(cacheProduct(product));
            dispatch(addProduct(product));
            console.log('after dispatch')
        }
    }
}

const Product = connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
export default Product;
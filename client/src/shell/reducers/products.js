import { LOCATION_CHANGE } from 'react-router-redux';
import {
    PRODUCTS_SHOW_NEW,
    SAGA_ADD_PRODUCT_SUCCESS,
    PRODUCTS_EDIT,
    PRODUCTS_DELETE,
    SAGA_FETCH_PRODUCTS_SUCCESS,
    PRODUCT_CACHE
} from '../constants';

const getProducts = (products, id) => products.filter(x => x.id === id);

const initialState = {
    afterSave: false,
    mode: "",
    current: null,
    all: []
};

const products = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case LOCATION_CHANGE:
            //console.log(state);
            var reg = /^\/products\/\d+/;
            var path = action.payload.pathname;
            var {all} = state;

            if (reg.test(path)) {
                var id = path.split("/")[2]
                const current = getProducts(all, +id);
                return { all, current, mode: "Edit" }
            } else if (path.includes("products/new")) {
                return { all, current: {}, mode: "New" }
            }
            else {
                return { all, current: null }
            }
            break;
        case SAGA_FETCH_PRODUCTS_SUCCESS:
            return { ...state, all: action.products, afterSave: false }
        case PRODUCTS_SHOW_NEW:
            return { ...state, current: {} }
        case PRODUCT_CACHE:
            return { ...state, current: action.data }
        case SAGA_ADD_PRODUCT_SUCCESS:
            return { ...state, afterSave: true };
        case PRODUCTS_EDIT:
            var { all } = state;
            var current = getProducts(action.id)
            console.log(current);
            return { all, current };

        default: return state;
    }
}

export default products;

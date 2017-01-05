import { LOCATION_CHANGE } from 'react-router-redux';
import {
    TAXES_SHOW_NEW,
    SAGA_ADD_TAX_SUCCESS,
    TAXES_EDIT,
    TAXES_DELETE,
    SAGA_FETCH_TAXES_SUCCESS,
    TAX_CACHE,
    SAGA_GET_TAX_SUCCESS
} from '../constants';

const getTax = (taxes, id) => taxes.filter(x => x.id === id);

const initialState = {
    afterSave: false,
    mode: "",
    current: null,
    all: []
};

const taxes = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case LOCATION_CHANGE:
            //console.log(state);
            var reg = /^\/taxes\/\d+/;
            var path = action.payload.pathname;
            var {all} = state;

            if (reg.test(path)) {
                var id = path.split("/")[2]
                const current = getTax(all, +id);
                return { all, current, mode: "Edit" }
            } else if (path.includes("taxes/new")) {
                return { all, current: {}, mode: "New" }
            }
            else {
                return { all, current: null }
            }
            break;
        case SAGA_FETCH_TAXES_SUCCESS:
            return { ...state, all: action.taxes, afterSave: false }
        case TAXES_SHOW_NEW:
            return { ...state, current: {} }
        case TAX_CACHE:
            return { ...state, current: action.data }
        case SAGA_ADD_TAX_SUCCESS:
            return { ...state, afterSave: true };
        case SAGA_GET_TAX_SUCCESS:
            return {...state, current: action.tax}

        case TAXES_EDIT:
            var { all } = state;
            var current = getTax(action.id)            
            return { all, current };

        default: return state;
    }
}

export default taxes;

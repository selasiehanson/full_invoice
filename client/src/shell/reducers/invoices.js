import { LOCATION_CHANGE } from 'react-router-redux';
import {
    SAGA_FETCH_INVOICES_SUCCESS,
    SAGA_ADD_INVOICE_SUCCESS,
    SAGA_UPDATE_INVOICE_SUCCESS,
    SAGA_GET_INVOICE_SUCCESS,
    INVOICES_SHOW_NEW
} from '../constants';
import { dateHelpers } from '../utils/date-helpers';

const initialState = {
    editMode: "",
    current: null,
    all: [],
    original: [],
    afterSave: false
}

const getInvoice = (all, id) => all.filter(x => x.id === id)[0];
const invoices = (state = initialState, action) => {
    switch (action.type) {
        case SAGA_FETCH_INVOICES_SUCCESS:
            const old = action.invoices;
            const invoices = action.invoices.map((invoice) => {
                let newInvoice = { ...invoice };
                newInvoice.client = invoice.client.name;
                newInvoice.due_date = dateHelpers.simpleHumanDate(newInvoice.due_date);
                newInvoice.invoice_date = dateHelpers.simpleHumanDate(newInvoice.invoice_date);
                newInvoice.total_amount = `${newInvoice.currency.currency_code} ${newInvoice.total_amount}`;
                newInvoice.total_tax = `${newInvoice.currency.currency_code} ${newInvoice.total_tax}`;
                return newInvoice;
            })
            return { ...state, all: invoices, afterSave: false, original: old }

        case INVOICES_SHOW_NEW:
            return { ...state, current: {} }

        case SAGA_ADD_INVOICE_SUCCESS:
            var all = [action.invoice].concat(state.all);
            let current = action.invoice;
            console.log("added")
            return { ...state, all, current, editMode: '', afterSave: true };

        case SAGA_GET_INVOICE_SUCCESS:
            return { ...state, current: action.invoice }


        case SAGA_UPDATE_INVOICE_SUCCESS:
            //take out old record
            var found = state.all.filter((x) => x.id === action.invoice.id);
            var all = state.all;
            if (found.length > 0) {
                var takeMeOut = found[0];
                all.splice(state.all.indexOf(takeMeOut), 1);
                all = [action.invoice].concat(all);
            }

            return { ...state, all, afterSave: true, editMode: '', current: action.invoice };

        default:
            return state;
    }
}

export default invoices;
import {
    SAGA_FETCH_INVOICES,
    INVOICES_EDIT,
    INVOICE_CACHE,
    SAGA_ADD_INVOICE,
    INVOICES_DELETE,
    MSG_INVOICE_CREATE_SUCCESS,
    SHOW_NOTIFICATION,
    SAGA_GET_INVOICE,
    INVOICES_SHOW_NEW
} from '../constants';

export const getInvoices = () => {
    return {
        type: SAGA_FETCH_INVOICES
    }
}

export const addInvoice = (invoice) => {
    return {
        type: SAGA_ADD_INVOICE,
        data: { invoice: invoice }
    };
}

export const getInvoice = (id) => {
    return { type: SAGA_GET_INVOICE, id }
}

export const showNewInvoice = () => {
    return { type: INVOICES_SHOW_NEW }
}

export const editInvoice = (id) => {
    return { type: INVOICES_EDIT, id }
}

export const deleteInvoice = (id) => {
    return { type: INVOICES_DELETE, id }
}

export const cacheInvoice = (invoice) => {
    return {
        type: INVOICE_CACHE,
        data: invoice
    }
}

export const showInvoiceCreatedMsg = () => {
    return {
        type: SHOW_NOTIFICATION,
        payload: {
            type: 'success',
            content: MSG_INVOICE_CREATE_SUCCESS
        }
    }
};

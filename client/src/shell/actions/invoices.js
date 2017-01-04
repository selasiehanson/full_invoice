import {
    SAGA_FETCH_INVOICES,
    INVOICES_EDIT,
    INVOICE_CACHE,
    SAGA_ADD_INVOICE,
    INVOICES_DELETE
} from '../constants';

export const getInvoices = () => {
    return {
        type: SAGA_FETCH_INVOICES
    }
}

export const addInvoice = (invoice) => {
    return {
        type: SAGA_ADD_INVOICE,
        data: {invoice: invoice}
    };
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

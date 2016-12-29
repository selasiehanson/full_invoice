import {
    SAGA_CLIENTS_FETCH_LIST,
    CLIENTS_EDIT, CLIENTS_ADD,
    CLIENTS_DELETE
} from '../constants';

export const getClients = () => {
    return {
        type: SAGA_CLIENTS_FETCH_LIST
    }
}

export const editClient = (id) => {
    return { type: CLIENTS_EDIT, id }
}

export const deleteClient = (id) => {
    return { type: CLIENTS_DELETE, id }
}

export const addClient = () => {
    return (dispatch, getState) => {
        const form = getState().form;

        const client = {
            name: form.client.name.value,
            phone: form.client.phone.value
        }

        console.log('from add client')

        console.log(dispatch)
        dispatch({
            type: CLIENTS_ADD,
            payload: client
        });
    }
}

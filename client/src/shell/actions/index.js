import {
    CLIENTS_EDIT, CLIENTS_ADD,
    CLIENTS_DELETE, SHOW_NOTIFICATION, HIDE_NOTIFICATION
} from '../constants';

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


export function showNotification(payload) {
    return { type: SHOW_NOTIFICATION, payload };
};

export function hideNotification() {
    return { type: HIDE_NOTIFICATION };
};
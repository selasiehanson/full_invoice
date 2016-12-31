import {
    SAGA_FETCH_CLIENTS,
    CLIENTS_EDIT,
    CLIENT_CACHE,
    SAGA_ADD_CLIENT,
    CLIENTS_DELETE
} from '../constants';

export const getClients = () => {
    return {
        type: SAGA_FETCH_CLIENTS
    }
}

export const addClient = (client) => {
    return {
        type: SAGA_ADD_CLIENT,
        data: client
    };
}

export const editClient = (id) => {
    return { type: CLIENTS_EDIT, id }
}

export const deleteClient = (id) => {
    return { type: CLIENTS_DELETE, id }
}

export const cacheClient = (client) => {
    return {
        type: CLIENT_CACHE,
        data: client
    }
}

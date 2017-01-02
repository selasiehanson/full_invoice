import { LOCATION_CHANGE } from 'react-router-redux';
import {
    CLIENTS_SHOW_NEW,
    SAGA_ADD_CLIENT_SUCCESS,
    CLIENTS_EDIT,
    CLIENTS_DELETE,
    SAGA_FETCH_CLIENTS_SUCCESS,
    CLIENT_CACHE
} from '../constants';

const getClient = (clients, id) => clients.filter(x => x.id === id);

const initialState = {
    afterSave: false,
    mode: "",
    current: null,
    all: []
};

const clients = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case LOCATION_CHANGE:
            //console.log(state);
            var reg = /^\/clients\/\d+/;
            var path = action.payload.pathname;
            var {all} = state;

            if (reg.test(path)) {
                var id = path.split("/")[2]
                const current = getClient(all, +id);
                return { all, current, mode: "Edit" }
            } else if (path.includes("clients/new")) {
                return { all, current: {}, mode: "New" }
            }
            else {
                return { all, current: null }
            }
            break;
        case SAGA_FETCH_CLIENTS_SUCCESS:
            return { ...state, all: action.clients, afterSave: false }
        case CLIENTS_SHOW_NEW:
            return { ...state, current: {} }
        case CLIENT_CACHE:
            return { ...state, current: action.data }
        case SAGA_ADD_CLIENT_SUCCESS:
            return { ...state, afterSave: true };
        case CLIENTS_EDIT:
            var { all } = state;
            var current = getClient(action.id)            
            return { all, current };

        default: return state;
    }
}

export default clients;

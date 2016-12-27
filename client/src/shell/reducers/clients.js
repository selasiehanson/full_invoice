import { LOCATION_CHANGE } from 'react-router-redux';
import {
    CLIENTS_SHOW_NEW,
    CLIENTS_ADD,
    CLIENTS_EDIT,
    CLIENTS_DELETE
} from '../constants';

const contact = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            let {id, contact} = action;
            let {name, age, gender} = contact
            return { id, name, age, gender }

        default: return state;
    }
}

const getContact = (contacts, id) => contacts.filter(x => x.id === id);

const initialState = {
    editMode: "",
    current: null,
    all: [
        { id: 1, name: "kofi", phone: "233 204 565 6567" },
        { id: 2, name: "ama", phone: "233 204 897 1234" }
    ]
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
                const current = getContact(all, +id);
                return { all, current, editMode: "Edit" }
            } else if (path.includes("clients/new")) {
                return { all, current: {}, editMode: "New" }
            }
            else {
                return { all, current: null }
            }

        case CLIENTS_SHOW_NEW:
            return {...state, current: {} }
        case CLIENTS_ADD:
            //console.log(state)
            var {all, current} = state;

            var newList = [
                ...all,
                contact(undefined, action)
            ];

            return { current, all: newList };

        case CLIENTS_EDIT:
            var { all } = state;
            var current = getContact(action.id)
            console.log(current);
            return { all, current };

        default: return state;
    }
}

export default clients;

import {
    APP_STATES,
    SAGA_LOGIN_SUCCESS,
    GET_APP_STATE,
    SIGN_OUT
} from '../constants';

const initialState = {
    state: APP_STATES.NOT_AUTHENTICATED
}


function setUser(profile) {
    if (!localStorage.getItem('id_token')) {
        localStorage.setItem('profile', JSON.stringify(profile));
    }
}

function setToken(token) {
    localStorage.setItem('id_token', token);
}

function removeUser() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
}

class AuthManager {
    static isLoggedIn() {
        if (localStorage.getItem('id_token')) {
            return true;
        }
        return false;
    }
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_OUT:
            removeUser();
            return { ...state, state: APP_STATES.NOT_AUTHENTICATED };
        case GET_APP_STATE:
            if (AuthManager.isLoggedIn()) {
                return { ...state, state: APP_STATES.AUTHENTICATED }
            }
            return { ...state, state: APP_STATES.NOT_AUTHENTICATED }
            break;
        case SAGA_LOGIN_SUCCESS:
            setToken(action.data.jwt)
            return { ...state, state: APP_STATES.AUTHENTICATED }
            break;
        default:
            if (AuthManager.isLoggedIn()) {
                return { ...state, state: APP_STATES.AUTHENTICATED }
            }
            return { ...state, state: APP_STATES.NOT_AUTHENTICATED };
    }
}

export default app;

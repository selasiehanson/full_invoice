import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import clients from './clients';
import invoices from './invoices';
import links from './links';
import header from './header';
import notification from './notifications'
import app from './app';

const contactsApp = combineReducers({
    links,
    clients,
    header,
    invoices,
    notification,
    app,
    form: formReducer,
    routing: routerReducer
});
export default contactsApp;
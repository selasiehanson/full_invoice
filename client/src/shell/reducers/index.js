import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import clients from './clients';
import products from './products';
import invoices from './invoices';
import links from './links';
import header from './header';
import notification from './notifications'
import app from './app';
import currencies from './currencies'

const contactsApp = combineReducers({
    links,
    clients,
    products,
    header,
    invoices,
    notification,
    app,
    currencies,
    form: formReducer,
    routing: routerReducer
});
export default contactsApp;
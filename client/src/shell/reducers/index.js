import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import clients from './clients';
import receipts from './receipts';
import links from './links';
import header from './header';
import notification from './notifications'

const contactsApp = combineReducers({
    links,
    clients,
    header,
    receipts,
    notification,
    form: formReducer,
    routing: routerReducer
});
export default contactsApp;
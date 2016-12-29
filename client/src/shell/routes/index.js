import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from '../components/layout';
import Dashboard from '../components/dashboard/Dashboard';
import Report from '../components/Report';
import ClientList from '../components/clients/client-list';
import Client from '../components/clients/client';
import InvoiceList from '../components/invoices/invoice-list';
import Invoice from '../components/invoices/invoice';
import ProductList from '../components/products/product-list';
import SignIn from '../components/layout/sign-in';
import Register from '../components/layout/register';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="clients">
            <IndexRoute component={ClientList} />
            <Route path="new" component={Client} />
        </Route>
        <Route path="invoices">
            <IndexRoute component={InvoiceList} />
            <Route path="new" component={Invoice} />
        </Route>
        <Route path="products" component={ProductList} />
        <Route path="reports" component={Report} />
        <Route path="signup" component={Register} />
        <Route path="signin" component={SignIn} />
    </Route>
);
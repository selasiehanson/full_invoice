import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from '../components/layout';
import Dashboard from '../components/dashboard/Dashboard';
import Report from '../components/Report';
import Clients from '../components/clients/Clients';
import InvoiceList from '../components/invoices/invoice-list';
import ProductList from '../components/products/product-list';

export default (
    <Route path="/" component={Layout}>        
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/clients" component={Clients} />
        <Route path="/invoices" component={InvoiceList} />
        <Route path="/products" component={ProductList} />
        <Route path="/reports" component={Report} />
    </Route>
);
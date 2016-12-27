import { INIT_LINK } from '../constants';

const initialState = {
    all: [
        {
            link: '/dashboard',
            text: 'Dashboard',
            description: {
                title: 'Dashboard',
                content: 'See all your app actities'
            },
            childrenLinks: [
                {
                    link: '/dashboard/home',
                    text: 'Home'
                },
                {
                    link: '/dashboard/help',
                    text: 'Help'
                }
            ]
        },
        {
            link: '/clients',
            text: 'Clients'
        },
        {
            link: '/products',
            text: 'products'
        },
        {
            link: '/invoices',
            text: 'invoices'
        },
        {
            link: '/reports',
            text: 'Reports'
        }
    ],
    current: 0,
    currentChild: 0
};

const links = (state = initialState, action) => {
    return state;
}

export default links;
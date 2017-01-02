import {
    SAGA_FETCH_PRODUCTS,
    PRODUCTS_EDIT,
    PRODUCT_CACHE,
    SAGA_ADD_PRODUCT,
    PRODUCTS_DELETE
} from '../constants';

export const getProducts = () => {
    return {
        type: SAGA_FETCH_PRODUCTS
    }
}

export const addProduct = (client) => {
    return {
        type: SAGA_ADD_PRODUCT,
        data: client
    };
}

export const editProduct = (id) => {
    return { type: PRODUCTS_EDIT, id }
}

export const deleteProduct = (id) => {
    return { type: PRODUCTS_DELETE, id }
}

export const cacheProduct = (client) => {
    return {
        type: PRODUCT_CACHE,
        data: client
    }
}

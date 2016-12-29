import { call, put } from 'redux-saga/effects';
import ApiFetcher from '../apis/http';
import {
    SAGA_CLIENTS_FETCH_LIST_SUCCESS,
    SAGA_GET_CLIENT_SUCCESS,
    SAGA_ADD_CLIENT_SUCCESS,
    SAGA_UPDATE_CLIENT_SUCCESS

} from '../constants';

const CLIENTS = 'clients';
export function* clientsFetchList(action) {
    //call api to get the users
    const res = yield call(ApiFetcher.findAll, CLIENTS);

    yield put({
        type: SAGA_CLIENTS_FETCH_LIST_SUCCESS,
        receipts: res.data.data
    });
}

export function* addClient(action) {
    const res = yield call(ApiFetcher.create, CLIENTS, action.data)

    yield put({
        type: SAGA_ADD_CLIENT_SUCCESS,
        receipt: res.data.data
    });
}

export function* getClients(action) {
    const res = yield call(ApiFetcher.getClients, CLIENTS, action.id)

    yield put({
        type: SAGA_GET_CLIENT_SUCCESS,
        receipt: res.data.data
    });
}

export function* updateClients(action) {
    const res = yield call(ApiFetcher.update, CLIENTS, action.data)

    yield put({
        type: SAGA_UPDATE_CLIENT_SUCCESS,
        receipt: res.data.data
    });
}
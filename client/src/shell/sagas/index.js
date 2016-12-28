
import {takeLatest } from 'redux-saga';
import {fork} from 'redux-saga/effects';
import {clientsFetchList, addClients, getClients, updateClients} from './clients'
import {
    SAGA_CLIENTS_FETCH_LIST,
    SAGA_GET_CLIENT,
    SAGA_ADD_CLIENT,
    SAGA_UPDATE_CLIENT
} from '../constants';
/**
 * Main saga generator
*/
export function* sagas() {
    yield[
        fork(takeLatest, SAGA_CLIENTS_FETCH_LIST, clientsFetchList),
        fork(takeLatest, SAGA_GET_CLIENT, getClients),
        fork(takeLatest, SAGA_ADD_CLIENT, addClients),
        fork(takeLatest, SAGA_UPDATE_CLIENT, updateClients)
    ]
}

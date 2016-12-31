
import { takeLatest, takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { clientsFetchList, addClient, getClients, updateClients } from './clients';
import { signin, getUserProfile } from './auth';
import {
    SAGA_FETCH_CLIENTS,
    SAGA_GET_CLIENT,
    SAGA_ADD_CLIENT,
    SAGA_UPDATE_CLIENT,
    SAGA_LOGIN,
    SAGA_GET_USER_PROFILE
} from '../constants';
/**
 * Main saga generator
*/
export function* sagas() {
    yield [
        fork(takeLatest, SAGA_LOGIN, signin),
        fork(takeLatest, SAGA_GET_USER_PROFILE, getUserProfile),
        fork(takeLatest, SAGA_FETCH_CLIENTS, clientsFetchList),
        fork(takeLatest, SAGA_GET_CLIENT, getClients),
        fork(takeLatest, SAGA_ADD_CLIENT, addClient),
        fork(takeLatest, SAGA_UPDATE_CLIENT, updateClients)
    ]
}

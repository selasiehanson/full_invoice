import { call, put } from 'redux-saga/effects';
import ApiFetcher from '../apis/receipts';
import {
    SAGA_RECEIPTS_FETCH_LIST_SUCCESS,
    SAGA_GET_RECEIPT_SUCCESS,
    SAGA_ADD_RECEIPT_SUCCESS,
    SAGA_UPDATE_RECEIPT_SUCCESS

} from '../constants';

const RECEIPTS = 'receipts';
export function* receiptsFetchList(action) {
    //call api to get the users
    const res = yield call(ApiFetcher.findAll, RECEIPTS);

    yield put({
        type: SAGA_RECEIPTS_FETCH_LIST_SUCCESS,
        receipts: res.data.data
    });
}

export function* addReceipts(action) {
    const res = yield call(ApiFetcher.create, RECEIPTS, action.data)

    yield put({
        type: SAGA_ADD_RECEIPT_SUCCESS,
        receipt: res.data.data
    });
}

export function* getReceipts(action) {
    const res = yield call(ApiFetcher.getReceipts, RECEIPTS, action.id)

    yield put({
        type: SAGA_GET_RECEIPT_SUCCESS,
        receipt: res.data.data
    });
}

export function* updateReceipts(action) {
    const res = yield call(ApiFetcher.update, RECEIPTS, action.data)

    yield put({
        type: SAGA_UPDATE_RECEIPT_SUCCESS,
        receipt: res.data.data
    });
}
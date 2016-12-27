
import {takeLatest } from 'redux-saga';
import {fork} from 'redux-saga/effects';
import {receiptsFetchList, addReceipts, getReceipts, updateReceipts} from './receipts'
import {
    SAGA_RECEIPTS_FETCH_LIST,
    SAGA_GET_RECEIPT,
    SAGA_ADD_RECEIPT,
    SAGA_UPDATE_RECEIPT
} from '../constants';
/**
 * Main saga generator
*/
export function* sagas() {
    yield[
        fork(takeLatest, SAGA_RECEIPTS_FETCH_LIST, receiptsFetchList),
        fork(takeLatest, SAGA_GET_RECEIPT, getReceipts),
        fork(takeLatest, SAGA_ADD_RECEIPT, addReceipts),
        fork(takeLatest, SAGA_UPDATE_RECEIPT, updateReceipts)
    ]
}

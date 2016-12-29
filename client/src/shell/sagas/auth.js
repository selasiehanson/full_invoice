import { call, put } from 'redux-saga/effects';
import ApiFetcher from '../apis/http';
import {
    SAGA_LOGIN_SUCCESS
} from '../constants';

export function* signin(action) {
    let data = {
        auth: action.data
    }
    const res = yield call(ApiFetcher.create, 'user_token', data);
    try {
        console.log(res)
        yield put({
            type: SAGA_LOGIN_SUCCESS,
            data: res.data
        });    
    } catch (error) {
        console.log('we have an error.');
        console.log(error);
      //yield put({ type: SAGA_FETCH_TRANSACTION_ERROR });   
    }
}
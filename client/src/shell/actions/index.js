import {
    SHOW_NOTIFICATION, HIDE_NOTIFICATION
} from '../constants';


export function showNotification(payload) {
    return { type: SHOW_NOTIFICATION, payload };
};

export function hideNotification() {
    return { type: HIDE_NOTIFICATION };
};
import config from '../../config/config';
import axios from 'axios';
import { reconcileConstants } from "../constants/reconcile";
import headers from '../../config/headers';

export const reconcileData = {
    getReconcileData
};

function getReconcileData(account) {
    return (dispatch) => {
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + 'reconcile/' + account;
        axios({
            method: 'GET',
            url: getUrl,
            headers: headers
        }).then(
            (result) => {
                dispatch(success(result.data.data));
            },
            (error) => {
                console.log(error);
                return dispatch(failure(error));
            }
        );
    };

    function request() {
        return {
            type: reconcileConstants.GET_RECONCILE_REQUEST
        };
    }

    function success(data) {
        return {
            type: reconcileConstants.GET_RECONCILE_SUCCESS,
            data
        };
    }

    function failure(error) {
        return {
            type: reconcileConstants.GET_RECONCILE_FAILURE,
            error
        };
    }
}

export function setTickList(data) {
    return {
        type: reconcileConstants.SET_RECONCILE_SELECTED_ENTRIES,
        data
    };
}

export function editTransactionItem(data, account) {
    return (dispatch) => {
        let putUrl = config.API_URL + config.API_PREFIX + 'recupdate/' + data.id;

        axios({
            method: 'PUT',
            url: putUrl,
            headers: headers,
            data: data
        }).then(
            (result) => {
                dispatch(getReconcileData(account))
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function updateReconcileItem(id, account) {
    return (dispatch) => {
        let putUrl = config.API_URL + config.API_PREFIX + 'reconcile/' + id;

        axios({
            method: 'PUT',
            url: putUrl,
            headers: headers
        }).then(
            (result) => {
                dispatch(getReconcileData(account))
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function confirmReconcileItems(account) {
    return (dispatch) => {
        let putUrl = config.API_URL + config.API_PREFIX + 'reconcile/run/' + account;

        axios({
            method: 'PUT',
            url: putUrl,
            headers: headers
        }).then(
            (result) => {
                dispatch(getReconcileData(account))
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function clearReconcileItems(account) {
    return (dispatch) => {
        let deleteUrl = config.API_URL + config.API_PREFIX + 'reconcile/' + account;

        axios({
            method: 'DELETE',
            url: deleteUrl,
            headers: headers
        }).then(
            (result) => {
                dispatch(getReconcileData(account))
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

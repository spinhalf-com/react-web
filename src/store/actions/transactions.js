import config from '../../config/config';
import axios from 'axios';
import { transactionsConstants } from "../constants/transactions";
import headers from '../../config/headers';

export const transactionsData = {
    getTransactionsData
};

function getTransactionsData(account) {
    return (dispatch) => {
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + 'transactions/' + account;
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
            type: transactionsConstants.GET_TRANSACTIONS_REQUEST
        };
    }

    function success(data) {
        return {
            type: transactionsConstants.GET_TRANSACTIONS_SUCCESS,
            data
        };
    }

    function failure(error) {
        return {
            type: transactionsConstants.GET_TRANSACTIONS_FAILURE,
            error
        };
    }
}

export function setTickList(data) {
    return {
        type: transactionsConstants.SET_TRANSACTIONS_SELECTED_ENTRIES,
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
                dispatch(getTransactionsData(account))
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function updateTransactionItem(id, account) {
    return (dispatch) => {
        let putUrl = config.API_URL + config.API_PREFIX + 'reconcile/' + id;

        axios({
            method: 'PUT',
            url: putUrl,
            headers: headers
        }).then(
            (result) => {
                dispatch(getTransactionsData(account))
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function confirmTransactionItems(account) {
    return (dispatch) => {
        let putUrl = config.API_URL + config.API_PREFIX + 'reconcile/run/' + account;

        axios({
            method: 'PUT',
            url: putUrl,
            headers: headers
        }).then(
            (result) => {
                dispatch(getTransactionsData(account))
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function clearTransactionItems(account) {
    return (dispatch) => {
        let deleteUrl = config.API_URL + config.API_PREFIX + 'reconcile/' + account;

        axios({
            method: 'DELETE',
            url: deleteUrl,
            headers: headers
        }).then(
            (result) => {
                dispatch(getTransactionsData(account))
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

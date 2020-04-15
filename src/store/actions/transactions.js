import config from '../../config/config';
import axios from 'axios';
import { transactionsConstants } from "../constants/transactions";
import headers from '../../config/headers';

export const transactionsData = {
    getTransactionsData
};

function getTransactionsData(queryArray = null) {
    return (dispatch) => {
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + queryArray;
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

export function setMatchingDescriptionData(data) {
    return {
        type: transactionsConstants.SET_MATCHING_DESCRIPTION_DATA,
        data
    };
}

export function setQueryString(data) {
    return {
        type: transactionsConstants.SET_TRANSACTION_SEARCH_QUERY,
        data
    };
}

export function getQueryString() {
    return {
        type: transactionsConstants.GET_TRANSACTION_SEARCH_QUERY
    };
}

export function editTransactionItem(data, account) {
    return (dispatch) => {
        let putUrl = config.API_URL + config.API_PREFIX + 'transaction/' + data.id;

        axios({
            method: 'PUT',
            url: putUrl,
            headers: headers,
            data: data
        }).then(
            (result) => {
                dispatch(getTransactionsData())
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function getDescriptionOptions(text, code) {
    return (dispatch) => {
        let getUrl = config.API_URL + config.API_PREFIX + 'recent/' + code + '/' + text;

        axios({
            method: 'GET',
            url: getUrl,
            headers: headers,
        }).then(
            (result) => {
                dispatch(setMatchingDescriptionData(result.data))
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function saveTransactionItem(data) {
    return (dispatch) => {
        let postUrl = config.API_URL + config.API_PREFIX + 'transaction';

        axios({
            method: 'POST',
            url: postUrl,
            headers: headers,
            data: data
        }).then(
            (result) => {
                dispatch(getTransactionsData())
            },
            (error) => {
                console.log(error);
            }
        );
    };
}


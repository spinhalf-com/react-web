import config from '../../config/config';
import axios from 'axios';
import { transactionsConstants } from "../constants/transactions";
import headers from '../../config/headers';

export const transactionsData = {
    getTransactionsData
};

function getTransactionsData(queryString = null) {

    if(queryString === null || queryString === undefined) {
        queryString = '';
    } 

    return (dispatch) => {
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + 'transactions' + queryString;
        axios({
            method: 'GET',
            url: getUrl,
            headers: headers
        }).then(
            (result) => {
                dispatch(success(result.data.data));
                dispatch(pagination(result.data.data));
            },
            (error) => {
                console.log(error);
                return dispatch(failure([]));
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

    function failure(data) {
        return {
            type: transactionsConstants.GET_TRANSACTIONS_FAILURE,
            data
        };
    }
    
    function pagination(data) {
        return {
            type: transactionsConstants.TRANSACTIONS_PAGINATION_DATA,
            data
        }
    }
}

export function setMatchingDescriptionData(data) {
    return {
        type: transactionsConstants.GET_MATCHING_DESCRIPTION_DATA,
        data
    };
}

export function clearMatchingDescriptionData(data) {
    return {
        type: transactionsConstants.CLEAR_MATCHING_DESCRIPTION_DATA
    };
}

export function transactionsQueryData(data) {
    return {
        type: transactionsConstants.TRANSACTION_SEARCH_QUERY_OBJECT,
        data
    };
}

export function getQueryString() {
    return {
        type: transactionsConstants.TRANSACTION_SEARCH_QUERY
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

export function clearDescriptionOptions() {
    return (dispatch) => {
        dispatch(clearMatchingDescriptionData())
    };
}

export function transactionsDataSaveError(data) {
    return {
        type: transactionsConstants.TRANSACTIONS_SAVE_ERROR,
        data
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
                dispatch(getTransactionsData('transaction_search'))
                dispatch(transactionsDataSaveError(false))
            },
            (error) => {
                console.log(error);
                dispatch(transactionsDataSaveError(true))
            }
        );
    };
}




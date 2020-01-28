import { accountsConstants } from '../constants/accounts';
import axios from 'axios';

export const accounts = {
    getAccounts,
    getDefaultArrays
};

function getAccounts() {
    return dispatch => {
        dispatch(request());
        axios.get(`https://jfr.zapple.co/balances_json`,{},
            {
                headers: { Authorization: "Bearer " + localStorage.getItem('oauthToken')}
            })
            .then(
                result => {

                    result.data.unrec_balances.map(async item => {
                        dispatch(updateItem(item))
                    });
                    return dispatch(success(result.data));
                },
                error => {
                    console.log(error);
                    return dispatch(failure(error));

                }
            );
    };

    function request() {
        return {
            type: accountsConstants.GET_ACCOUNTS_REQUEST
        }
    }

    function success(data) {
        return {
            type: accountsConstants.GET_ACCOUNTS_SUCCESS, data
        }

    }
    function updateItem(data) {
        return {
            type: accountsConstants.GET_ACCOUNTS_UPDATE_ITEM, data
        }
    }

    function failure(error) {
        return {
            type: accountsConstants.GET_ACCOUNTS_FAILURE, error
        }
    }
}


function getDefaultArrays() {
    return dispatch => {
        dispatch(request());
        axios.get(`https://jfr.zapple.co/get_mobile_arrays`,{},
            {
                headers: { }
            })
            .then(
                result => {
                    return dispatch(success(result.data));
                },
                error => {
                    console.log(error);
                    return dispatch(failure(error));

                }
            );
    };

    function request() {
        return {
            type: accountsConstants.GET_DEFAULT_ARRAYS
        }
    }

    function success(data) {
        return {
            type: accountsConstants.GET_DEFAULT_ARRAYS_SUCCESS, data
        }
    }
    // function updateItem(data) {
    //     return {
    //         type: accountsConstants.GET_ACCOUNTS_UPDATE_ITEM, data
    //     }
    // }

    function failure(error) {
        return {
            type: accountsConstants.GET_DEFAULT_ARRAYS_FAILURE, error
        }
    }
}


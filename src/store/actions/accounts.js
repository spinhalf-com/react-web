import { accountsConstants } from '../constants/accounts';
import axios from 'axios';

export const accounts = {
    getAccounts,
};

function getAccounts() {
    return dispatch => {
        dispatch(request());
        axios.get(`https://jfr.zapple.co/balances_json`,{},
            {
                headers: { }
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
            type: accountsConstants.GET_ACCOUNTS_FALIURE, error
        }
    }
}

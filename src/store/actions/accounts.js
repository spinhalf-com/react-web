import { accountsConstants } from '../constants/accounts';
import axios from 'axios';
import config from "../../config/config";

export const accounts = {
    getAccounts
};

function getAccounts() {
    console.log('vruebwi')
    return dispatch => {
        dispatch(request());
        let getUrl = config.API_URL + 'balances_json';
        axios.get(getUrl,{}, {
                headers: { Authorization: "Bearer " + localStorage.getItem('oauthToken')}
            }).then(
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

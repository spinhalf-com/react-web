import config from "../../config/config";
import axios from "axios";
import {accountsConstants} from "../constants/accounts";

export const default_data = {
    getDefaultData
};

function getDefaultData() {
    console.log('here');
    return dispatch => {
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + 'get_mobile_arrays';
        axios.get(getUrl,{}, {
                headers: { Authorization: "Bearer " + localStorage.getItem('oauthToken')}
            }).then(
                result => {
                    // result.data.unrec_balances.map(async item => {
                    //     dispatch(updateItem(item))
                    // });
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


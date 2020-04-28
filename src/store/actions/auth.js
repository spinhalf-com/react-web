import constants from '../constants/auth';
import axios from 'axios';
import config from '../../config/config';
import headers from '../../config/headers';

export function getUser() {
    return (dispatch) => {
        dispatch(authLoading(true));
        let getUrl = config.API_URL + config.API_PREFIX + 'me';

        axios({
            method: 'GET',
            url: getUrl,
            headers: headers,
        }).then(
            (result) => {
                return dispatch(
                    authSuccess(result.data.data),
                    authLoading(false)
                );
            },
            (error) => {
                console.log(error);
                return dispatch(authFail(), authLoading(false));
            }
        );
    };
}

export function logout() {
    return (dispatch) => {
        dispatch(authLoading(true));
        let getUrl = config.API_URL + config.API_PREFIX + 'logout';

        axios({
            method: 'GET',
            url: getUrl,
            headers: headers,
        }).then(
            (result) => {
                return dispatch(
                    authFail(),
                    dispatch(authLoading(false)),
                    localStorage.removeItem('oauthToken')
                );
            },
            (error) => {
                console.log(error);
                return dispatch(authFail(), dispatch(authLoading(false)));
            }
        );
    };
}

function authLoading(status) {
    return {
        type: constants.SET_AUTH_LOADING,
        payload: status,
    };
}

function authSuccess(data) {
    return {
        type: constants.SET_CURRENT_USER,
        data,
    };
}

function authFail() {
    return {
        type: constants.AUTH_FAIL,
    };
}

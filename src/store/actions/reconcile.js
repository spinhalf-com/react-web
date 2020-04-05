import config from '../../config/config';
import axios from 'axios';
import { regtransConstants } from '../constants/regtrans';
import headers from '../../config/headers';

export const reconcileData = {
    getReconcileData
};

function getReconcileData() {
    return (dispatch) => {
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + 'reconcile/';
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
            type: regtransConstants.GET_REGTRANS_REQUEST
        };
    }

    function success(data) {
        return {
            type: regtransConstants.GET_REGTRANS_SUCCESS,
            data
        };
    }

    function failure(error) {
        return {
            type: regtransConstants.GET_REGTRANS_FAILURE,
            error
        };
    }
}

export function setTickList(data) {
    return {
        type: regtransConstants.SET_REGTRANS_SELECTED_ENTRIES,
        data
    };
}


export function submitEntries({ year, month, ids }) {
    const data = {
        ids: ids
    };

    return (dispatch) => {
        let postUrl = config.API_URL + config.API_PREFIX + 'reconcile/run';

        axios({
            method: 'POST',
            url: postUrl,
            headers: headers,
            data
        }).then(
            (result) => {
                dispatch(getReconcileData())
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function updateReconcileItem(data) {
    return (dispatch) => {
        let putUrl = config.API_URL + config.API_PREFIX + 'reconcile/' + data.id;

        axios({
            method: 'PUT',
            url: putUrl,
            headers: headers,
            data
        }).then(
            (result) => {
                dispatch(getReconcileData())
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

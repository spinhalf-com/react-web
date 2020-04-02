import config from '../../config/config';
import axios from 'axios';
import { regtransConstants } from '../constants/regtrans';
import headers from '../../config/headers';

export const regtransData = {
    getRegtransData
};

function getRegtransData() {
    return (dispatch) => {
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + 'regtrans';
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

export function setYear(data) {
    return {
        type: regtransConstants.SET_REGTRANS_YEAR,
        data
    };
}

export function setMonth(data) {
    return {
        type: regtransConstants.SET_REGTRANS_MONTH,
        data
    };
}

export function submitEntries({ year, month, ids }) {
    const data = {
        year: year,
        month: month,
        ids: ids
    };

    return (dispatch) => {
        let getUrl = config.API_URL + config.API_PREFIX + 'regtrans/run';

        axios({
            method: 'POST',
            url: getUrl,
            headers: headers,
            data
        }).then(
            (result) => {
                alert('Sent successfully');
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function updateRegtransItem(data) {
    return (dispatch) => {
        let putUrl = config.API_URL + config.API_PREFIX + 'regtrans/' + data.id;

        axios({
            method: 'PUT',
            url: putUrl,
            headers: headers,
            data
        }).then(
            (result) => {
                dispatch(getRegtransData())
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function addRegtransItem(data) {
    return (dispatch) => {
        let postUrl = config.API_URL + config.API_PREFIX + 'regtrans/';

        axios({
            method: 'POST',
            url: postUrl,
            headers: headers,
            data
        }).then(
            (result) => {
                dispatch(getRegtransData())
            },
            (error) => {
                console.log(error);
            }
        );
    };
}
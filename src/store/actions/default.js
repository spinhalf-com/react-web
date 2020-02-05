import config from "../../config/config";
import axios from "axios";
import { defaultsConstants } from "../constants/defaults";
import headers from "../../config/headers";

export const defaults = {
    getDefaultData
};

function getDefaultData() {
    // console.log('actions.default');
    return dispatch => {
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + 'get_mobile_arrays';
        axios({
            method: 'GET',
            url: getUrl,
            headers: headers
        }).then(
            result => {
                // result.data.codes.map(async item => {
                //     dispatch(updateItem(item))
                // });
                console.log(result.data)
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
            type: defaultsConstants.GET_DEFAULT_ARRAYS
        }
    }

    function success(data) {
        return {
            type: defaultsConstants.GET_DEFAULT_ARRAYS_SUCCESS, data
        }
    }

    function updateItem(data) {
        return {
            type: defaultsConstants.GET_DEFAULT_UPDATE_ITEM, data
        }
    }

    function failure(error) {
        return {
            type: defaultsConstants.GET_DEFAULT_ARRAYS_FAILURE, error
        }
    }
}


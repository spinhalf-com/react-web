import config from "../../config/config";
import axios from "axios";
import { regtransConstants } from "../constants/regtrans";
import headers from "../../config/headers";

export const defaults = {
    getDefaultData
};

function getRegtransData() {
    
    return dispatch => {
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + 'regtrans';
        axios({
            method: 'GET',
            url: getUrl,
            headers: headers
        }).then(
            result => {
                result.data.codes.map(async item => {
                    dispatch(updateItem(item))
                });
                // console.log(result.data)
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
            type: regtransConstants.GET_REGTRANS_REQUEST
        }
    }

    function success(data) {
        return {
            type: regtransConstants.GET_REGTRANS_SUCCESS, data
        }
    }

    function updateItem(data) {
        return {
            type: regtransConstants.GET_REGTRANS_UPDATE_ITEM, data
        }
    }

    function failure(error) {
        return {
            type: regtransConstants.GET_REGTRANS_FAILURE, error
        }
    }
}


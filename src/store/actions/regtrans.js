import config from "../../config/config";
import axios from "axios";
import { regtransConstants } from "../constants/regtrans";
import headers from "../../config/headers";

export const regtransData = {
    getRegtransData,
    tickListData
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
                result.data.data.map(async item => {
                    dispatch(updateItem(item))
                });
                return dispatch(success(result.data.data));
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
            type: regtransConstants.GET_REGTRANS_SUCCESS,
            data
        }
    }

    function updateItem(data) {
        return {
            type: regtransConstants.GET_REGTRANS_UPDATE_ITEM,
            data
        }
    }

    function failure(error) {
        return {
            type: regtransConstants.GET_REGTRANS_FAILURE,
            error
        }
    }
}

function tickListData() {
    function tickList() {
        return {
            type: regtransConstants.GET_REGTRANS_TICKLIST
        }
    }

    function updateTickList(data) {
        return {
            type: regtransConstants.UPDATE_REGTRANS_TICKLIST,
            data
        }
    }

}
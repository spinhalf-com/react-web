import { cryptosConstants } from '../constants/cryptos';
import axios from 'axios';

export const cryptos = {
    getCryptos,
};

function getCryptos() {
    return dispatch => {
        dispatch(request());
        axios.get(`https://jfr.zapple.co/balances_json`,{},
        {
            headers: { }
        })
        .then(
            result => {

                result.data.cryptos_balances.map(async item => {
                    item[3] = 0;
                    let resp = await axios.get(`https://min-api.cryptocompare.com/data/price?tsyms=GBP&fsym=` + item[0])
                    item[3] = resp.data.GBP;
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
            type: cryptosConstants.GET_CRYPTOS_REQUEST
        }
    }

    function success(data) {
        return {
            type: cryptosConstants.GET_CRYPTOS_SUCCESS, data
        }

    }
    function updateItem(data) {
        return {
            type: cryptosConstants.GET_CRYPTOS_UPDATE_ITEM, data
        }
    }

    function failure(error) {
        return {
            type: cryptosConstants.GET_CRYPTOS_FALIURE, error
        }
    }
}

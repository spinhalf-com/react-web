import { BALANCES } from "../constants/action-types";
import axios from 'axios';
import config from "../../config/config";

// export function getBalances(payload) {
//     return {
//         type: BALANCES,
//         payload
//     };
// }

export const balances = (balances) => {
    console.log('fe2');
    return {
        type: BALANCES,
        balances: balances
    }
};

export const fetchBalances = (dispatch) => {
    console.log('fe1');
    return (dispatch) => {
        return axios.get(config.API_URL)
            .then(response => {
                console.log(response.data);
                dispatch(balances(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};
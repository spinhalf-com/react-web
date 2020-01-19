import { BALANCES } from "../constants/action-types";

export function getBalances(payload) {
    return {
        type: BALANCES,
        payload
    };
}

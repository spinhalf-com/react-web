import { ADD_BALANCES } from "../constants/action-types";

export function addBalances(payload) {
    return { type: ADD_BALANCES, payload };
}

import { ADD_CRYPTO_VALUE } from "../constants/action-types";
import { ADD_TEMP_VALUE } from "../constants/action-types";

export function addCryptoValue(payload) {
    return { type: ADD_CRYPTO_VALUE, payload };
}

export function addTempValue(payload) {
    return { type: ADD_TEMP_VALUE, payload };
}
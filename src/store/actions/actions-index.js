import { ADD_CRYPTO_VALUE } from "../constants/action-types";

export function addCryptoValue(payload) {
    return { type: ADD_CRYPTO_VALUE, payload };
}

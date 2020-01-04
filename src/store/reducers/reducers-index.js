import { ADD_CRYPTO_VALUE } from "../constants/action-types";
const initialState = {
    cryptoValues: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_CRYPTO_VALUE) {
        return Object.assign({}, state, {
            cryptoValues: state.cryptoValues.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;
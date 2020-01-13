import {ADD_CRYPTO_VALUE, ADD_TEMP_VALUE} from "../constants/action-types";
const initialState = {
    cryptoValues: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_CRYPTO_VALUE) {
        return Object.assign({}, state, {
            cryptoValues: state.cryptoValues.concat(action.payload)
        });
    }

    if (action.type === ADD_TEMP_VALUE) {
        return Object.assign({}, state, {
            tempValues: state.tempValues.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;
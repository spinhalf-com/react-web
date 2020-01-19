import { ADD_BALANCES } from "../constants/action-types";
const initialState = {
    balances: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_BALANCES) {
        return Object.assign({}, state, {
            balances: state.balances.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;
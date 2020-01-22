import { BALANCES } from "../constants/action-types";
const initialState = {
    balances: []
};

function rootReducer(state = initialState, action) {
    if (action.type === BALANCES) {
        return action.balances;
    }
    return state;
}
export default rootReducer;
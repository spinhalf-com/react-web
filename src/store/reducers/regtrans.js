import { regtransConstants } from "../constants/regtrans";

const initialState = [];

export default function location(state = initialState, action) {
    switch (action.type) {
        case regtransConstants.GET_REGTRANS_REQUEST:
            return state;
        case regtransConstants.GET_REGTRANS_SUCCESS:
            return action.data.unrec_balances;
        case regtransConstants.GET_REGTRANS_UPDATE_ITEM:
            let newState = [...state];
            newState.map(item => {
                if(item[0] === action.data[0])
                {
                    item = action.data
                }
                return item;
            });
            return newState;
        case regtransConstants.GET_REGTRANS_FAILURE:
            return action.error;
        default:
            return state;
    }
}
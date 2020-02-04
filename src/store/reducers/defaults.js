import { defaultsConstants } from "../constants/defaults";

const initialState = [];

export default function location(state = initialState, action) {
    switch (action.type) {
        case defaultsConstants.GET_DEFAULT_ARRAYS:
            return state;
        case defaultsConstants.GET_DEFAULT_ARRAYS_SUCCESS:
            return action.data;
        case defaultsConstants.GET_DEFAULT_UPDATE_ITEM:
            let newState = [...state];
            newState.map(item => {
                if(item[0] === action.data[0]) {
                    item = action.data
                }
                return item;
            });
            return newState;
        case defaultsConstants.GET_DEFAULT_ARRAYS_FAILURE:
            return action.error;
        default:
            return state;
    }
}
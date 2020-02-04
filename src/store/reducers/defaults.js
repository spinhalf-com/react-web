import { accountsConstants } from "../constants/accounts";

const initialState = [];

export default function location(state = initialState, action) {
    switch (action.type) {
        case accountsConstants.GET_DEFAULT_ARRAYS:
            return state;
        case accountsConstants.GET_DEFAULT_ARRAYS_SUCCESS:
            return action.data.codes;
        // case accountsConstants.GET_ACCOUNTS_UPDATE_ITEM:
        //     let newState = [...state];
        //     newState.map(item => {
        //         if(item[0] === action.data[0])
        //         {
        //             item = action.data
        //         }
        //         return item;
        //     });
        //     return newState;
        case accountsConstants.GET_DEFAULT_ARRAYS_FAILURE:
            return action.error;
        default:
            return state;
    }
}
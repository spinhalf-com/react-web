import { accountsConstants } from "../constants/accounts";

const initialState = [];

export default function location(state = initialState, action) {
    switch (action.type) {
        case accountsConstants.GET_ACCOUNTS_REQUEST:
            return state;
        case accountsConstants.GET_ACCOUNTS_SUCCESS:
            return action.data.unrec_balances;
        case accountsConstants.GET_ACCOUNTS_UPDATE_ITEM:
            let newState = [...state];
            newState.map(item => {
                if(item[0] === action.data[0])
                {
                    item = action.data
                }
                return item;
            });
            return newState;
        case accountsConstants.GET_LOCATIONS_FALIURE:
            return action.error;
        default:
            return state;
    }
}
import { cryptosConstants } from "../constants/cryptos";

const initialState = [];

export default function location(state = initialState, action) {
    switch (action.type) {
        case cryptosConstants.GET_CRYPTOS_REQUEST:
            return state;
        case cryptosConstants.GET_CRYPTOS_SUCCESS:
            return action.data.cryptos_balances;
        case cryptosConstants.GET_CRYPTOS_UPDATE_ITEM:
            let newState = [...state]
            newState.map(item => {
                if(item[0] === action.data[0])
                {
                    item = action.data
                }
            });
            return newState;
        case cryptosConstants.GET_LOCATIONS_FALIURE:
            return action.error;
        default:
            return state;
    }
}
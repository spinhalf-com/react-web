import { regtransConstants } from '../constants/regtrans';

const initialState = {
    entries: [],
    selectedEntries: [],
    year: null,
    month: null
};

export default function location(state = initialState, action) {
    switch (action.type) {
        case regtransConstants.GET_REGTRANS_REQUEST:
            return state;

        case regtransConstants.GET_REGTRANS_SUCCESS:
            return Object.assign({}, state, {
                entries: action.data
            });

        case regtransConstants.SET_REGTRANS_MONTH:
            return Object.assign({}, state, {
                month: action.data
            });

        case regtransConstants.SET_REGTRANS_YEAR:
            return Object.assign({}, state, {
                year: action.data
            });

        case regtransConstants.GET_REGTRANS_FAILURE:
            return action.error;

        case regtransConstants.UPDATE_REGTRANS_CHECKED_STATE:
            let checkedState = [...state];
            checkedState.map((item) => {
                if (item[0] === action.data[0]) {
                    item = action.data;
                }
                return item;
            });
            return checkedState;

        case regtransConstants.SET_REGTRANS_SELECTED_ENTRIES:
            return Object.assign({}, state, {
                selectedEntries: action.data
            });
        default:
            return state;
    }
}

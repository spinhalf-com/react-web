import { reconcileConstants } from '../constants/reconcile';

const initialState = {
    entries: [],
    selectedEntries: []
};

export default function location(state = initialState, action) {
    switch (action.type) {
        case reconcileConstants.GET_RECONCILE_REQUEST:
            return state;

        case reconcileConstants.GET_RECONCILE_SUCCESS:
            return Object.assign({}, state, {
                entries: action.data
            });

        case reconcileConstants.GET_RECONCILE_FAILURE:
            return action.error;

        case reconcileConstants.UPDATE_RECONCILE_TICKLIST:
            let checkedState = [...state];
            checkedState.map((item) => {
                if (item[0] === action.data[0]) {
                    item = action.data;
                }
                return item;
            });
            return checkedState;

        case reconcileConstants.SET_RECONCILE_SELECTED_ENTRIES:
            return Object.assign({}, state, {
                selectedEntries: action.data
            });
        default:
            return state;
    }
}

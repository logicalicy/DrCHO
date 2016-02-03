import * as types from '../actions/actionTypes';
import * as constants from '../constants/constants';

const initialState = {
    searchTerm: '',
    sortBy: constants.SORT_BY_NAME
};

export default function foodList(state = initialState, action = {}) {
    switch (action.type) {
        // TODO: Add handlers here.
        case types.SEARCH:
            return {
                ...state,
                searchTerm: action.searchTerm
            }
        case types.SORT:
            return {
                ...state,
                sortBy: action.sortBy
            }
        default:
            return state;
    }
}
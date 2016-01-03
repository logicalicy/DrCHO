import * as types from '../actions/actionTypes';

const initialState = {
    searchTerm: '',
};

export default function foodList(state = initialState, action = {}) {
  switch (action.type) {
    // TODO: Add handlers here.
    case types.SEARCH:
        return {
            ...state,
            searchTerm: action.searchTerm
        }
    default:
        return state;
  }
}
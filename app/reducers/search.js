import * as types from '../actions/actionTypes';

const initialState = {
	term: '' 
};

export default function search(state = initialState, action = {}) {
  switch (action.type) {
    // TODO: Add handlers here.
    case types.SEARCH:
    	return {
    		...state,
    		term: action.term
    	}
    default:
     	return state;
  }
}
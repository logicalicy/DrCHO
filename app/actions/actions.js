import * as types from './actionTypes';

// Add action handlers:
// export function action() {
//   return {
//     type: types.ACTION_NAME
//   };
// }
export function search(searchTerm) {
    return {
        type: types.SEARCH,
        searchTerm
    };
}

export function sort(sortBy) {
    return {
        type: types.SORT,
        sortBy
    };
}
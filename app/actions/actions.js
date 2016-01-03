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
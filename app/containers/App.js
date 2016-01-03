import React, { Component } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';

import * as reducers from '../reducers';
import FoodListComponent from '../components/FoodListComponent';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            {() => <FoodListComponent />}
        </Provider>
    );
  }
}
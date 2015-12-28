import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';

import FoodListComponent from '../components/FoodListComponent';

export default class App extends Component {
  render() {
    return (
      <Provider>
        {() => <FoodListComponent />}
      </Provider>
    );
  }
}
import React, { Component, BackAndroid, Navigator } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';

import * as reducers from '../reducers';
import AboutComponent from '../components/AboutComponent';
import FoodListComponent from '../components/FoodListComponent';
import FoodDetailComponent from '../components/FoodDetailComponent';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RouteMapper = function(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;
    if (route.name === 'detail') {
        return (<FoodDetailComponent foodName={route.foodName} navigator={_navigator} />);
    }
    if (route.name === 'about') {
        return (<AboutComponent />);
    }
    // Default route.
    return (
        <Provider store={store}>
            {() => <FoodListComponent navigator={_navigator} />}
        </Provider>
    );
};

export default class App extends Component {
  render() {
    var initialRoute = {name: 'main'};
    return (
        <Navigator
            style={{flex: 1}}
            initialRoute={initialRoute}
            configureScene={() => Navigator.SceneConfigs.FadeAndroid}
            renderScene={RouteMapper} />
    );
  }
}
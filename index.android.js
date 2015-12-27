/**
 * Dr CHO React Native App
 */
'use strict';

var React = require('react-native');
var FoodListComponent = require('./FoodListComponent');
var {
      AppRegistry
} = React;

var DrCHO = React.createClass({
    render: function() {
        return (
            <FoodListComponent />
        );
    }
});

AppRegistry.registerComponent('DrCHO', () => DrCHO);

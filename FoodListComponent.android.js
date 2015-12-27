'use strict';

var React = require('react-native');
var FoodComponent = require('./FoodComponent');
var foods = require('./Diogenes-GI-Database-for-Website-UK.json');
var {
    StyleSheet,
    TouchableHighlight,
    Image,
    Text,
    View,
    ListView,
} = React;

var FoodListComponent = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(foods),
        };
    },
    _renderRow: function(rowData: object, sectionID: number, rowID: number) {
        return (
            <FoodComponent rowID={rowID} foodName={rowData["Food name"]} />
        );
    },
    render: function() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}>
            </ListView>
        );
    }
});

module.exports = FoodListComponent;

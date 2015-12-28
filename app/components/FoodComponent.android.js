'use strict';

var React = require('react-native');
var {
    PropTypes,
    StyleSheet,
    TouchableHighlight,
    Image,
    Text,
    View,
    ListView,
} = React;

var FoodComponent = React.createClass({
    propTypes: {
        rowID: PropTypes.number,
        foodName: PropTypes.string
    },
    _renderDetailedComponent: function () {
        // Stub
    },
    render: function() {
        // TODO: Add 'source' attribute to <Image /> component.
        return (
            <TouchableHighlight onPress={this._renderDetailedComponent}>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} />
                        <Text style={styles.text}>
                            {this.props.foodName}
                        </Text>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }
});

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    text: {
        flex: 1,
    },
});

module.exports = FoodComponent;

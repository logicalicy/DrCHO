'use strict';

import React, {
    PropTypes,
    StyleSheet,
    TouchableHighlight,
    Image,
    Text,
    View,
    ListView,
    Component
} from 'react-native';

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
        marginLeft: 10
    },
});

export default class FoodComponent extends Component {
    propTypes: {
        rowID: PropTypes.number,
        foodName: PropTypes.string
    }

    _renderDetailedComponent() {
        // Stub
    }

    render() {
        // TODO: Add 'source' attribute to <Image /> component.
        return (
            <TouchableHighlight onPress={this._renderDetailedComponent}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            {this.props.foodName}
                        </Text>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }
}

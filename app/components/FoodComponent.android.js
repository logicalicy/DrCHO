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

import * as constants from '../constants/constants';

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
    thumbRed: {
        color: 'red',
        textAlign: 'center'
    },
    thumbOrange: {
        color: 'orange',
        textAlign: 'center'
    },
    thumbGreen: {
        color: 'green',
        textAlign: 'center'
    },
    text: {
        flex: 1
    },
});

var _stat = function(food, sortBy) {
    var stat = null;
    switch (sortBy) {
        case constants.SORT_BY_CHO:
            stat = food.props.cho;
            break;
        case constants.SORT_BY_GI_VALUE:
            stat = food.props.giValue;
            break;
        case constants.SORT_BY_GI_LOAD:
            stat = food.props.gl;
            break;
    }
    return stat;
};

var _style = function(food, sortBy) {
    var stat = null;
    var style = {};
    switch (sortBy) {
        case constants.SORT_BY_CHO:
            stat = food.props.cho;
            if (stat <= 14) {
                style = styles.thumbGreen;
            }
            else if (stat <= 55) {
                style = styles.thumbOrange;
            }
            else {
                style = styles.thumbRed;
            }
            break;
        case constants.SORT_BY_GI_VALUE:
            stat = food.props.giValue;
            if (stat <= 55) {
                style = styles.thumbGreen;
            }
            else if (stat <= 69) {
                style = styles.thumbOrange;
            }
            else {
                style = styles.thumbRed;
            }
            break;
        case constants.SORT_BY_GI_LOAD:
            stat = food.props.gl;
            if (stat <= 10) {
                style = styles.thumbGreen;
            }
            else if (stat <= 19) {
                style = styles.thumbOrange;
            }
            else {
                style = styles.thumbRed;
            }
            break;
    }
    return style;
};

export default class FoodComponent extends Component {
    propTypes: {
        rowID: PropTypes.number,
        foodName: PropTypes.string
    }

    _renderDetailedComponent() {
        // Stub
    }

    renderStat() {
        const { store } = this.context;
        const sortBy = store.getState().foodList.sortBy;
        var stat = _stat(this, sortBy);
        var style = _style(this, sortBy);
        return (
            <View>
                <Text style={style}>{stat}</Text>
            </View>
        );
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
                        {this.renderStat()}
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }
}
FoodComponent.contextTypes = {
    store: React.PropTypes.object
}

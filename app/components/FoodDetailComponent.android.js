'use strict';

import React, {
    PropTypes,
    StyleSheet,
    Text,
    View,
    Component
} from 'react-native';

import utils from '../utils/utils';

import _ from 'lodash';

var styles = StyleSheet.create({
    container: {
        padding: 10
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
});


export default class FoodDetailComponent extends Component {
    propTypes: {
        foodName: PropTypes.string
    }
    render() {
        var food = utils.getByName(this.props.foodName);
        var stats = _.map(food, function(value, key) {
            if (key && value) {
                return (
                    <Text>
                        {key + ': ' + value}
                    </Text>
                );
            };
        });
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    {this.props.foodName}
                </Text>
                {stats}
            </View>
        );
    }
}

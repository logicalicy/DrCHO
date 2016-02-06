'use strict';

import React, {
    StyleSheet,
    ToolbarAndroid,
    Image,
    Text,
    View,
    ListView,
    Component
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as constants from '../constants/constants';
import { sort } from '../actions/actions';
import utils from '../utils/utils';
import SearchComponent from './SearchComponent';
import FoodComponent from './FoodComponent';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toolbar: {
        height: 50
    },
    sort: {
        padding: 10,
        backgroundColor: '#337ab7'
    },
    sortText: {
        color: 'white',
    }
});

var _renderSort = function (sortBy) {
    var sort;
    switch (sortBy) {
        case constants.SORT_BY_NAME:
            return null;
        case constants.SORT_BY_CHO:
            sort = 'Sorted by CHO (g/100g)';
            break;
        case constants.SORT_BY_GI_VALUE:
            sort = 'Sorted by GI Value';
            break;
        case constants.SORT_BY_GI_LOAD:
            sort = 'Sorted by GI Load';
            break;
    }
    return (
        <View style={styles.sort}>
            <Text style={styles.sortText}>
                {sort}
            </Text>
        </View>
    );
};

export default class FoodListComponent extends Component {
    propTypes: {
        navigator: PropTypes.object
    }
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    _renderRow(rowData: object, sectionID: number, rowID: number) {
        return (
            <FoodComponent rowID={rowID}
                foodName={rowData["Food name"]}
                cho={rowData["CHO (g/100g)"]}
                giValue={rowData["GI value"]}
                gl={rowData["GL"]}
                navigator={this.props.navigator} />
        );
    }
    toolbarActions() {
        return [
            {title: 'Sort by name'},
            {title: 'Sort by CHO'},
            {title: 'Sort by GI Value'},
            {title: 'Sort by GI Load'},
        ]
    }
    render() {
        const { store } = this.context;
        const searchTerm = store.getState().foodList.searchTerm;
        const sortBy = store.getState().foodList.sortBy;
        const filtered_foods = utils.filterFoodsBy(searchTerm, sortBy);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(filtered_foods);
        const sortOrder = [
            constants.SORT_BY_NAME,
            constants.SORT_BY_CHO,
            constants.SORT_BY_GI_VALUE,
            constants.SORT_BY_GI_LOAD
        ];
        return (
            <View style={styles.container}>
                <ToolbarAndroid style={styles.toolbar} title={'Dr CHO'}
                    actions={this.toolbarActions()}
                    onActionSelected={(position) => store.dispatch(sort(sortOrder[position]))} />
                {_renderSort(sortBy)}
                <SearchComponent />
                <ListView
                    dataSource={dataSource}
                    renderRow={this._renderRow.bind(this)}>
                </ListView>
            </View>
        );
    }
}
FoodListComponent.contextTypes = {
    store: React.PropTypes.object
}

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
    }
});

export default class FoodListComponent extends Component {
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
                gl={rowData["GL"]} />
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
                <SearchComponent />
                <ListView
                    dataSource={dataSource}
                    renderRow={this._renderRow}>
                </ListView>
            </View>
        );
    }
}
FoodListComponent.contextTypes = {
    store: React.PropTypes.object
}

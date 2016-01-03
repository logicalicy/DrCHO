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
import SearchComponent from './SearchComponent';
import FoodComponent from './FoodComponent';
import utils from '../utils/utils';

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
            <FoodComponent rowID={rowID} foodName={rowData["Food name"]} />
        );
    }
    render() {
        const { store } = this.context;
        const searchTerm = store.getState().search.term;
        const filtered_foods = utils.filterFoodsBy(searchTerm);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(filtered_foods);
        return (
            <View style={styles.container}>
                <ToolbarAndroid style={styles.toolbar} title={'Dr CHO'} />
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

'use strict';

import React, {
    StyleSheet,
    TextInput,
    Component
} from 'react-native';

import { search } from '../actions/actions';

var styles = StyleSheet.create({
    textInput: {
        height: 50,
        paddingLeft: 10,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default class SearchComponent extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const props = this.props;
        const { store } = this.context;
        const state = store.getState();
        return (
            <TextInput style={styles.textInput}
                onChangeText={(text) =>
                    store.dispatch(search(text))
                }
                value={state.text}
                placeholder={'Search...'} />
        );
    }
}
SearchComponent.contextTypes = {
    store: React.PropTypes.object
}

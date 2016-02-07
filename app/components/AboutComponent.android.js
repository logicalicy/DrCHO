'use strict';

import React, {
    StyleSheet,
    Text,
    View,
    Component
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        padding: 10
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }
});


export default class AboutComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    {"About"}
                </Text>
                <Text>
                    {
                        "Find out the GI value, GI load and carbohydrate " +
                        "content of your favourite foods."
                    }
                </Text>
                <Text>
                    {
                        "Many thanks to MRC Human Nutrition Research for " +
                        "providing the Diogenes GI database. The original " +
                        "publication outlining the GI assignment " +
                        "methodology (Aston et al. Obesity Reviews 2010) is " +
                        "found here:"
                    }
                </Text>
                <Text style={styles.link}>
                    {
                        "http://onlinelibrary.wiley.com/doi/10.1111/" +
                        "j.1467-789X.2009.00690.x/full"
                    }
                </Text>
            </View>
        );
    }
}

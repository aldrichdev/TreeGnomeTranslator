import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={props.nav.openDrawer}>
                <Text style={styles.headerText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 75,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 16
    },
    menuButtonImage: {
        width: 25,
        height: 25
    }
});

export default Header;
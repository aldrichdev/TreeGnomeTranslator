import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.hamburgerContainer} 
                onPress={props.nav.openDrawer}>
                <Image style={styles.hamburgerMenuIcon} 
                    source={require('../assets/Hamburger_icon_white.png')}>
                </Image>
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.title}</Text>
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
    hamburgerContainer: {
        position: 'absolute',
        left: 15
    },
    hamburgerMenuIcon: {
        height: 30,
        width: 30,
    },
    headerText: {
        color: 'white',
        fontSize: 16
    }
});

export default Header;
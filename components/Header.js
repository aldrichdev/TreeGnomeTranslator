import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.hamburgerContainer} 
                onPress={props.nav.openDrawer}>
                <Image style={styles.hamburgerMenuIcon} 
                    source={require('../assets/Hamburger_icon.png')}>
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
        justifyContent: 'center',
        //flex: 1, // this breaks the header container but might be the right solution to get the hamburger on the left side...  no idea how to fix
        //flexDirection: 'column'
    },
    hamburgerContainer: {
        flexBasis: '30%',
        justifyContent: 'center',
    },
    hamburgerMenuIcon: {
        height: 30,
        width: 30,
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        //flexBasis: '70%',
        //height: 50
    },
    menuButtonImage: {
        width: 25,
        height: 25
    }
});

export default Header;
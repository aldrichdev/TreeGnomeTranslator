import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import colors from '../constants/colors';

const TranslationResult = props => {
    if (props.translationResult.length > 0) {
        return (
            <View style={styles.translationResult}>
                <Text>That translates to:</Text>
                <Text>{ props.translationResult }</Text>
                <View style={styles.button}>
                    <Button title="Copy" onPress={props.onPressCopy} color={colors.primary} />
                </View>
            </View>
        );
    } else {
        return (
            <View></View>
        );
    }
};

const styles = StyleSheet.create({
    translationResult: {
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 80,
        marginVertical: 5
    }
});

export default TranslationResult;
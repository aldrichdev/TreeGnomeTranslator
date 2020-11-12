import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colors from '../constants/colors';

const TranslationResult = props => {
    return (
        <View style={styles.translationResult}>
            <Text>{ props.heading }</Text>
            <Text selectable={true}>{ props.translationResult }</Text>
            <View style={styles.button}>
                <Button title={props.buttonTitle} onPress={props.onPressCopy} color={colors.primary}  />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    translationResult: {
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 100,
        marginVertical: 5
    }
});

export default TranslationResult;
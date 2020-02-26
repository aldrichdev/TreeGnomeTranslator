import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../constants/colors';

const LanguageTranslator = props => {
    return (
        <View>
            <Text style={styles.formTitle}>{props.formTitle}</Text>
            <TextInput style={styles.translateInput} placeholder={props.placeholder} 
            onChangeText={props.onChangeText} value={props.value}></TextInput>
            <View style={styles.buttonRow}>
                <View style={styles.button}>
                    <Button title="Translate" onPress={props.onPress} color={Colors.primary}></Button>
                </View>
                <View style={styles.button}>
                    <Button title="Clear" onPress={props.onReset} color={Colors.accent}></Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formTitle: {
        marginVertical: 15,
        fontSize: 16,
        textAlign: 'center'
      },
      translateInput: {
        height: 40,
        width: 300,
        borderColor: 'grey',
        borderWidth: 2
      },
      buttonRow: {
        flexDirection: 'row',
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 15
      },
      button: {
          width: 100
      }
});

export default LanguageTranslator;
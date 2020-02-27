import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Clipboard, Alert } from 'react-native';
import Colors from '../constants/colors';
import TranslationResult from '../components/TranslationResult';
import Card from '../components/Card';

const LanguageTranslator = props => {
    const copyPressHandler = () => {
        Clipboard.setString(props.translation);
        Alert.alert('Copied!');
    };

    let resultScreen = <Card><TranslationResult translationResult={props.translation} buttonTitle="Copy" heading="That translates to:" 
        onPressCopy={copyPressHandler} /></Card>;

    if (props.translation.length <= 0) {
        resultScreen = <Text></Text>;
    };
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
            { resultScreen }
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
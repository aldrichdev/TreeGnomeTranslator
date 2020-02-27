import React, { useState } from 'react';
import { View, Text, StyleSheet, Keyboard, Alert, ScrollView } from 'react-native';
import LanguageTranslator from '../components/LanguageTranslator';

const TranslateScreen = props => {
    var dict = {
        "A": ":v",
        "B": "x:",
        "C": "za",
        "D": "qe",
        "E": ":::",
        "F": "hb",
        "G": "qa",
        "H": "x",
        "I": "xa",
        "J": "ve",
        "K": "vo",
        "L": "va",
        "M": "ql",
        "N": "ha",
        "O": "ho",
        "P": "ni",
        "Q": "na",
        "R": "qi",
        "S": "sol",
        "T": "lat",
        "U": "z",
        "V": "::",
        "W": "h:",
        "X": ":i:",
        "Y": "im",
        "Z": "dim"
    };

    const [enteredEnglishPhrase, setEnteredEnglishPhrase] = useState('');
    const [enteredTreeGnomePhrase, setEnteredTreeGnomePhrase] = useState('');
    const [englishTranslation, setEnglishTranslation] = useState('');
    const [treeGnomeTranslation, setTreeGnomeTranslation] = useState('');

    const englishInputHandler = inputText => {
        setEnteredEnglishPhrase(inputText);
    };

    const treeGnomeInputHandler = inputText => {
        setEnteredTreeGnomePhrase(inputText);
    };

    const resetEnglishInputHandler = () => {
        setEnteredEnglishPhrase('');
    };

    const resetTreeGnomeInputHandler = () => {
        setEnteredTreeGnomePhrase('');
    }

    const englishTranslateHandler = () => {
        var tempTranslation = '';

        for (var i = 0; i < enteredEnglishPhrase.length; i++) {
            var currentChar = enteredEnglishPhrase.charAt(i);
            if (currentChar === ' ') {
                tempTranslation += ' ';
            } else {
                tempTranslation += dict[currentChar.toUpperCase()];
            };
        };

        setTreeGnomeTranslation(tempTranslation);
        setEnteredEnglishPhrase('');
        Keyboard.dismiss();
    };

    const treeGnomeTranslateHandler = () => {
        var tempInput = enteredTreeGnomePhrase;
        var tempTranslation = '';

        if (tempInput.length < 1) {
            Alert.alert("Invalid Input", "You must enter at least one character.");
            return;
        };

        while (tempInput.length > 0) {
            // Spaces should not be translated
            if (tempInput.substring(0, 1) === ' ') {
                tempTranslation += ' ';
                tempInput = tempInput.substr(1);
                continue;
            };

            // Handle certain "trap" phrases
            if (tempInput.substring(0, 3) === ':::') {
                tempTranslation += 'E';
                tempInput = tempInput.substr(3);
                continue;
            };

            // First case: 1 character TG letters
            var firstChar = tempInput.substring(0, 1).toLowerCase();
            var matchingKey = getKeyByValue(dict, firstChar);

            if (matchingKey !== undefined) {
                tempTranslation += matchingKey;
                tempInput = tempInput.substr(1);
            } else {
                // Second case: 2 character TG letters
                var firstTwoChars = tempInput.substring(0, 2).toLowerCase();
                matchingKey = getKeyByValue(dict, firstTwoChars);
            
                if (matchingKey !== undefined) {
                    tempTranslation += matchingKey;
                    tempInput = tempInput.substr(2);
                } else {
                    // Third case: 3 character TG letters
                    var firstThreeChars = tempInput.substring(0, 3).toLowerCase();
                    matchingKey = getKeyByValue(dict, firstThreeChars);
            
                    if (matchingKey !== undefined) {
                        tempTranslation += matchingKey;
                        tempInput = tempInput.substr(3);
                    } else {
                        Alert.alert("Translation Failed", "Your tree gnome phrase was not understood.");
                        break;
                    };
                };
            };
        };

        setEnglishTranslation(tempTranslation);
        setEnteredTreeGnomePhrase('');
        Keyboard.dismiss();
    };

    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    };

    return (
        <View>
            <ScrollView>
                <View style={styles.mainContentContainer}>
                    <Text style={styles.overview}>{props.heading}</Text>
                    <LanguageTranslator formTitle={props.englishFormTitle} placeholder={props.englishFormPlaceholder} value={enteredEnglishPhrase}
                        onChangeText={englishInputHandler} onPress={englishTranslateHandler} onReset={resetEnglishInputHandler} 
                        translation={treeGnomeTranslation} />
                    <LanguageTranslator formTitle={props.treeGnomeFormTitle} placeholder={props.treeGnomeFormPlaceholder} value={enteredTreeGnomePhrase}
                        onChangeText={treeGnomeInputHandler} onPress={treeGnomeTranslateHandler} onReset={resetTreeGnomeInputHandler}
                        translation={englishTranslation} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContentContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
      },
      overview: {
        color: 'black',
        textAlign: 'center'
      }
});

export default TranslateScreen;
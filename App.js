import React, { useState } from 'react';
import { StyleSheet, View, Text, Keyboard, Alert, Clipboard, ScrollView } from 'react-native';
import Header from './components/Header';
import TranslationResult from './components/TranslationResult';
import LanguageTranslator from './components/LanguageTranslator';

const App = () => {
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
  const [translation, setTranslation] = useState('');

  const englishInputHandler = inputText => {
    console.log(inputText);
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
        tempTranslation += ' '
      } else {
        tempTranslation += dict[currentChar.toUpperCase()];
      };
    }

    setTranslation(tempTranslation);
    setEnteredEnglishPhrase('');
    Keyboard.dismiss();
  };

  const treeGnomeTranslateHandler = () => {
    var tempInput = enteredTreeGnomePhrase;
    var tempTranslation = '';

    if (tempInput.length < 2) {
      Alert.alert("Invalid Input", "You must enter a gnome phrase of 2 characters or more.");
      return;
    };

    while (tempInput.length > 0) {
      var firstTwoChars = tempInput.substring(0, 2).toLowerCase();
      var matchingKey = getKeyByValue(dict, firstTwoChars);
  
      if (matchingKey !== undefined) {
        tempTranslation += matchingKey;
        tempInput = tempInput.substr(2);
      } else {
        var firstThreeChars = tempInput.substring(0, 3).toLowerCase();
        matchingKey = getKeyByValue(dict, firstThreeChars);
  
        if (matchingKey !== undefined) {
          tempTranslation += matchingKey;
          tempInput = tempInput.substr(3);
        } else {
          Alert.alert("Translation Failed", "Your tree gnome phrase was not understood.");
        };
      };
    };

    setTranslation(tempTranslation);
    setEnteredTreeGnomePhrase('');
    Keyboard.dismiss();
  };

  const copyPressHandler = () => {
    console.log('Setting clipboard to ' + translation);
    Clipboard.setString(translation);
    Alert.alert('Copied!');
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  let resultScreen = <TranslationResult translationResult={translation} buttonTitle="Copy" heading="That translates to:" 
    onPressCopy={copyPressHandler} />;

  if (translation.length <= 0) {
    resultScreen = <Text></Text>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Tree Gnome Translator"></Header>
      <ScrollView>
        <View style={styles.mainContentContainer}>
          <Text style={styles.overview}>This translator makes it easy to convert English to Tree Gnome and vice versa.</Text>
          <LanguageTranslator formTitle="English to Tree Gnome" placeholder="Enter english phrase here" value={enteredEnglishPhrase}
            onChangeText={englishInputHandler} onPress={englishTranslateHandler} onReset={resetEnglishInputHandler} />
          <LanguageTranslator formTitle="Tree Gnome to English" placeholder="Enter tree gnome phrase here" value={enteredTreeGnomePhrase}
            onChangeText={treeGnomeInputHandler} onPress={treeGnomeTranslateHandler} onReset={resetTreeGnomeInputHandler} />
        </View>
        { resultScreen }
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
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

export default App;
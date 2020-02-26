import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Keyboard, Alert, Clipboard } from 'react-native';
import Header from './components/Header';
import Colors from './constants/colors';
import TranslationResult from './components/TranslationResult';

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

  const [enteredValue, setEnteredValue] = useState('');
  const [translation, setTranslation] = useState('');

  const englishInputHandler = inputText => {
    console.log(inputText);
    setEnteredValue(inputText);
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const englishTranslateHandler = () => {
    var tempTranslation = '';

    for (var i = 0; i < enteredValue.length; i++) {
      var currentChar = enteredValue.charAt(i);
      if (currentChar === ' ') {
        tempTranslation += ' '
      } else {
        tempTranslation += dict[currentChar.toUpperCase()];
      };
    }

    console.log(tempTranslation);
    setTranslation(tempTranslation);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  const copyPressHandler = () => {
    console.log('Setting clipboard to ' + translation);
    Clipboard.setString(translation);
  };

  let resultScreen = <TranslationResult translationResult={translation} onPressCopy={copyPressHandler} />;

  if (translation.length <= 0) {
    resultScreen = <Text></Text>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Tree Gnome Translator"></Header>
      <View style={styles.mainContentContainer}>
        <Text style={styles.overview}>This translator makes it easy to convert English to Tree Gnome and vice versa.</Text>
        <Text style={styles.formTitle}>English to Tree Gnome</Text>
        <TextInput style={styles.translateInput} placeholder="Enter english phrase here" 
          onChangeText={englishInputHandler} value={enteredValue}></TextInput>
        <View style={styles.buttonRow}>
          <View style={styles.button}>
              <Button title="Translate" onPress={englishTranslateHandler} color={Colors.primary}></Button>
          </View>
          <View style={styles.button}>
              <Button title="Clear" onPress={resetInputHandler} color={Colors.accent}></Button>
          </View>
        </View>
      </View>
      { resultScreen }
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
  },
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
  },
});

export default App;

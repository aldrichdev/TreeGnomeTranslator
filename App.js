import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import TranslateScreen from './screens/TranslateScreen';
import Navigator from './navigation/Navigator';

const App = () => {
  return (<Navigator />);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  }
});

export default App;
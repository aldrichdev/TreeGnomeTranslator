/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import TranslateScreen from './screens/TranslateScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
      <SafeAreaView>
          <HomeScreen />
      </SafeAreaView>
  );
};

export default App;
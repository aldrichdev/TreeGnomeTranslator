import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import TranslateScreen from './screens/TranslateScreen';

const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Tree Gnome Translator"></Header>
      <TranslateScreen 
        heading="This translator makes it easy to convert English to Tree Gnome and vice versa." 
        englishFormTitle="English to Tree Gnome"
        englishFormPlaceholder = "Enter english phrase here" 
        treeGnomeFormTitle="Tree Gnome to English"
        treeGnomeFormPlaceholder="Enter tree gnome phrase here" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  }
});

export default App;
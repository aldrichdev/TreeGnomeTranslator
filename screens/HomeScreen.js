import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import TranslateScreen from '../screens/TranslateScreen';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <Header title="Tree Gnome Translator" nav={navigation}></Header>
            <SafeAreaView>
              <TranslateScreen
                  heading="This translator makes it easy to convert English to Tree Gnome and vice versa."
                  englishFormTitle="English to Tree Gnome"
                  englishFormPlaceholder = "Enter english phrase here"
                  treeGnomeFormTitle="Tree Gnome to English"
                  treeGnomeFormPlaceholder="Enter tree gnome phrase here" />
            </SafeAreaView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1 // This makes everything invisible unless they have a static height OR flex: 1 too. Why did we add it in the first place?
    alignItems: 'center'
  }
});

export default HomeScreen;
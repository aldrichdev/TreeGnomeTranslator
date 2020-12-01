import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';

const DictionaryScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Header title="Dictionary" nav={navigation}></Header>
            <Text>This is the Dictionary screen.</Text>
            <Button onPress={() => navigation.goBack()} title="Go back" />
        </SafeAreaView>
    );
};

export default DictionaryScreen;
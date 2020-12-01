import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';

const TestScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Header title="Test" nav={navigation}></Header>
            <Text>This is the test screen.</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default TestScreen;
import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

const TestScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>This is the test screen.</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default TestScreen;
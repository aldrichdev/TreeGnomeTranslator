import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Dictionary from '../constants/dictionary';

const DictionaryScreen = ({navigation}) => {
    const renderRow = (datum) => {
        console.log(datum);
        return (
            <View style={styles.tableRow}>
                <View style={styles.tableCell}>
                    <Text style={styles.tableCellText}>{ Object.keys(datum)[0] }</Text>
                </View>
                <View style={styles.tableCell}>
                    <Text style={styles.tableCellText}>{ Object.values(datum)[0] }</Text>
                </View>
            </View>
        )
    }
    const data = [1, 2, 3, 4, 5];
    return (
        <SafeAreaView>
            <Header title="Dictionary" nav={navigation}></Header>
            <Text>This is the Dictionary screen.</Text>
            {
                Dictionary.dict.map((datum) => { 
                    return renderRow(datum);
                })
            }
            <Button onPress={() => navigation.goBack()} title="Go back" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    tableRow: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15
    },
    tableCell: {
        flexBasis: '50%',
        alignSelf: 'stretch'
    },
    tableCellText: {
        textAlign: 'center'
    }
});

export default DictionaryScreen;
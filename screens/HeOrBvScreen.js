import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HeOrBvScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Header title="HE or BV?" nav={navigation}></Header>
            <View style={styles.textContainer}>
                <Text style={styles.paragraph}>You may have noticed an issue with this translator. Notice what happens when you try to translate the following tree gnome phrase (just one example).</Text>
                <Text style={[styles.paragraph, styles.treeGnomePhrase]} selectable>hox:::xahozsol</Text>
                <Text style={styles.paragraph}>This happens because the tree gnome language, as defined by the Gower brothers who made Runescape, has a critical flaw: there are two letters that when combined, have the EXACT same translation as two other characters when combined. The problem lies with the following tree gnome phrase.</Text>
                <Text style={[styles.paragraph, styles.treeGnomePhrase]} selectable>x:::</Text>
                <Text style={styles.paragraph}>Try translating that phrase to English just by using the dictionary. It's impossible, because it could be HE or it could be BV, as both create three colons (: symbol).</Text>
                <Text style={styles.paragraph}>This is the HE or BV dilemma.</Text>
            </View>
            <Button onPress={() => navigation.goBack()} title="Go back" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paragraph: {
        color: 'black',
        textAlign: 'center',
        paddingBottom: 10
    },
    treeGnomePhrase: {
        fontFamily: 'courier'
    }
});

export default HeOrBvScreen;
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Header from '../components/Header';
import TranslateScreen from '../screens/TranslateScreen';

const HomeScreen = props => {
    console.log(props);
    return (
        <View style={styles.screen}>
            <Header title="Tree Gnome Translator"></Header>
            <TranslateScreen 
                heading="This translator makes it easy to convert English to Tree Gnome and vice versa." 
                englishFormTitle="English to Tree Gnome"
                englishFormPlaceholder = "Enter english phrase here" 
                treeGnomeFormTitle="Tree Gnome to English"
                treeGnomeFormPlaceholder="Enter tree gnome phrase here" />
            <Button title="Go to Test Screen" onPress={() => { props.navigation.navigate('Test'); }} />
        </View>
    );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  }
});

export default HomeScreen;
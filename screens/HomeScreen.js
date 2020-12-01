import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/Header';
import TranslateScreen from '../screens/TranslateScreen';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView>
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

export default HomeScreen;
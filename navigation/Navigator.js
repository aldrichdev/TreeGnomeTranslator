import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';

const Navigator = createStackNavigator({
    Home: HomeScreen,
    Test: TestScreen
});

export default createAppContainer(Navigator);

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Navigator = props => {
//     return (
//         <View><Text>navigator</Text></View>
//     );
// };

// const styles = StyleSheet.create({

// });

// export default Navigator;
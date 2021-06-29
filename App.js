import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return (
        <ScanScreen/>
  );
  }
}

// const TabNavigator = createBottomTabNavigator({
//   Transaction: { screen: BookTransaction },
//   Search: { screen: SearchScreen },
// })

// const AppNavigator = createAppContainer(TabNavigator)

// const styles = StyleSheet.create({
// });

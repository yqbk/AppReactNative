import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';


export default class TestScreen extends React.Component {

  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <View>
        <Text>Chat with test</Text>

        <Button
          onPress={() => this.props.navigation.navigate('TabOneScreenOne')}
          title="Go to screen one"
        />

      </View>
    );
  }
}

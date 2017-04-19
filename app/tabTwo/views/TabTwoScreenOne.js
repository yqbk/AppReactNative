
import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
export default class TabTwoScreenOne extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{ 'Tab Two Screen One' }</Text>


        <Button
          onPress={() => this.props.navigation.navigate('TestScreen')}
          title="Chat with Lucy"
        />

      </View>
    )
  }
}

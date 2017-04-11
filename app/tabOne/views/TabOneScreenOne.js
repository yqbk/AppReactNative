'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, Button } from 'react-native'
export default class TabOneScreenOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'#E1F5FE',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab One Screen One' }</Text>

        <Image
          onPress={ () => this.props.navigation.navigate('TabOneScreenTwo') }
          style={{width: 50, height: 50, margin: 20}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />

        <Button
          onPress={() => this.props.navigation.navigate('TestScreen')}
          title="Chat with Lucy"
        />

      </View>
    )
  }
}

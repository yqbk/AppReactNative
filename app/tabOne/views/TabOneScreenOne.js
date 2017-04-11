'use strict'
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native'

import {
  Kaede,
  Hoshi,
  Jiro,
  Isao,
  Madoka,
  Akira,
  Hideo,
  Kohana,
  Makiko,
  Sae,
  Fumi,
} from 'react-native-textinput-effects';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


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

          <View style={{
            height: 100,
            width:350
          }}>
            <Sae
              label={'Email Address'}
              iconClass={FontAwesomeIcon}
              iconName={'pencil'}
              iconColor={'blue'}
            />
          </View>

          <Button
            onPress={() => this.props.navigation.navigate('TestScreen')}
            title="Chat with Lucy"
          />




        </View>





    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});


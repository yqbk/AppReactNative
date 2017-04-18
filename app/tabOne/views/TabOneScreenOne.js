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

import MyInput from '../../myInput'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export default class TabOneScreenOne extends React.Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this)

    this.state = {
      text: 'Useless Placeholder',
      animation: false
    };
  }

  _onPress() {
    if (!this.state.animation) {
      this.setState({animation:true})
      this.props.navigation.navigate('TestScreen')
      this.setState({animation:false})
    } else {
      console.log("prevent double clicking buton")
    }
  }

  render(){
    return(

        <View style={{
          flex:1,
          backgroundColor:'white',
          alignItems:'center',
          justifyContent:'center',
        }}>

          <Text>{ 'Tab One Screen One' }</Text>

          <View style={{
            height: 100,
            width: 350,
            backgroundColor: 'transparent',

          }}>

            <MyInput
              label={'test'}
            />

          </View>

          <Image
            onPress={ () => this.props.navigation.navigate('TabOneScreenTwo') }
            style={{width: 50, height: 50, margin: 20}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />



          {/*<View style={{*/}
            {/*height: 200,*/}
            {/*width:350*/}
          {/*}}>*/}
            {/*<Sae*/}
              {/*label={'Email Address'}*/}
              {/*iconClass={FontAwesomeIcon}*/}
              {/*inputStyle={{*/}
                {/*color: 'black'*/}
              {/*}}*/}
            {/*/>*/}

            {/*<Isao*/}
              {/*label={'First Name'}*/}
              {/*// this is applied as active border and label color*/}
              {/*activeColor={'#da7071'}*/}
              {/*// this is applied as passive border and label color*/}
              {/*passiveColor={'#dadada'}*/}
            {/*/>*/}

          {/*</View>*/}

          <Button
            onPress={() => this._onPress()}
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


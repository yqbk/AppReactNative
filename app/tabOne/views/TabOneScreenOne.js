import React from 'react'
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native'
import Video from 'react-native-video'

// import MyInput from '../../myInput'
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export default class TabOneScreenOne extends React.Component {
  constructor(props) {
    super(props)
    this._onPress = this._onPress.bind(this)

    this.state = {
      text: 'Useless Placeholder',
      animation: false,
    }
  }

  _onPress() {
    if (!this.state.animation) {
      this.setState({ animation: true })
      this.props.navigation.navigate('TestScreen')
      this.setState({ animation: false })
    } else {
      console.log('prevent double clicking buton')
    }
  }

  render() {
    return (

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        <Text>{ 'Tab One Screen One' }</Text>

        <Video
          source={require('../../screens/test/img/background.mp4')}
          style={styles.backgroundVideo}
          rate={1} volume={1} muted
          resizeMode="cover" repeat
          key="video"
        />

        <Image
          onPress={() => this.props.navigation.navigate('TabOneScreenTwo')}
          style={{ width: 50, height: 50, margin: 20 }}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

})

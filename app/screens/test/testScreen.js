import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  Image,
} from 'react-native'

import Video from 'react-native-video'
import styles from './style'

const GRADIENT = require('./img/gradient.png')


export default class TestScreen extends React.Component {
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    return (


      <View style={styles.backgroundVideo}>
        <Video
          source={require('./img/background.mp4')}
          style={styles.backgroundVideo}
          rate={1} volume={1} muted
          resizeMode="cover" repeat
          key="video"
        />
        <Image source={GRADIENT} style={styles.background}>

          <View style={styles.contentContainer}>
            <Text style={styles.text}>Book your favourite classes or find new ones tailored to you</Text>
          </View>

          <View style={styles.actionContainer}>
            {/* <View style={styles.actionLinkContainer}>*/}
            {/* <ActionLink text={continueAsGuestText} onPress={() => skipLogin()} style={{color: 'white'}}/>*/}
            {/* </View>*/}
            <View style={styles.buttonContainer}>
              {/* <Button state={Button.state.default}*/}
              {/* appearance={Button.appearance.primary}*/}
              {/* text={memberLoginText}*/}
              {/* iconFamily={Button.iconFamily.login}*/}
              {/* onPress={() => navigation.navigate('Login')}/>*/}
              <Button
                onPress={() => this.props.navigation.navigate('TabOneScreenOne')}
                title="Go to screen one"
              />

            </View>
          </View>
        </Image>
      </View>

      // <View>
      //   <Text>Chat with test</Text>
      //
      //   <Video
      //     source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      //     style={styles.backgroundVideo}
      //     key="video"
      //   />
      //
      //   <Button
      //     onPress={() => this.props.navigation.navigate('TabOneScreenOne')}
      //     title="Go to screen one"
      //   />
      //
      // </View>
    )
  }
}

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
} from 'react-native';

import Video from 'react-native-video';
import styles from './style';

const GRADIENT = require('./img/gradient.png');


export default class TestScreen extends React.Component {
    render() {
    // The screen's current route is passed in to `props.navigation.state`:
        return (


            <View
              style={{
                  flex: 1,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
            >
                <Text>Chat with test</Text>

                <Video
                  source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                  style={styles.backgroundVideo}
                  rate={1} volume={1} muted
                  resizeMode="cover" repeat
                  key="video"
                />

                <Button
                  style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate('TabOneScreenOne')}
                  title="Go to screen one"
                />

            </View>
        );
    }
}

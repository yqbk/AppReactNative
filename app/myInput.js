import React, { PropTypes } from 'react'
import {
  Animated,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'

import BaseInput from './baseInput'

const LABEL_HEIGHT = 24
const PADDING = 0

export default class MyInput extends BaseInput {

  static propTyped = {
    height: PropTypes.number,
    animationDuration: PropTypes.number,
  }

  static defualtProps = {
    height: 48,
    animationDuration: 300,
  }

  render() {
    const {
      label,
      style: containerStyle,
      height: inputHeight,
      inputStyle,
      labelStyle,
    } = this.props

    const {
      width,
      focusedAnim,
      value,
    } = this.state

    return (


      <View
        style={{
          height: 60,
          width: 350,
          borderBottomColor: this.state.lineColor,
          borderBottomWidth: 1,
        }}
      >


        <TouchableWithoutFeedback onPress={() => { console.log('test') }} onPressOut={() => { debugger }}>
          <Animated.View
            style={{
              position: 'absolute',
              bottom: focusedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, LABEL_HEIGHT + PADDING],
              }),
            }}
          >
            <Animated.Text
              style={[styles.label, labelStyle, {
                fontSize: focusedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [18, 12],
                }),
              }]}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>


        <TextInput
          ref="input"
          {...this.props}
        // style={[styles.textInput, inputStyle, {
        //   width,
        //   height: inputHeight,
        // }]}
          style={{
            height: 50,
            width: 350,
            backgroundColor: 'transparent',
          }}
          value={value}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onFocus={this._onFocus}
          underlineColorAndroid={'transparent'}
        />


        {/* bottom border */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: 2,
            width: focusedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),
            backgroundColor: 'red',
          }}
        />

      </View>


      // <View>
      //
      //   <TextInput
      //     ref="input"
      //     {...this.props}
      //     value={value}
      //     onBlur={this._onBlur}
      //     onChange={this._onChange}
      //     onFocus={this._onFocus}
      //     underlineColorAndroid={'transparent'}
      //   />
      //
      // </View>

    )
  }


}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  label: {
    backgroundColor: 'transparent',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgb(157,157,157)',
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: 'pink',
  },
  textInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingTop: PADDING / 2,
    paddingLeft: 0,
    fontSize: 18,
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: 'pink',
  },
})

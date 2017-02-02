/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'

export default class Button extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return Platform.OS === 'ios'?(
      <TouchableHighlight {...this.props}>{this.props.children}</TouchableHighlight>
    ):(
      <View {...this.props}><TouchableNativeFeedback onPress={this.props.onPress}>{this.props.children}</TouchableNativeFeedback></View>
    )
  }
}

/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableHighlight,
  AlertIOS,
  TouchableNativeFeedback
} from 'react-native'
import px2dp from '../util'
import Button from './Button'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

let {width, height} = Dimensions.get('window')
const itemHeight = px2dp(45)

const Font = {
  Ionicons,
  FontAwesome
}
class ItemButton extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Button style={{marginTop: this.props.first?10:0}} onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={{color: this.props.color || "#f00"}}>{this.props.name}</Text>
        </View>
      </Button>
    )
  }
}

export default class Item extends Component {
  constructor(props){
    super(props)
  }
  static propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    subName: PropTypes.string,
    color: PropTypes.string,
    first: PropTypes.bool,
    avatar: PropTypes.number,
    disable: PropTypes.bool,
    iconSize: PropTypes.number,
    font: PropTypes.string,
    onPress: PropTypes.func
  }
  _render(){
    let {icon, iconSize, name, subName, color, first, avatar, disable, font} = this.props
    font = font||"Ionicons"
    const Icon = Font[font]
    return (
      <View style={styles.listItem}>
        {icon?(<Icon name={icon} size={px2dp(iconSize||20)} style={{width: 22, marginRight:5, textAlign:"center"}} color={color || "#4da6f0"} />):null}
        <View style={[styles.listInfo, {borderTopWidth: !first?1:0}]}>
          <View style={{flex: 1}}><Text>{name}</Text></View>
          <View style={styles.listInfoRight}>
            {subName?(<Text style={{color: "#aaa", fontSize:12}}>{subName}</Text>):null}
            {avatar?(<Image source={avatar} style={{width: 36, height: 36, resizeMode: "cover", overflow:"hidden", borderRadius: 18}}/>):null}
            {disable?null:(<Font.Ionicons style={{marginLeft: 10}} name="ios-arrow-forward-outline" size={px2dp(18)} color="#bbb" />)}
          </View>
        </View>
      </View>
    )
  }
  render(){
    let { onPress, first, disable } = this.props
    onPress = onPress || (() => {})
    return disable?
      this._render():
      <Button style={{marginTop: first?10:0}} onPress={onPress}>{this._render()}</Button>
  }
}
Item.Button = ItemButton
const styles = StyleSheet.create({
  listItem: {
    height: itemHeight,
    paddingLeft: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    height: itemHeight,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  listInfo: {
    height: itemHeight,
    flex: 1,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: "#f5f5f5"
  },
  listInfoRight: {
    flexDirection: "row",
    alignItems: "center"
  }
})

/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
let {width, height} = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'

export default class MenuBar extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let { active } = this.props
    return (
      <View style={styles.menuBar}>
        {
          ["外卖|ios-cart-outline","发现|ios-compass-outline","订单|ios-list-box-outline","我的|ios-contact-outline"].map((item, i) => {
            let m = item.split("|")
            return (
              <TouchableOpacity style={styles.menuItem} key={i}>
                <Icon name={m[1]} size={22} color={i==active?"#3496f0":"#666"} />
                <Text style={[{fontSize: 9}, i==active?styles.active:{}]}>{m[0]}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuBar: {
    flex: 1,
    height: 90,
    flexDirection: "row",
    backgroundColor: "#fafafa"
  },
  menuItem: {
    justifyContent: "center",
    alignItems: "center",
    width: width/4
  },
  active: {
    color: "#3496f0"
  }
})

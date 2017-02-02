/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
  View,
  Text,
  Easing,
  Animated,
  Platform,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { BlurView } from 'react-native-blur'
import px2dp from '../util'
let {width, height} = Dimensions.get('window')

export default class ShopBar extends Component{
    constructor(props){
      super(props)
      this.state = {
        scale: new Animated.Value(0)
      }
    }
    runAnimate(){
      this.state.scale.setValue(0)
      Animated.timing(this.state.scale, {
          toValue: 2,
          duration: 320,
          easing: Easing.elastic(3)
      }).start()
    }
    render(){
      let { list, lens } = this.props
      return (
        <View style={styles.cartView}>
          <View style={styles.cartBar}>

              <View style={{flex: 1, justifyContent:"center", paddingLeft: px2dp(70)}}>
                {
                  !lens.maxPrice?
                    (<Text style={{color: "#999", fontWeight: "bold"}}>{"购物车为空"}</Text>):
                    [<Text key={0} style={{color: "#fff", fontWeight: "bold", fontSize: px2dp(16)}}>{`￥${lens.maxPrice}`}</Text>,
                    <Text key={1} style={{color: "#fff", fontSize: px2dp(10)}}>{"另加7元配送费"}</Text>]
                }
              </View>
              {!lens.maxPrice?
                <Text style={styles.price}>{"￥6元起"}</Text>:
                <Text style={[styles.price, {backgroundColor:"#00c257", color:"#fff"}]}>{"去结算"}</Text>}

          </View>
          <Animated.View style={[styles.iconWrap, {
            transform: [
              {scale: this.state.scale.interpolate({
                inputRange: [0, 1, 2],outputRange:[1, 0.8, 1]
              })}
            ]
          }]}>
            <View style={[styles.iconView, lens.length?{backgroundColor:"#3190e8"}:null]}>
              <Icon name="ios-cart" size={px2dp(25)} color={lens.length?"#fff":"#666"} />
            </View>
            <View style={[styles.count, {
              transform: [{translateX: lens.length?0:-9999}]
            }]}>
              <Text style={{fontSize:px2dp(10), color: "#fff"}}>{lens.length}</Text>
            </View>
          </Animated.View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  cartView: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    width,
    height: px2dp(46) + 10
  },
  count: {
    backgroundColor: "#f00",
    height: px2dp(12),
    borderRadius: 5,
    overflow: "hidden",
    paddingHorizontal: 4,
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0
  },
  iconWrap: {
    position: "absolute",
    left: 16,
    top: 0,
    width: px2dp(46),
    height: px2dp(46)
  },
  iconView: {
    backgroundColor: "#333",
    overflow:"hidden",
    borderRadius: px2dp(23),
    width: px2dp(46),
    height: px2dp(46),
    borderWidth: 4,
    borderColor: "#555",
    alignItems: "center",
    justifyContent: "center"
  },
  cartBar: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    width,
    height: px2dp(46),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,.9)"
  },
  price: {
    color: "#999",
    fontWeight: "bold",
    fontSize: px2dp(16),
    paddingHorizontal: 20,
    height:px2dp(46),
    lineHeight: Platform.OS === 'ios'?px2dp(46):32,
    backgroundColor:"rgba(255,255,255,.1)"
  },
  blur: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
})

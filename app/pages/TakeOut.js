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
  Platform,
  ScrollView,
  AlertIOS,
  RefreshControl,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'

import px2dp from '../util'
import data from '../data'

class Item extends Component {
  constructor(props){
      super(props)
  }
  static propTypes = {
      title: PropTypes.string.isRequired,
      logo: PropTypes.number,
      state: PropTypes.string,
      time: PropTypes.string,
      info: PropTypes.string,
      price: PropTypes.string
  }
  render(){
    const { title, logo, state, time, info, price } = this.props
    let render = (
      <View style={styles.item}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.info}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: px2dp(14), color:"#333"}}>{title}</Text>
            <Text style={{fontSize: px2dp(13), color:"#333"}}>{state}</Text>
          </View>
          <View style={{paddingBottom: 8,borderBottomWidth: 1,borderBottomColor: "#f9f9f9"}}>
            <Text style={{fontSize: px2dp(12), color:"#bbb",marginTop: 5}}>{time}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 16}}>
            <Text style={{fontSize: px2dp(13), color:"#aaa"}}>{info}</Text>
            <Text style={{fontSize: px2dp(13), color:"#333"}}>{price}</Text>
          </View>
        </View>
      </View>
    )
    return (
      Platform.OS === 'ios'?(
        <TouchableHighlight style={{marginTop: 10}} onPress={() => {}}>{render}</TouchableHighlight>
      ):(
        <View style={{marginTop: 10}}><TouchableNativeFeedback onPress={() => {}}>{render}</TouchableNativeFeedback></View>
      )
    )
  }
}
export default class TakeOut extends Component {
  constructor(props){
      super(props)
      this.state = {
        data: [],
        isRefreshing: false
      }
  }
  componentDidMount(){
    this._onRefresh()
  }
  _onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        data: data.orderData,
        isRefreshing: false
      })
    }, 1500)
  }
  render(){
    return (
      <ScrollView
        style={{backgroundColor: "#f3f3f3"}}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#bbb"
            colors={['#ddd', '#0398ff']}
            progressBackgroundColor="#ffffff"
          />
        }
      >
        <Text style={{textAlign: "center", color: "#999", fontSize: px2dp(12), paddingTop: 20}}>{"近期订单"}</Text>
        {
          this.state.data.map((item, i) => {
            return <Item key={i} {...item} />
          })
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingTop: 16
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 8,
    resizeMode: "cover",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f5f5f5"
  },
  info: {
    paddingRight: 16,
    flex: 1
  }
})

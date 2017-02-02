/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'
import NavBar from '../component/NavBar'
import Item from '../component/Item'
import UserProfile from './UserProfile'
//FontAwesome
export default class Setting extends Component {
  constructor(props){
      super(props)
  }
  back(){
    this.props.navigator.pop()
  }
  goProfile(){
    this.props.navigator.push({
        component: UserProfile,
        args: {}
    });
  }
  render(){
    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <NavBar
          title="设置"
          leftIcon="ios-arrow-back"
          leftPress={this.back.bind(this)}
        />
        <ScrollView>
          <Item name="账户安全" first={true} onPress={this.goProfile.bind(this)}/>
          <Item name="通用"/>
          <Item name="关于饿了么" first={true}/>
          <Item.Button name="退出登录" first={true}/>
        </ScrollView>
      </View>
    )
  }
}

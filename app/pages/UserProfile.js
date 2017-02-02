/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import NavBar from '../component/NavBar'
import Item from '../component/Item'
//FontAwesome
export default class UserProfile extends Component {
  constructor(props){
      super(props)
  }
  back(){
    this.props.navigator.pop()
  }
  render(){
    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <NavBar
          title="账户信息"
          leftIcon="ios-arrow-back"
          leftPress={this.back.bind(this)}
        />
        <ScrollView>
          <Item name="头像" avatar={2} first={true}/>
          <Item name="用户名" disable={true} subName="_平行时空"/>
          <Text style={styles.title}>{"账号绑定"}</Text>
          <Item name="手机" font="FontAwesome" icon="mobile" subName="135****0418"/>
          <Item name="微信" color="#1bce4a" iconSize={15} font="FontAwesome" icon="wechat" subName="已绑定"/>
          <Item name="QQ" color="#ce3c1b" iconSize={15} font="FontAwesome" icon="qq" subName="未绑定"/>
          <Item name="微博" color="#fa7d3c" iconSize={16} font="FontAwesome" icon="weibo" subName="未绑定"/>
          <Text style={styles.title}>{"安全设置"}</Text>
          <Item name="登录密码" subName="未绑定"/>
          <Item name="支付密码" subName="未绑定"/>
          <Item name="小额免密支付"/>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: "#666"
  }
})

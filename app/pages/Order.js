/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import NavBar from '../component/NavBar'
import TakeOut from './TakeOut'
import Breakfast from './Breakfast'
import TabViewBar from '../component/TabViewBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'

export default class Order extends Component {
  constructor(props){
      super(props)
  }
  render(){
    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <NavBar title="订单"/>
        <ScrollableTabView renderTabBar={() => <TabViewBar/>}>
          <TakeOut tabLabel="外卖"/>
          <Breakfast tabLabel="早餐"/>
        </ScrollableTabView>
      </View>
    )
  }
}

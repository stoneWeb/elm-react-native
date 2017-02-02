'use strict';

import React, { Component } from 'react'
import { Navigator, View } from 'react-native'
import TabView from './TabView'
import EditAddress from '../pages/EditAddress'
import SplashScreen from 'react-native-splash-screen'

export default class Wrapper extends Component{
    constructor(props){
      super(props)
      //SplashScreen.hide()
    }
    render(){
        return(
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TabView navigator={this.props.navigator}/>
          </View>
        )
    }
}
//<TabView navigator={this.props.navigator}/>

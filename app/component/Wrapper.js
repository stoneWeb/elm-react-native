/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import { Navigator, View } from 'react-native'
import TabView from './TabView'

export default class Wrapper extends Component{
    constructor(props){
      super(props)
    }
    render(){
        return(
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TabView navigator={this.props.navigator}/>
          </View>
        )
    }
}

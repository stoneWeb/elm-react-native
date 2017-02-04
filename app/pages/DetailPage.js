/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Animated,
  AlertIOS,
  Platform,
  findNodeHandle,
  Image,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Parabolic from 'react-native-parabolic'
import px2dp from '../util'
import LocalImg from '../images'
import data from '../data'
import NavBar from '../component/NavBar'
import TabViewBar from '../component/TabViewBar'
import GoodsList from '../pages/GoodsList'
import Comments from '../pages/Comments'
import ShopBar from '../component/ShopBar'
import { BlurView } from 'react-native-blur'
let {width, height} = Dimensions.get('window')

export default class DetailPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      scrollY: 0,
      titleOpacity: 0,
      activeOpacity: 1,
      headOpacity: 1,
      addBtnY: -9999,
      animateBtnX: 0,
      animateBtnY: 0,
      runBtn: new Animated.Value(0),
      selected: [],
      lens: {},
      bgY: 0,
      bgScale: 1,
      viewRef: 0,
      b: {},
      goods: data.goods,
      data: {
        name: "田老师红烧肉（知春路店）",
        isBrand: true,
        logo: 27,
        scores: 3.5,
        sale: 4013,
        bao: true,
        piao: true,
        ontime: true,
        fengniao: true,
        startPay: "￥20起送",
        deliverPay: "配送费￥4",
        evOnePay: "￥21/人",
        journey: "250m",
        time: "35分钟",
        bulletin: "公告：春节前，配送紧张，可能延时推送，请客户谅解",
        activities: [
          {key: "减", text: "满20减2，满30减3，满40减4（不与美食活动同享）"},
          {key: "特", text: "双人餐特惠"}
        ]
      }
    }
  }
  componentDidMount(){
    let marginTop = 18+px2dp(80+this.state.data.activities.length*18)
    let { scrollY } = this.refs.goodsList.state
    let activeHeight = px2dp(18)*2
    this.setState({
      activeOpacity: scrollY.interpolate({inputRange: [0, activeHeight],outputRange: [1, 0]}),
      bgScale: scrollY.interpolate({inputRange: [ -marginTop, 0, marginTop],outputRange: [2, 1, 1]}),
      headOpacity: scrollY.interpolate({inputRange: [0, activeHeight, marginTop],outputRange: [1, 1, 0]}),
      titleOpacity: scrollY.interpolate({inputRange: [0, marginTop-10, marginTop],outputRange: [0, 0, 1]}),
      scrollY: scrollY.interpolate({inputRange: [0, marginTop, marginTop],outputRange: [0, -marginTop, -marginTop]}),
      bgY: scrollY.interpolate({inputRange: [ -marginTop, 0, marginTop, marginTop],outputRange: [marginTop/2, 0, -marginTop/3, -marginTop/3]})
    })
  }
  back(){
    this.props.navigator.pop()
  }
  onAdd(data){
    let { pos } = data
    this.setState({
      addBtnY: data.y
    })
    this.refs["parabolic"].run(pos, data)
  }
  parabolicEnd(data){
    let { selected, lens } = this.state
    let num = (lens[data.data.key]||0)+1
    let price = lens.maxPrice || 0
    let length = lens.length || 0
    lens[data.data.key] = num
    lens.maxPrice = price+data.data.price
    lens.length = length + 1
    selected.push(data.data)
    this.state.runBtn.setValue(0)
    this.setState({ addBtnY: -9999, selected, lens})
    this.refs.shopbar.runAnimate()
  }
  renderGoods(){
    let marginTop = 18+px2dp(80+this.state.data.activities.length*18)
    let MAIN_HEIGHT = height - NavBar.topbarHeight
    let CONTENT_HEIGHT = MAIN_HEIGHT - marginTop
    let style = {
      transform: [{
        translateY: this.state.scrollY
      }]
    }
    if(Platform.OS == "android"){
      style.height = height + 80
    }

    return (
      <Animated.View style={[styles.topView, style]}>
        <View style={{
          backgroundColor: "#f3f3f3",
          height: MAIN_HEIGHT,
          width,
          marginTop
        }}>
          <ScrollableTabView page={0} renderTabBar={() => <TabViewBar/>}>
            <GoodsList ref="goodsList" minus={this.minusItem.bind(this)} lens={this.state.lens} goods={this.state.goods} onAdd={this.onAdd.bind(this)} headHeight={marginTop} tabLabel="商品"/>
            <Comments headHeight={marginTop} tabLabel="评价(4.1分)"/>
          </ScrollableTabView>
        </View>
      </Animated.View>
    )
  }
  minusItem(obj){
    let { selected,lens } = this.state
    let key = obj.key
    let num = (lens[key]||0)-1
    if(num < 0){
      return
    }
    lens[key] = num
    lens.maxPrice -= obj.price
    lens.length -= 1
    for(let i=0,item; item=selected[i]; i++){
      if(item.key == key){
        selected.splice(i,1)
      }
    }
    this.setState({selected, lens})
  }
  renderActivities(){
    let color = {
      "减": "#f07373",
      "特": "#f1884f",
      "新": "#73f08e"
    }
    let { activities } = this.state.data
    if(!activities || !activities.length){
      return null
    }else{
      return (
        <Animated.View style={[styles.actives, {opacity: this.state.activeOpacity}]}>
          {
            activities.map((item, i) => {
              return (
                <View key={i} style={{flexDirection: "row", alignItems:"center", height: px2dp(18)}}>
                  <Text style={{fontSize: px2dp(11), color: "#fff", backgroundColor: color[item.key] || "#f1884f", paddingHorizontal: 1, paddingVertical: 1}}>{item.key}</Text>
                  <Text numberOfLines={1} style={{fontSize: px2dp(11), marginLeft:3, color: "#fff"}}>{item.text}</Text>
                </View>
              )
            })
          }
        </Animated.View>
      )
    }
  }
  imageLoaded(){
    this.setState({viewRef: findNodeHandle(this.refs.backgroundImage)})
  }
  render(){
    let { data } = this.state
    let props = Platform.OS === 'ios'?{
      blurType: "light",
      blurAmount: 25
    }:{
      viewRef: this.state.viewRef,
      downsampleFactor: 10,
      overlayColor: 'rgba(255,255,255,.1)'
    }
    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <Animated.Image source={LocalImg.bg} ref={'backgroundImage'} onLoadEnd={this.imageLoaded.bind(this)} style={[
          styles.bg,
          {
              transform: [{ translateY: this.state.bgY },
                          { scale: this.state.bgScale }]
          }
        ]}>
          <BlurView {...props} style={styles.blur}/>
        </Animated.Image>
        <View style={styles.head}>
          <Animated.View style={{flexDirection: "row", paddingHorizontal: 16, opacity: this.state.headOpacity}}>
            <Image source={LocalImg.bg} style={styles.logo}/>
            <View style={{marginLeft: 14, flex: 1}}>
              <Text style={{color: "#fff"}}>{data.name}</Text>
              <TouchableOpacity>
              <View style={{flexDirection: "row", paddingTop: 8, paddingBottom: 18}}>
                {data.fengniao?(<Text style={[styles.label2, {marginRight: 5}]}>{"蜂鸟专送"}</Text>):null}
                <Text style={{color: "#fff", fontSize: px2dp(12)}}>{`${data.time}分钟送达`}</Text>
              </View>
              </TouchableOpacity>
              <Text style={{color: "#fff", fontSize: px2dp(12)}} numberOfLines={1}>{data.bulletin}</Text>
            </View>
          </Animated.View>
          {this.renderActivities()}
        </View>
        {this.renderGoods()}
        <NavBar
          title={data.name}
          titleStyle={{opacity: this.state.titleOpacity}}
          style={{backgroundColor: "transparent", position:"absolute", top:0, width}}
          leftIcon="ios-arrow-back"
          leftPress={this.back.bind(this)}
          rightIcon="ios-more"
          rightPress={()=>{}}
        />
        <Parabolic
          ref={"parabolic"}
          style={[styles.tmpBtn, {top: this.state.addBtnY}]}
          renderChildren={() => {
            return (
              <View style={{width:px2dp(14), height:px2dp(14), backgroundColor:"#3190e8", borderRadius: px2dp(7), overflow:"hidden"}}></View>
            )
          }}
          animateEnd={this.parabolicEnd.bind(this)}
        />
        <ShopBar ref={"shopbar"} list={this.state.selected} lens={this.state.lens}/>
      </View>
    )
  }
}
/*
<Animated.View style={[styles.tmpBtn, {
  top: this.state.addBtnY,
  transform: [
    { translateX: this.state.animateBtnX },
    { translateY: this.state.animateBtnY }
  ]
}]}>
  <View style={{width:px2dp(14), height:px2dp(14), backgroundColor:"#3190e8", borderRadius: px2dp(7), overflow:"hidden"}}></View>
</Animated.View>
*/
const styles = StyleSheet.create({
  head:{
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    paddingTop: NavBar.topbarHeight,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  bg:{
    width,
    height: width,
    resizeMode: "cover"
  },
  blur: {
    position: "absolute",
    left:0,
    right:0,
    top:0,
    width,
    height: width,
  },
  logo: {
    width: px2dp(80),
    height: px2dp(80),
    resizeMode: "cover"
  },
  label2: {
    fontSize: 10,
    color: "#fff",
    backgroundColor: "#00abff",
    textAlign: "center",
    paddingHorizontal: 2,
    paddingVertical: 1
  },
  actives: {
    paddingTop: 4,
    marginTop: 8,
    paddingHorizontal: 16
  },
  topView: {
    position: "absolute",
    top: NavBar.topbarHeight,
    bottom: 0,
    left: 0,
    right: 0
  },
  tmpBtn: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 4,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  }
})

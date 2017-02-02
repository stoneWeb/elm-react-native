'use strict';


import React, { Component, PropTypes } from 'react'
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LocalImg from '../images'
import px2dp from '../util'
import Button from './Button'

export default class Bz extends Component {
  constructor(props){
      super(props)
  }
  static propTypes = {
      name: PropTypes.string.isRequired, // 商家名
      logo: PropTypes.number.isRequired, // 商家logo
      isBrand: PropTypes.bool,
      scores: PropTypes.number, //商家评分
      sale: PropTypes.number, //月销售量
      bao: PropTypes.bool, // 保计划
      piao: PropTypes.bool, // 票
      ontime: PropTypes.bool, // 准时
      fengniao: PropTypes.bool, // 蜂鸟专送
      startPay: PropTypes.string, // 起送费
      deliverPay: PropTypes.string, // 配送费
      evOnePay: PropTypes.string, // 费用/人
      journey: PropTypes.string, // 路程
      time: PropTypes.string, // 送餐时间
      activities: PropTypes.array,
      onPress: PropTypes.func
  }
  renderActivities(){
    let color = {
      "减": "#f07373",
      "特": "#f1884f",
      "新": "#73f08e"
    }
    let {activities} = this.props
    if(!activities || !activities.length){
      return null
    }else{
      return (
        <View style={styles.actives}>
          {
            activities.map((item, i) => {
              return (
                <View key={i} style={{flexDirection: "row", marginTop: 5}}>
                  <Text style={{fontSize: px2dp(11), color: "#fff", backgroundColor: color[item.key] || "#f1884f", paddingHorizontal: 1, paddingVertical: 1}}>{item.key}</Text>
                  <Text numberOfLines={1} style={{fontSize: px2dp(11), marginLeft:3, color: "#666"}}>{item.text}</Text>
                </View>
              )
            })
          }
        </View>
      )
    }
  }
  render(){
    const {name, isBrand, logo, scores, sale, bao, piao, ontime, fengniao, startPay, deliverPay, evOnePay, journey, time, activities, onPress} = this.props
    let scale = scores/5*55
    return (
      <Button onPress={onPress}>
        <View style={styles.bzWrap}>
          <View style={styles.border}>
            <Image source={logo} style={styles.bzLogo}/>
            <View style={styles.bzContent}>
              <View style={styles.between}>
                <View style={{flexDirection: "row", flex: 1}}>
                  {isBrand?(<Text style={styles.brand}>{"品牌"}</Text>):null}
                  <Text numberOfLines={1} style={styles.name}>{name}</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent:"flex-end", width: 70}}>
                  {bao?(<Text style={styles.label}>{"保"}</Text>):null}
                  {piao?(<Text style={[styles.label, {marginLeft: 2}]}>{"票"}</Text>):null}
                </View>
              </View>
              <View style={[styles.between, {marginTop: 8}]}>
                <View style={{flexDirection: "row", flex: 1}}>
                  <View>
                    <Image source={LocalImg.star2} style={{height: 10, width: 55}}/>
                    <View style={{height: 10, position:"absolute", left:0, top:0, width: scale, overflow:"hidden"}}>
                      <Image source={LocalImg.star1} style={{height: 10, width: 55}}/>
                    </View>
                  </View>
                  <Text style={{fontSize: px2dp(11), color: "#ff6000"}}>{scores}</Text>
                  <Text style={{fontSize: px2dp(11), color: "#666", marginLeft: 2}}>{`月售${sale}单`}</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent:"flex-end"}}>
                  {ontime?(<Text style={styles.label1}>{"准时达"}</Text>):null}
                  {fengniao?(<Text style={[styles.label2, {marginLeft: 2}]}>{"蜂鸟专送"}</Text>):null}
                </View>
              </View>
              <View style={[styles.between, {marginTop: 8}]}>
                <View style={{flexDirection: "row", flex: 1}}>
                  <Text style={styles.infoText}>{startPay}</Text>
                  <Text style={styles.line}>{'|'}</Text>
                  <Text style={styles.infoText}>{deliverPay}</Text>
                  <Text style={styles.line}>{'|'}</Text>
                  <Text style={styles.infoText}>{evOnePay}</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent:"flex-end"}}>
                  <Text style={styles.infoText}>{journey}</Text>
                  <Text style={styles.line}>{'|'}</Text>
                  <Text style={{fontSize: px2dp(11), color: "#00abff", marginLeft: 2}}>{time}</Text>
                </View>
              </View>
              {this.renderActivities()}
            </View>
          </View>
        </View>
      </Button>
    )
  }
}


const styles = StyleSheet.create({
  bzWrap: {
    backgroundColor: "#fff",
    paddingLeft: 10
  },
  border: {
    flexDirection: "row",
    paddingTop: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5"
  },
  bzBox: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingRight: 10,
    borderTopWidth: 1,
    borderTopColor: "#f9f9f9"
  },
  bzLogo: {
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#f9f9f9",
    width: px2dp(60),
    height: px2dp(60)
  },
  bzContent: {
    marginLeft: 6,
    marginRight: 10,
    flex: 1
  },
  between: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 3
  },
  brand: {
    fontSize: 12,
    color: "#52250a",
    paddingHorizontal: 3,
    paddingVertical: 2,
    backgroundColor: "#ffdc37"
  },
  label: {
    fontSize: 10,
    color: "#999",
    borderWidth: 1,
    borderColor: "#eee",
    textAlign: "center",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 3
  },
  label1: {
    fontSize: 10,
    color: "#00abff",
    borderWidth: 1,
    borderColor: "#00abff",
    textAlign: "center",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 3
  },
  label2: {
    fontSize: 10,
    color: "#fff",
    backgroundColor: "#00abff",
    textAlign: "center",
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  line: {
    fontSize: px2dp(11),
    color: "#999",
    paddingHorizontal: 3
  },
  infoText: {
    fontSize: px2dp(11),
    color: "#666"
  },
  actives: {
    paddingTop: 4,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#f9f9f9"
  }
})

let d = {
  list: [
    {
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
      activities: [
        {key: "减", text: "满20减2，满30减3，满40减4（不与美食活动同享）"},
        {key: "特", text: "双人餐特惠"}
      ]
    },
    {
      name: "稻麦香（金源店）",
      isBrand: true,
      logo: 21,
      scores: 2.5,
      sale: 2419,
      bao: true,
      ontime: true,
      startPay: "￥0起送",
      deliverPay: "配送费￥2",
      evOnePay: "￥11/人",
      journey: "150m",
      time: "25分钟",
      activities: [
        {key: "减", text: "满20减2，满30减3，满40减4（不与美食活动同享）"}
      ]
    },
    {
      name: "米有理由（中关村店）",
      logo: 11,
      scores: 1.5,
      sale: 1419,
      startPay: "￥0起送",
      deliverPay: "配送费￥5",
      evOnePay: "￥12/人",
      journey: "450m",
      time: "45分钟"
    },
    {
      name: "吉野家(鼎好店)",
      isBrand: true,
      logo: 16,
      scores: 4.5,
      sale: 3419,
      ontime: true,
      startPay: "￥0起送",
      deliverPay: "配送费￥2",
      evOnePay: "￥14/人",
      journey: "150m",
      time: "25分钟",
      activities: [
        {key: "减", text: "满20减2，满30减3，满40减4（不与美食活动同享）"},
        {key: "新", text: "新品5折"},
        {key: "特", text: "双人餐特惠"}
      ]
    },
    {
      name: "周大虾龙虾盖浇饭（中关村东路店）",
      logo: 18,
      scores: 4,
      sale: 4013,
      piao: true,
      ontime: true,
      fengniao: true,
      startPay: "￥20起送",
      deliverPay: "配送费￥4",
      evOnePay: "￥21/人",
      journey: "250m",
      time: "35分钟",
      activities: [
        {key: "特", text: "双人餐特惠"}
      ]
    },
    {
      name: "轰咖咖喱饭（中关村东路店）",
      isBrand: true,
      logo: 17,
      scores: 4,
      sale: 4013,
      piao: true,
      fengniao: true,
      startPay: "￥20起送",
      deliverPay: "配送费￥4",
      evOnePay: "￥21/人",
      journey: "250m",
      time: "35分钟"
    },
  ],
  orderData: [
    {
      title: "来西口（酒仙桥）",
      logo: 14,
      state: "订单已完成",
      time: "2016-09-05 12:11",
      info: "特色油泼面等两件商品",
      price: "￥57"
    },
    {
      title: "杨铭宇黄焖鸡米饭",
      logo: 15,
      state: "订单已完成",
      time: "2016-10-01 18:31",
      info: "黄焖鸡小分（中辣）+米饭+饮料",
      price: "￥27"
    }
  ],
  breakFastData: [
    {
      title: "永和大王",
      logo: 15,
      state: "订单已完成",
      time: "2016-04-01 09:11",
      info: "大杯永和豆浆+饭",
      price: "￥37"
    }
  ]
}
let pics = ["h0","h1","h2","h3","h4","h6","h8","h9","h10","h11","h12","h13","h14","h15","hot3","sale0","sale1","sale2","sale3"]
let len = pics.length
let goods = {
  "热销榜": [
    {name: "单个狮子头", info:"美味 营养", sale:"月售801份 好评率92%", price:3, image:24},
    {name: "烤肠", info:"午餐头~腐竹~宽粉~金针菇~油菜~红薯~娃娃菜~豆皮~千叶豆腐", sale:"月售536份 好评率95%", price:4, image:27},
    {name: "卤蛋（根）", info:"卤的超香的蛋", sale:"月售496份 好评率93%", price:2, image:17},
    {name: "米饭（份）", info:"美味米饭 好吃到没朋友", sale:"月售472份 好评率88%", price:2, image:31},
    {name: "梅菜扣肉饭", info:"油而不腻 美味可口", sale:"月售337份 好评率90%", price:17, image:20},
    //{name: "番茄鸡蛋汤", info:"", sale:"月售333份 好评率100%", price:3, image:""},
    //{name: "蜀香豆皮", info:"新鲜豆皮", sale:"月售239份 好评率70%", price:3, image:""},
    //{name: "木须肉饭", info:"美味盖饭", sale:"月售237份 好评率100%", price:13, image:""},
    //{name: "豆角焖面", info:"", sale:"月售154份 好评率72%", price:15, image:""},
    //{name: "番茄鸡蛋饭", info:"经典盖饭", sale:"月售141份 好评率100%", price:12, image:""}
  ],
  "盖饭": [
    //{name: "番茄鸡蛋饭", info:"经典盖饭", sale:"月售141份 好评率100%", price:12, image:""},
    //{name: "木须肉饭", info:"美味盖饭", sale:"月售237份 好评率100%", price:13, image:""},
    //{name: "麻婆豆腐饭", info:"", sale:"月售66份 好评率100%", price:12, image:""},
    {name: "香菇鸡腿饭", info:"香菇+鸡腿+米饭", sale:"月售147份 好评率100%", price:13, image:17},
    {name: "什锦蘑菇饭", info:"", sale:"月售89份 好评率83%", price:14, image:20},
    //{name: "红烧狮子头饭", info:"", sale:"月售99份 好评率100%", price:12, image:""},
    //{name: "梅菜扣肉饭", info:"梅菜+五花肉", sale:"月售337份 好评率90%", price:17, image:""},
    //{name: "烧茄子饭", info:"", sale:"月售115份 好评率100%", price:13, image:""},
    //{name: "香锅焖面", info:"", sale:"月售102份 好评率100%", price:17, image:""},
    //{name: "豆角焖面", info:"新鲜豆角", sale:"月售154份 好评率72%", price:15, image:""},
    //{name: "关东煮组合", info:"", sale:"月售43份 好评率81%", price:15, image:""}
  ],
  "小菜": [
    //{name: "卧龙笋丝", info:"", sale:"月售103份 好评率100%", price:5, image:""},
    {name: "蜀香豆皮", info:"", sale:"月售239份 好评率70%", price:3, image:20},
    //{name: "泡椒素毛肚", info:"", sale:"月售90份 好评率100%", price:4, image:""},
    //{name: "菜心", info:"", sale:"月售130份 好评率90%", price:4, image:""},
  ],
  "小吃": [
    {name: "单个狮子头", info:"", sale:"月售801份 好评率92%", price:3, image:24},
    {name: "烤肠", info:"", sale:"月售536份 好评率95%", price:4, image:26},
    //{name: "卤蛋（根）", info:"", sale:"月售496份 好评率93%", price:2, image:""},
    //{name: "米饭（份）", info:"", sale:"月售472份 好评率88%", price:2, image:""}
  ],
  "汤/饮料": [
    {name: "番茄鸡蛋汤", info:"", sale:"月售333份 好评率92%", price:3, image:24},
    {name: "可口可乐（听）", info:"", sale:"月售92份", price:4, image:24},
    //{name: "雪碧（听）", info:"", sale:"月售33份 好评率92%", price:4, image:""},
    //{name: "果粒橙", info:"", sale:"月售89份 好评率100%", price:4, image:""},
    //{name: "矿泉水", info:"", sale:"月售36份", price:2, image:""},
    //{name: "啤酒", info:"", sale:"月售7份", price:5, image:""},
    //{name: "酸角汁", info:"", sale:"月售8份 好评率100%", price:4, image:""},
    //{name: "酸梅汤（听）", info:"", sale:"月售27份 好评率100%", price:4, image:""},
    //{name: "王老吉", info:"", sale:"月售17份 好评率100%", price:5.5, image:""}
  ],
  "双拼单人餐A": [
    {name: "红烧肉+番茄鸡蛋+怡泉", info:"", sale:"", price:22, image:24},
    //{name: "烧茄子+狮子头+怡泉", info:"", sale:"", price:22, image:""},
    //{name: "宫保鸡丁+木须肉+怡泉", info:"", sale:"", price:22, image:""},
    //{name: "肥牛+菜心+怡泉", info:"", sale:"", price:23, image:""}
  ],
  "双拼单人餐B": [
    {name: "红烧肉+番茄鸡蛋+怡泉", info:"", sale:"", price:24, image:24},
    //{name: "烧茄子+狮子头+怡泉", info:"", sale:"", price:24, image:""},
    //{name: "宫保鸡丁+木须肉+怡泉", info:"", sale:"", price:26, image:""},
    //{name: "肥牛+菜心+怡泉", info:"", sale:"", price:28, image:""}
  ]
}
Object.keys(goods).forEach((item, i) => {
  goods[item].forEach((e, j) => {
    goods[item][j].key = i+"-"+j
    //goods[item][j].image = pics[Math.floor(Math.random()*len)]
  })
})
d.goods = goods
export default d

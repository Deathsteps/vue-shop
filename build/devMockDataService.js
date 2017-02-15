'use strict';

var express = require('express');

var router = express.Router();

router.post('/home', function (req, res, next) {
  setTimeout(function () {
    res.json({
      products: [
        {
          title: 'App Product',
          price: 500,
          picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'
        },
        {
          title: 'App Product 1',
          price: 300,
          picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'
        },
        {
          title: 'App Product 2',
          price: 500,
          picUrl: 'http://www.aomaicdn.com/attas/2016/11/20161118100820_582e6294c02d8.jpg'
        },
        {
          title: 'App Product 3',
          price: 800,
          picUrl: 'http://www.aomaicdn.com/attas/2016/05/947_G_1463121881855.jpg'
        },
        {
          title: 'App Product 4',
          price: 100,
          picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'
        }
      ]
    });
  }, 500);
});
router.post('/detail', function (req, res, next) {
  setTimeout(function () {
    res.json({
      slideImages: [
        {imageUrl: 'http://www.aomaicdn.com/attas/orgimg/2015/07/157_P_1438249404266.jpg'},
        {imageUrl: 'http://www.aomaicdn.com/attas/orgimg/2015/07/157_P_1438249404546.jpg'}
      ],
      title: 'Blackmores 芹菜籽西芹籽 痛风灵解除尿毒 50粒',
      price: 300,
      stock: 200,
      isCollect: true,
      collectCount: 20,
      brand: { logo: 'abs', brandName: 'Blackmores 百丽康美' },
      details: [
        { name: 'sdfsdfax', value: 'sdfsfa123123' },
        { name: 'abababqw', value: 'sfa158839sdf3' },
        { name: 'lklxklxkx', value: 'olkxckxfa123123' }
      ],
      detailImages: [
        { imageUrl: 'http://www.aomaicdn.com/images/upload/image/20150709/20150709120557_77766.jpg' },
        { imageUrl: 'http://www.aomaicdn.com/images/upload/image/20150709/20150709120557_60289.jpg' },
        { imageUrl: 'http://www.aomaicdn.com/images/upload/image/20150709/20150709120615_50995.jpg' }
      ]
    })
  }, 500);
})
router.post('/login', function (req, res, next) {
  setTimeout(() => {
    res.json({
      token: 'sds12-21s2d-w21as-i23jd'
    })
  }, 500)
})
router.post('/orders', function (req, res, next) {
  setTimeout(() => {
    res.json([{
        products: [
          {title: "Kdsdf", price: 211, buyCount: 2, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'},
          {title: "See Kuo", price: 999, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'},
          {title: "Ops Ass", price: 310, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/11/20161118100820_582e6294c02d8.jpg'}
        ],
        createTime: '1459537345000',
        orderStatus: 1,
        totalPrice: 3095,
        orderId: 123131231123
      },{
        products: [
          {title: "See Kuo", price: 99, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/05/947_G_1463121881855.jpg'},
          {title: "Ops Ass", price: 310, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'}
        ],
        createTime: '1459537545000',
        orderStatus: 2,
        totalPrice: 2095,
        orderId: 4564563131223
      },{
        products: [
          {title: "See Kuo", price: 99, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'},
          {title: "Ops Ass", price: 310, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'}
        ],
        createTime: '1459537545000',
        orderStatus: 3,
        totalPrice: 2095,
        orderId: 778883123123
      },{
        products: [
          {title: "See Kuo", price: 99, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/11/20161118100820_582e6294c02d8.jpg'},
          {title: "Ops Ass", price: 310, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/05/947_G_1463121881855.jpg'}
        ],
        createTime: '1459537545000',
        orderStatus: 3,
        totalPrice: 2095,
        orderId: 178683123123
      },{
        products: [
          {title: "Ops Ass", price: 31, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'}
        ],
        createTime: '1459538445000',
        orderStatus: 4,
        totalPrice: 31,
        orderId: 278683123123
      },{
        products: [
          {title: "Ops Ass", price: 30, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg' }
        ],
        createTime: '1459517445000',
        orderStatus: 4,
        totalPrice: 30,
        orderId: 18683123445
      },{
        products: [
          {title: "Kdsdf", price: 211, buyCount: 2, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg' },
          {title: "See Kuo", price: 999, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/11/20161118100820_582e6294c02d8.jpg' },
          {title: "Ops Ass", price: 310, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/05/947_G_1463121881855.jpg' }
        ],
        createTime: '1459537345000',
        orderStatus: 6,
        totalPrice: 3095,
        orderId: 17868312387
      },{
        products: [
          {title: "Ops Ass", price: 31, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg' }
        ],
        createTime: '1459538445000',
        orderStatus: 5,
        totalPrice: 31,
        orderId: 17868883123
      },{
        products: [
          {title: "Ops Ass", price: 31, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/05/947_G_1463121881855.jpg' }
        ],
        createTime: '1459538445000',
        orderStatus: 6,
        totalPrice: 31,
        orderId: 178600023123
      },{
        products: [
          {title: "Ops Ass", price: 31, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg' }
        ],
        createTime: '1459538445000',
        orderStatus: 7,
        totalPrice: 31,
        orderId: 178683123123
      }
    ])
  }, 500)
})
router.post('/order', function (req, res, next) {
  setTimeout(() => {
    res.json({
      createTime: 1459537345000,
      totalPrice: 300,
      orderStatus: 1,
      price: 250,
      postage: 30,
      tariff: 20,
      orderId: 12123123123,
      comment: '周末送来',
      address: {
        name: 'Test',
        phone: '17011824512',
        province: '北京市',
        city: '北京市',
        area: '海滨区',
        detail: '天和路32号'
      },
      expressId: 7071212982012,
      products: [
        {title: "Kdsdf", price: 211, buyCount: 2, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'},
        {title: "See Kuo", price: 999, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'},
        {title: "Ops Ass", price: 310, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/11/20161118100820_582e6294c02d8.jpg'}
      ]
    })
  }, 500)
})
router.post('/shopcart', function (req, res, next) {
  setTimeout(() => {
    res.json([
      {
        shopname: 'kaka',
        selectCount: 1,
        price: 499,
        products: [
          {title: 'See Kuo', price: 999, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'}
        ]
      },
      {
        shopname: 'aka',
        selectCount: 2,
        price: 799,
        products: [
          {title: 'Kdsdf', price: 211, buyCount: 2, picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'},
          {title: 'Ops Ass', price: 310, buyCount: 1, picUrl: 'http://www.aomaicdn.com/attas/2016/11/20161118100820_582e6294c02d8.jpg'}
        ]
      }
    ])
  }, 500)
})


var userAddresses = []
router.post('/address', function (req, res, next) {
  setTimeout(() => {
    if (req.body.mode === 'add') {
      let newAddress = Object.assign(
        {id: userAddresses.length},
        req.body
      );
      delete newAddress.mode
      userAddresses.push(newAddress)
      res.json({})
    }
    else if (req.body.mode === 'edit') {
      let editedOne = req.body;
      delete editedOne.mode
      for (var i = 0; i < userAddresses.length; i++) {
        let address = userAddresses[i]
        if (address.id === editedOne.id) {
          userAddresses[i] = editedOne
          res.json({})
          break;
        }
      }
    }
    else {
      res.json(userAddresses)
    }
  }, 500)
})

module.exports = router;

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
  }, 200);
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
  }, 200);
})

module.exports = router;

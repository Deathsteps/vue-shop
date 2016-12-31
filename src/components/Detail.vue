<template>
  <div class="view">

    <div class="detail-slides">
  		<div class="detail-slides-wrapper" :style="sliderWrapperWidthStyle">
  			<div
          class="detail-banner"
          v-for="image in slideImages"
          :style="screenWidthStyle">
  			  <img :src="image.imageUrl" />
  			</div>
  		</div>
  		<div class="detail-index">1/{{ slideImageCount }}</div>
  	</div>

  	<div class="detail-text-wrapper">
  		<div class="detail-title">{{title}}</div>
  		<div class="detail-price">¥{{price}}</div>
  		<div class="flex-row">
  			<div class="detail-text">剩余 {{stock}} 件</div>
  			<div class="detail-text">
  				<span class="detail-like iconfont">&#xe622;</span>
          喜欢 {{collectCount}}
  			</div>
  		</div>
  	</div>
  	<a class="detail-logo-wrapper clearfix">
  		<img class="detail-logo" :src="brand.logo" alt=""/>
  		<div class="detail-logo-name">{{brand.brandName}}</div>
  		<div class="detail-logo-arrow">&gt;</div>
  	</a>

  	<div class="detail-sub-title"><span class="iconfont">&#xe616;</span>商品详情</div>
  	<div class="app-bars">
  		<div class="detail-detail" v-for="item in details">
  			<div>{{item.name}}</div>
  			<div>{{item.value}}</div>
  		</div>
  	</div>
  	<div class="detail-detail-imgs">
  		<img class="detail-img" v-for="image in detailImages" :src="image.imageUrl" alt="" />
  	</div>

	</div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      slideImages: [
        {imageUrl: 'http://www.aomaicdn.com/attas/orgimg/2015/07/157_P_1438249404266.jpg'},
        {imageUrl: 'http://www.aomaicdn.com/attas/orgimg/2015/07/157_P_1438249404546.jpg'}
      ],
      slideImageCount: 2,
      sliderWrapperWidthStyle: 'width: ' + (document.documentElement.offsetWidth * 2) + 'px',
      screenWidthStyle: 'width: ' + document.documentElement.offsetWidth + 'px',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.detail-slides {
  position: relative;
  background-color: white;
}
.detail-slides-wrapper {
  position: relative;
  overflow: hidden;
}
.detail-banner {
  height: 17.5rem;
  display: inline-block;
  text-align: center;
}
.detail-banner img {
  height: 100%;
}
.detail-index {
  width: 2.8125rem;
  height: 1.875rem;
  line-height: 1.6rem;
  text-align: center;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: white;
  background-color: rgba(48, 48, 48, 0.35);
  padding: .1rem .3rem;
  border-radius: 0.4rem;
  font-size: 0.8125rem;
}
.detail-text-wrapper {
  padding: .5rem;
  background-color: white;
}
.detail-title {
  font-size: 0.9375rem;
  color: #4a4a4a;
}
.detail-price {
  margin: .3rem 0;
  color: #fd8e56;
  font-family: 'DIN Alternate';
  font-size: 1.3rem;
}
.detail-text {
  padding: 0;
  color: #999999;
  font-size: 0.8125rem;
  flex: 1;
  width: 100%;
  display: block;
}
.detail-text:last-child{
  text-align: right;
}
.detail-like {
  font-size: 1rem !important;
  margin-right: .3rem;
  color: #FE6775;
}
.detail-logo-wrapper {
  height: 3.125rem;
  line-height: 3.125rem;
  background-color: white;
  padding: 0 .5rem;
  display: block;
  color: #4a4a4a;
  margin-top: .9375rem;
  margin-bottom: .5rem;
  font-size: 0.9375rem;
}
.detail-logo {
  width: 3.75rem;
  height: 1.875rem;
  display: block;
  margin-right: .5rem;
  margin-top: .5rem;
  float: left;
}
.detail-logo-name {
  float: left;
}
.detail-logo-arrow{
  float: right;
}
.detail-sub-title {
  height: 2.8125rem;
  padding-top: 0.7rem;
  line-height: 1.4rem;
  color: #4a4a4a;
  margin-left: .5rem;
}
.detail-sub-title .iconfont{
  margin-right: .5rem;
  color: #fd8e56;
}
.app-bars {
  background-color: white;
  padding: 0 .5rem;
  color: #4a4a4a;
  font-size: 0.9375rem;
}
.detail-detail {
  height: 3.125rem;
  line-height: 3.125rem;
  border-bottom: 1px solid #e8e8e8;
  color: #4a4a4a;
  font-size: .8rem;
  height: 1.875rem;
  line-height: 1.875rem;
  display: flex;
  width: 100%;
}
.detail-detail>div {
  flex: 1;
}
.detail-detail>div:last-child{
  color: #aaa;
  text-align: right;
}
.detail-detail-imgs {}
.detail-img {
  width: 100%;
}
</style>

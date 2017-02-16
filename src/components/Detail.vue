<template>
  <div class="view">

    <div class="detail-slides">
  		<div class="detail-slides-wrapper"
        :style="'width: ' + sliderWrapperWidth + 'px'"
        v-if="detail.slideImages">
  			<div
          class="detail-banner"
          v-for="image in detail.slideImages"
          :style="'width: ' + screenWidth + 'px'">
  			  <img :src="image.imageUrl" />
  			</div>
  		</div>
  		<div class="detail-index" v-if="detail.slideImages">
        1/{{ detail.slideImages.length }}
      </div>
  	</div>

  	<div class="detail-text-wrapper">
  		<div class="detail-title">{{detail.title}}</div>
  		<div class="detail-price">¥{{detail.price}}</div>
  		<div class="flex-row">
  			<div class="detail-text">剩余 {{detail.stock}} 件</div>
  			<div class="detail-text">
  				<span class="detail-like iconfont">&#xe622;</span>
          喜欢 {{detail.collectCount}}
  			</div>
  		</div>
  	</div>
  	<a class="detail-logo-wrapper clearfix" v-if="detail.brand">
  		<img class="detail-logo" :src="detail.brand.logo" alt=""/>
  		<div class="detail-logo-name">{{detail.brand.brandName}}</div>
  		<div class="detail-logo-arrow">&gt;</div>
  	</a>

  	<div class="detail-sub-title"><span class="iconfont">&#xe616;</span>商品详情</div>
  	<div class="app-bars">
  		<div class="detail-detail" v-for="item in detail.details">
  			<div>{{item.name}}</div>
  			<div>{{item.value}}</div>
  		</div>
  	</div>
  	<div class="detail-detail-imgs">
  		<img class="detail-img"
        v-for="image in detail.detailImages"
        :src="image.imageUrl" alt="" />
  	</div>

    <fixed-footer :back="true">
      <div class="cart-add" @click="add2Cart">加入购物车</div>
      <div class="detail-buy">立即购买</div>
      <router-link to="shopcart" class="detail-cart">
        <span class="iconfont">&#xe60d;</span>
        <span class="cart-count">{{buyCount}}</span>
      </router-link>
    </fixed-footer>
	</div>
</template>

<script>
import FixedFooter from './commons/FixedFooter'
import { mapActions } from 'vuex'

export default {
  name: 'detail',
  data () {
    return this.$store.state.detail
  },
  computed: {
    sliderWrapperWidth () {
      return (this.detail.slideImages
        ? document.documentElement.offsetWidth * this.detail.slideImages.length
        : document.documentElement.offsetWidth)
    },
    screenWidth () {
      return document.documentElement.offsetWidth
    }
  },
  components: {
    FixedFooter
  },
  created () {
    this.fetchProductDetail()
  },
  methods: {
    ...mapActions(['fetchProductDetail', 'add2Cart'])
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
  font-size: 1rem;
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
  margin-top: 0;
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

.detail-cart {
  width: 3.25rem;
  height: 3.25rem;
  text-align: center;
  line-height: 3.25rem;
  border-radius: 3.25rem;
  position: absolute;
  bottom: 4rem;
  left: 1rem;
  background-color: #76b68c;
  color: white;
  opacity: 0.7;
  display: block;
}
.cart-count {
  width: 1.3rem;
  height: 1.3rem;
  position: absolute;
  bottom: 1.9rem;
  left: 2.2rem;
  text-align: center;
  line-height: 1.3rem;
  background-color: red;
  color: white;
  border-radius: 1.3rem;
  font-size: 0.875rem;
}

.cart-add, .detail-buy {
  text-align: center;
  font-size: 1.125rem;
  line-height: 3rem;
}
.cart-add {
  width: 40%;
  background-color: rgb(118, 182, 140);
}
.detail-buy {
  width: 30%;
  background-color: #F9722E;
}
</style>

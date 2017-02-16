<template>
  <div class="view">

    <div v-if="display === 'home'">
      <searcher></searcher>

      <tabs :data="homeTabs"></tabs>

      <div class="loading" v-if="fetching">
        Loading...
      </div>
      <div class="product-list" v-if="!fetching && products">
        <div v-for="product in products" class="product-wrapper clearfix"
          @click="gotoDetail('product.id')">
      		<div class="product-img">
      		  <img :src="product.picUrl"/>
      		</div>
      		<div class="product-item">
      			<div class="product-title">{{ product.title }}</div>
      			<div class="product-price">¥{{ product.price }}</div>
      		</div>
        </div>
      </div>
    </div>

    <div v-if="display === 'user'">
      <div class="userCenter-header">
        <div class="userCenter-phone">绑定手机号</div>
        <div class="userCenter-avatar-wrapper">
          <img class="userCenter-avatar" src="static/images/avatar.png" alt="" />
          <div class="ng-binding">登录</div>
        </div>
      </div>

      <div class="userCenter-tabs">
        <tabs :data="userCenterTabs"></tabs>
      </div>

      <div class="app-bars">
        <router-link tag="div" to="orders" class="app-bar">
          <span class="iconfont">&#xe613;</span>
          <span class="text">全部订单</span>
          <span class="arrow"></span>
        </router-link>
        <router-link tag="div" to="address/list" class="app-bar">
          <span class="iconfont">&#xe608;</span>
          <span class="text">地址管理</span>
          <span class="arrow"></span>
        </router-link>
        <router-link tag="div" to="shopcart" class="app-bar">
          <span class="iconfont">&#xe622;</span>
          <span class="text">购物车</span>
          <span class="arrow"></span>
        </router-link>
      </div>
    </div>

    <fixed-footer>
      <tabs :data="footerTabs" @tab="switchDisplay"></tabs>
    </fixed-footer>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import FixedFooter from './commons/FixedFooter'
import Searcher from './commons/Searcher'
import Tabs from './commons/Tabs'

export default {
  name: 'home',
  data () {
    return this.$store.state.home
  },
  computed: {
    homeTabs () {
      return [
        {icon: '&#xe612;', text: '品牌'},
        {icon: '&#xe60b;', text: '分类'},
        {icon: '&#xe60a;', text: '发现'}
      ]
    },
    footerTabs () {
      return [
        {icon: '&#xe619;', text: '首页', name: 'home'},
        {icon: '&#xe620;', text: '我的', name: 'user'}
      ]
    },
    userCenterTabs () {
      return [
        {icon: '&#xe607;', text: '待支付'},
        {icon: '&#xe606;', text: '待收货'},
        {icon: '&#xe626;', text: '已完成'}
      ]
    }
  },
  created () {
    this.fetchHomeProducts()
  },
  methods: {
    gotoDetail (id) {
      this.$router.push('detail')
    },
    ...mapMutations(['switchDisplay']),
    ...mapActions(['fetchHomeProducts'])
  },
  components: {
    FixedFooter,
    Searcher,
    Tabs
  }
}
</script>

<style>
  .product-list {
  }
  .product-wrapper {
    background-color: white;
  }
  .product-item {
    padding: .3rem;

    float: left;
    width: 50%;
  }
  .product-img {
    height: 9.5rem;
    margin-top: 1.1rem;
    display: block;
    text-align: center;

    float: left;
    width: 50%;
  }
  .product-img img {
    height: 100%;
  }
  .product-title {
    max-height: 2.6rem;
    min-height: 2.6rem;
    overflow-y: hidden;
    font-size: 0.9375rem;
    color: #4a4a4a;
    margin-top: 1.5rem;
    white-space: normal;
  }
  .product-price {
    font-size: 1.875rem;
    padding-top: 1.5625rem;
    color: #fd8e56;
    font-family: 'DIN Alternate';
  }

  footer .tabs {
    height: 100%;
    margin-top: 0;
  }
  footer .tab {
    padding: 0.45rem;
  }
  footer .tab span {
    font-size: 1.5rem;
  }
  footer .tab div {
    margin: 0;
    font-size: 0.6875rem;
  }


  .userCenter-header {
    width: 100%;
    background-color: #98d1ad;
    height: 8rem;
    position: relative;
  }
  .userCenter-phone {
    position: absolute;
    color: white;
    border: 1px solid white;
    padding: .1rem 0.4rem;
    border-radius: 0.4rem;
    right: .5rem;
    top: 1rem;
  }
  .userCenter-avatar-wrapper {
    text-align: center;
    padding-top: 1.5rem;
    color: white;
  }
  .userCenter-avatar {
    width: 4rem;
    margin: 0 auto;
    display: block;
    margin-bottom: .5rem;
    border-radius: 100%;
  }

  .userCenter-tabs .tabs {
    margin-top: 0
  }
  .userCenter-tabs .tab {
    color: #4a4a4a;
    background-color: white;
  }
  .userCenter-tabs .iconfont {
    color: #98d1ad;
  }
</style>

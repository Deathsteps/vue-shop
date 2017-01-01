<template>
  <div class="view">

    <div class="searcher">
      <label class="searcher-input">
        <span class="iconfont">&#xe62b;</span>
        <input type="text" placeholder="请输入商品名称" />
      </label>
    </div>

    <div class="tabs">
      <a class="tab">
        <span class="iconfont">&#xe612;</span>
        <div>品牌</div>
      </a>
      <a class="tab">
        <span class="iconfont">&#xe60b;</span>
        <div>分类</div>
      </a>
      <a class="tab">
        <span class="iconfont">&#xe60a;</span>
        <div>发现</div>
      </a>
    </div>

    <div class="product-list">
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

    <fixed-footer>
      <div class="tabs">
        <a class="tab">
          <span class="iconfont">&#xe619;</span>
          <div>首页</div>
        </a>
        <a class="tab">
          <span class="iconfont">&#xe620;</span>
          <div>我的</div>
        </a>
      </div>
    </fixed-footer>

  </div>
</template>

<script>
import FixedFooter from './commons/FixedFooter'

export default {
  name: 'home',
  data () {
    return {
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
    }
  },
  methods: {
    gotoDetail (id) {
      this.$router.push('detail')
    }
  },
  components: {
    FixedFooter
  }
}
</script>

<style>
  .searcher {
    padding-top: 0.5rem;
  }
  .searcher-input {
    color: #999999;
    font-size: .9375rem;
    line-height: 2rem;
    width: 93%;
    margin: 0 auto;
    border-radius: 0.4rem;
    border: none;
    background-color: white;
    padding: 0 .5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    align-items: center;
    position: relative;
    overflow: hidden;
    display: flex;
  }
  .searcher-input input {
    padding-left: .5rem;
    line-height: 34px;
    width: 100%;
    flex: 1 220px;
    margin: 0;
    padding-right: 24px;
    background-color: transparent;
  }


  .tabs {
    display: flex;
    height: 5.3125rem;
    margin-top: .8rem;
    width: 100%;
  }
  .tab {
    flex: 1;
    color: white;
    background-color: #76b68c;
    display: block;
    padding: 5px;
    padding-top: 1.5rem;
    width: 100%;
    text-align: center;
  }
  .tab span {
    font-size: 2.3rem;
    display: block;
  }
  .tab div {
    margin-top: .9rem;
    margin-bottom: 0.3rem;
    font-size: .9375rem;
  }


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
</style>

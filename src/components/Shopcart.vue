<template lang="html">

  <div class="view">
    <div class="app-blank">
      暂无商品
    </div>

    <div class="shopcart-item" v-for="shop in shopcart">
      <div class="shopcart-header">
        <label class="checkbox">
          <input type="checkbox"/>
        </label>
        <span class="shopcart-shop">{{shop.shopname}}</span>
      </div>

      <div class="shopcart-product" v-for="product in shop.products">
        <label class="checkbox">
          <input type="checkbox"/>
        </label>
        <div class="shopcart-img">
          <img :src="product.picUrl"/>
        </div>
        <div class="shopcart-text">
          <div class="shopcart-title">{{product.title}}</div>
          <div class="shopcart-price">¥{{product.price}}</div>
          <div class="shopcart-btn">
            <div class="number-changer">
              <div class="iconfont">&#xe62d;</div>
              <div class="number-changer-count">{{product.buyCount}}</div>
              <div class="iconfont">&#xe62c;</div>
            </div>
            <span class="iconfont shopcart-delete">&#xe614;</span>
          </div>
        </div>
      </div>

      <div class="shopcart-info clearfix">
        <div class="shopcart-total">
          <div>
            已选商品 {{shop.selectCount}} 件
          </div>
          <div>
            商品总额： <span class="shopcart-total-price">¥{{shop.price}}</span>
          </div>
        </div>
        <div class="shopcart-settle">
          结算
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'shopcart',
  data () {
    return {
      shopcart: [
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
      ]
    }
  }
}
</script>

<style lang="css">
.shopcart-item {
  background-color: white;
  margin-bottom: 1rem;
}
.shopcart-header {
  display: flex;
  height: 3.125rem;
  line-height: 3.125rem;
  margin: 0 .5rem;
  border-bottom: 1px solid #e8e8e8;
}
.shopcart-header .checkbox {
  margin-top: 0.25rem;
  margin-left: 0.3rem;
}
.shopcart-shop {
  font-size: 0.9375rem;
  color: #4a4a4a;
}
.shopcart-product {
  display: flex;
  height: 7.8rem;
  padding-top: 0.8rem;
  border-bottom: 1px solid #e8e8e8;
  margin: 0 .5rem;
}
.shopcart-product:last-child {
  border-bottom: none;
}
.shopcart-product .checkbox {
  padding-left: 0.8rem;
  margin-top: 1.5rem;
}
.shopcart-img {
  display: block;
  height: 6rem;
  width: 40%;
}
.shopcart-img img {
  height: 100%;
}
.shopcart-text {
  flex: 1;
  padding: .5rem;
  color: #4a4a4a;
}
.shopcart-title {
  font-size: .8rem;
  line-height: 1rem;
  max-height: 2rem;
  min-height: 2rem;
  overflow-y: hidden;
}
.shopcart-price {
  margin-top: .3rem;
  font-family: 'DIN Alternate';
}
.shopcart-btn {
  display: flex;
  margin-top: 0.2rem;
  justify-content: space-between;
}
.number-changer {
  display: flex;
  border: 1px solid #e8e8e8;
  height: 1.6rem;
  line-height: 1.4rem;
  border-radius: 0.4rem;
  width: 5.5rem;
  text-align: center;
  border-color: #999999;
}
.number-changer .iconfont {
  font-size: .9rem;
  width: 30%;
}
.number-changer-count {
  flex: 1;
  padding: 0 .5rem;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  height: 1.5rem;
  border-color: #4a4a4a;
}
.shopcart-delete {
  color: #999999;
  margin-top: 0.2rem;
  font-size: 1.5rem;
}
.shopcart-info {
  margin-top: 1rem;
  padding: 0 .5rem;
  padding-bottom: 1rem;
  color: #4a4a4a;
}
.shopcart-total {
  display: flex;
  justify-content: space-between;
}
.shopcart-total-price {
  font-family: 'DIN Alternate';
  min-width: 3.5rem;
  display: inline-block;
  text-align: right;
  font-size: 0.8125rem;
}
.shopcart-settle {
  float: right;
  width: 4.6875rem;
  height: 1.875rem;
  text-align: center;
  line-height: 1.875rem;
  background-color: #F9732D;
  color: white;
  border-radius: 0.4rem;
  margin-top: 0.5rem;
}
</style>

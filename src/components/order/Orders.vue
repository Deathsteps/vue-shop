<template lang="html">
  <div class="order-list">
    <div v-for="item in data">
      <div class="order-header">
        <div class="order-status">{{item.orderStatus | orderStatusText}}</div>

        <div class="order-tn" v-if="mode !== 'detail'">
          <div>订单号:{{item.orderId}}</div>
          <div>{{item.createTime | date}}</div>
        </div>

        <div class="order-status" v-if="mode === 'detail'">
          <div>快递号:{{item.expressId}}</div>
        </div>

      </div>
      <div class="order-product">
        <div class="order-items">
          <div class="order-item-img">
            <img :src="item.products[0].picUrl"/>
          </div>
          <div class="order-text">
            <div class="order-title">{{item.products[0].title}}</div>
            <div class="order-buy">
              <div class="order-price">¥{{item.products[0].price}}</div>
              <div>{{item.products[0].buyCount}} 件</div>
            </div>
          </div>
        </div>
        <transition-group name="list" tag="div">
          <div
            class="order-items"
            v-for="(product, i) in item.products"
            v-if="i !== 0 && isMoreDisplayed"
            :key="i">
            <div class="order-item-img">
              <img :src="product.picUrl"/>
            </div>
            <div class="order-text">
              <div class="order-title">{{product.title}}</div>
              <div class="order-buy">
                <div class="order-price">¥{{product.price}}</div>
                <div>{{product.buyCount}} 件</div>
              </div>
            </div>
          </div>
        </transition-group>
        <div class="order-toggle" @click="showMore">
          {{moreText}}剩余 {{item.products.length}} 件 <span class="icon ion-chevron-down"></span>
        </div>
        <div class="order-footer" >
          <div class="order-total">总计： <span class="order-price order-total-price">¥{{item.totalPrice}}</span></div>
          <div class="order-btn" v-if="item.orderStatus === 4">确认收货</div>
          <div class="order-btn order-pay" v-if="item.orderStatus === 1">付款</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orders',
  props: {
    data: Array,
    mode: String
  },
  data () {
    return {
      isMoreDisplayed: false
    }
  },
  computed: {
    moreText () {
      return this.isMoreDisplayed ? '隐藏' : '显示'
    }
  },
  methods: {
    showMore () {
      this.isMoreDisplayed = !this.isMoreDisplayed
    }
  }
}
</script>

<style lang="css">
.order-list {
  /*height: 100%;
  overflow-y: scroll;*/
}
.order-header {
  height: 3.125rem;
  font-size: 0.9375rem;
  background-color: #f0f9f4;
  color: #76b68c;
  padding: 0 .5rem;
  display: flex;
}
.order-status {
  line-height: 3.125rem;
}
.order-status:last-child {
  text-align: right;
  flex: 1;
}
.order-tn {
  padding-top: 0.3rem;
  text-align: right;
  flex: 1;
}
.order-product {
  background-color: white;
  padding-left: .5rem;
  padding-right: .5rem;
  margin-bottom: 1rem;
}
.order-btn {
  width: 4.125rem;
  height: 1.875rem;
  line-height: 1.875rem;
  border-radius: 0.4rem;
  margin-top: 0.6rem;
  background: #76b68c;
  border-color: #76b68c;
  text-align: center;
  color: white;
}
.order-footer {
  height: 3.125rem;
  line-height: 3.125rem;
  display: flex;
}
.order-pay {
  background-color: #f9732d;
  border-color: #f9732d;
}
.order-items {
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  color: #4a4a4a;
  height: 8.1875rem;
}
.order-items .order-item-img {
  max-height: 7rem;
  width: 30%;
}
.order-item-img img {
  height: 100%;
  text-align: center;
}
.order-text {
  padding-left: 1.5625rem;
  flex: 1;
}
.order-title {
  min-height: 2.6rem;
  max-height: 2.6rem;
  margin-top: 1rem;
  margin-bottom: .5rem;
  overflow-y: hidden;
}
.order-buy {
  display: flex;
}
.order-buy>div {
  flex: 1;
  text-align: right;
}
div.order-price {
  font-family: 'DIN Alternate';
  text-align: left;
}
.order-total {
  flex: 1;
}
.order-total-price {
  color: #fd8e56;
}
.order-toggle {
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  color: #999999;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
}

.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

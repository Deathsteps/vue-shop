<template lang="html">
  <div class="view">

    <div class="order-detail-info">
			<div><span class="order-detail-no">订单时间</span>：{{order.createTime | date}}</div>
			<div><span class="order-detail-no">订单总额</span>：<span class="order-price">¥{{order.totalPrice}}</span></div>
			<div><span class="order-detail-no">订单号</span>：{{order.orderId}}</div>
		</div>

		<div class="order-address-wrapper" v-if="order.address">
			<span>收货人: {{order.address.name}}</span>
			<span class="order-phone">{{order.address.phone}}</span>
			<div class="order-address">{{order.address.province}}{{order.address.city}}{{order.address.area}}{{order.address.detail}}</div>
		</div>

    <orders :data="orders" mode="detail" v-if="orders"/>

		<div class="order-comment">
			<span>备注</span>
			<span class="order-comment-text">{{order.comment}}</span>
		</div>

		<div class="app-bars">
			<div class="app-bar">
				<div class="text">商品总金额</div>
				<div class="order-price">¥{{order.price}}</div>
			</div>
			<div class="app-bar">
				<div class="text">运费</div>
				<div class="order-price">¥{{order.postage}}</div>
			</div>
			<div class="app-bar">
				<div class="text">关税</div>
				<div class="order-price">¥{{order.tariff}}</div>
			</div>
		</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Orders from './order/Orders'

export default {
  name: 'order-detail',
  data () {
    return this.$store.state.orderDetail
  },
  computed: {
    orders () {
      return this.order.products ? [this.order] : undefined
    }
  },
  created () {
    this.fetchOrderDetail()
  },
  methods: {
    ...mapActions(['fetchOrderDetail'])
  },
  components: {
    Orders
  }
}
</script>

<style lang="css">
.order-detail-info {
  font-size: 0.9375rem;
  color: white;
  background-color: #76b68c;
  height: 5.5rem;
  padding-left: .5rem;
  padding-top: 1rem;
}
.order-detail-no {
  display: inline-block;
  width: 4rem;
}
.order-address-wrapper {
  width: 100%;
  height: 6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  padding: 1rem;
  color: #4a4a4a;
  font-size: 0.9375rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #ded;
  background-color: rgb(255, 250, 243);
}
.order-phone {
  margin-left: .8rem;
}
.order-address {
  padding-right: .5rem;
  margin-top: .5rem;
}

.order-comment {
  padding: 0 0.5rem;
  height: 3.125rem;
  line-height: 3.125rem;
  background-color: white;
  margin-top: 1rem;
  display: flex;
  color: #4a4a4a;
}
.order-comment span {
  line-height: 3.125rem;
  width: 30%;
}
span.order-comment-text {
  width: 70%;
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

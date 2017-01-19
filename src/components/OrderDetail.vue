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

    <div class="order-list" v-if="order.products">
  		<div>
  			<div class="order-header">
  				<div class="order-status">
            <a>查看物流&gt;&gt;</a>
          </div>
  				<div class="order-status">
  					<div>快递号:{{order.expressId}}</div>
  				</div>
  			</div>
  			<div class="order-product">
  				<div class="order-items">
            <div class="order-item-img">
              <img :src="order.products[0].picUrl"/>
            </div>
  					<div class="order-text">
  						<div class="order-title">{{order.products[0].title}}</div>
  						<div class="order-buy">
  							<div class="order-price">¥{{order.products[0].price}}</div>
  							<div>{{order.products[0].buyCount}} 件</div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>

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

export default {
  name: 'order-detail',
  data () {
    return this.$store.state.orderDetail
  },
  created () {
    this.fetchOrderDetail()
  },
  methods: {
    ...mapActions(['fetchOrderDetail'])
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
  padding-right: 0.5rem;
  width: 70%;
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

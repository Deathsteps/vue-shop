<template lang="html">
  <div class="view">
    <div class="order-tabs">
      <a class="order-tab order-tab-active">全部</a>
      <a class="order-tab">待支付</a>
      <a class="order-tab">待收货</a>
      <a class="order-tab">已完成</a>
    </div>

    <div class="app-blank" v-if="orderList && !orderList.length">
  		暂无订单
  	</div>

    <orders :data="orderList" v-if="orderList && orderList.length"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Orders from './order/Orders'

export default {
  name: 'order-list',
  data () {
    return this.$store.state.orderList
  },
  created () {
    this.fetchUserOrders()
  },
  methods: {
    ...mapActions(['fetchUserOrders'])
  },
  components: {
    Orders
  }
}
</script>

<style lang="css">
.order-tabs {
  display: flex;
  background-color: white;
}
.order-tab {
  flex: 1;
  display: block;
  font-size: 0.9375rem;
  color: #4a4a4a;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
}
.order-tab-active {
  color: #76b68c;
  border-bottom: 2px solid #76b68c;
}

</style>

<template>
  <div class="tabs">
    <a class="tab"
      v-for="item in data"
      @click="handleTab(item)">
      <span class="iconfont" v-html="item.icon"></span>
      <div>{{item.text}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    'data': Array
  },
  methods: {
    handleTab (item) {
      this.$emit('tab', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
</style>

<template>
  <div class="searcher">
    <label class="searcher-input">
      <span class="iconfont">&#xe62b;</span>
      <input type="text" placeholder="请输入商品名称" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'searcher'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>

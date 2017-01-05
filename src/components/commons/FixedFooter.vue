<template>
  <footer>
    <div class="fixed-footer">
      <div class="footer-back" v-if="back" @click="goBack">
        <span>&lt;</span>
        <div>返回</div>
      </div>
      <slot></slot>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'fixed-footer',
  props: {
    'back': Boolean,
    'backFunction': Function
  },
  methods: {
    goBack () {
      if (this.backFunction) {
        this.backFunction()
      } else {
        this.$router.back()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
footer {
  width: 100%;
  height: 3rem;
}
.fixed-footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #98d1ad;
  color: white;
  /*z-index: 10;*/
}

.footer-back {
  display: flex;
  width: 30%;
  cursor: pointer;
}
.footer-back span {
  font-family: 'DIN Alternate';
  font-size: 1.5rem;
  line-height: 3.1rem;
  margin-left: .5rem;
  color: white;
}
.footer-back div {
  font-size: 1.125rem;
  line-height: 3.1rem;
  padding-left: .5rem;
}
</style>

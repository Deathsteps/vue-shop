<template>
  <div id="app">
    <transition :name="transitionName" mode="in-out">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-right',
      last: ''
    }
  },
  watch: {
    '$route' (to, from) {
      let isBackward = this.last && this.last === to.path
      this.transitionName = isBackward ? 'slide-left' : 'slide-right'
      this.last = isBackward ? '' : from.path
    }
  }
}
</script>

<style>

#app {
  width: 100%;
}

.view {
  background-color: #F1F1F1;
  width: 100%;
}
.view:last-child, .view.slide-left-leave-active{
  position: absolute;
  top: 0;
  left: 0;
}
.view.view.slide-left-leave-active {
  z-index: 1;
}
.slide-right-enter-active, .slide-left-leave-active {
  transition: all ease-in-out .5s;
}
.slide-right-enter-active, .slide-left-leave-active {
  transform: translate(100%, 0);
}
.slide-right-enter-to {
  transform: translate(0, 0);
}

</style>

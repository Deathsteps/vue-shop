<template lang="html">
  <div>
    <div class="backdrop visible active"></div>
    <div class="popup-container popup-showing active">
      <div class="popup">
        <div class="popup-head">
          <h3 class="popup-title">{{title}}</h3>
        </div>
        <div class="popup-body">
          <span>{{content}}</span>
        </div>
        <div class="popup-buttons">
          <button
            class="button"
            v-if="btnCancelDisplayed"
            @click="cancel">
            取消
          </button>
          <button
            class="button button-primary"
            v-if="btnConfirmDisplayed"
            @click="confirm">
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    title: String,
    content: String,
    btnCancelDisplayed: Boolean,
    btnConfirmDisplayed: Boolean
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="css">

</style>

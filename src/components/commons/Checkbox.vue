<template lang="html">
  <label class="checkbox">
    <input
      type="checkbox"
      :checked="checked ? 'checked' : ''"
      @click="change"
    />
  </label>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    checked: Boolean,
    value: Object
  },
  methods: {
    change () {
      this.$emit(
        'change',
        { checked: !this.checked, ...(this.value || {}) }
      )
    }
  }
}
</script>

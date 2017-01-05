<template>
  <div>
    <div class="address-inputs">
      <input v-model="address.name" class="address-input" placeholder="收货人姓名" type="text" />
      <input v-model="address.phone" class="address-input" placeholder="手机号码" type="tel" />
      <input v-model="address.identity" class="address-input" placeholder="身份证" type="text" />
      <a class="address-set" href="javascript:;"
        @click="openLocationDialog(mode)">
        <span>{{location || '设置省市区'}}</span>
      </a>
      <textarea v-model="address.detail" placeholder="详细地址" class="address-detail"></textarea>
    </div>
    <div class="big-button" @click="save(address)">保存</div>
  </div>
</template>

<script>
export default {
  name: 'address-editor',
  props: {
    mode: String,
    address: Object,
    openLocationDialog: Function,
    save: Function
  },
  computed: {
    location () {
      return this.address.province + this.address.city + this.address.area
    }
  }
}
</script>

<style>
.address-inputs {
  background-color: white;
  padding: 0 .5rem;
  margin-top: 1rem;
  width: 100%;
}
input.address-input {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #e8e8e8;
  padding-left: .5rem;
}
.address-set {
  height: 3rem;
  line-height: 3rem;
  padding: 0 .5rem;
  border-bottom: 1px solid #e8e8e8;
  color: #4a4a4a;
  display: block;
  text-decoration: none;
}
.address-detail {
  width: 100%;
  height: 7.8125rem;
  resize: none;
  padding: .5rem;
}
</style>

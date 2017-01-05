<template>
  <div class="view">

    <div v-if="$route.params.mode === 'list'">
      <div class="address-info" v-if="!addresses.length">
       点击下方按钮添加新地址
      </div>
      <div class="address-wrapper" v-for="address in addresses">
        <div class="address-content">
  				<span>收货人: {{address.name}}</span>
  				<span class="phone">{{address.phone}}</span>
  				<div class="detail">{{address.province}}{{address.city}}{{address.area}}{{address.detail}}</div>
  			</div>
  			<div class="address-btns">
  				<label class="checkbox">
  					<input type="checkbox"/>
  				</label>
  				<div class="address-default">设为默认</div>
  				<div @click="openDeleteConfirm(address.id)" class="address-btn">
  					<span class="iconfont">&#xe614;</span>
  					<span>删除</span>
  				</div>
  				<div @click="go2Edit(address)" class="address-btn">
  					<span class="iconfont">&#xe601;</span>
  					<span>编辑</span>
  				</div>
  			</div>
      </div>
      <loading v-if="fetching"/>
    </div>

    <address-editor
      v-if="$route.params.mode !== 'list'"
      :mode="$router.currentRoute.params.mode"
      :address="$router.currentRoute.params.mode === 'add' ? newAddress : editedAddress"
      :openLocationDialog="openLocationDialog"
      :save="$router.currentRoute.params.mode === 'add' ? addAddress : editAddress"/>

    <div class="location-dialog" v-if="dialogDisplayed">
      <div class="location-info">{{locationInfo}}</div>
      <div class="location-title">{{locationTitle}}</div>
      <ul class="location-ul">
        <li class="location-li"
          v-for="item in locationList"
          @click="selectLocation({'location': item, 'locationIndex': locationIndex})">
          {{item}}
        </li>
      </ul>
    </div>

    <fixed-footer
      :back="true"
      :backFunction="backFunction">
      <router-link
        tag="div"
        v-if="$route.params.mode === 'list'"
        to="/address/add"
        class="address-add">
        添加新地址
      </router-link>
    </fixed-footer>

    <popup
      v-if="deleteConfrimDisplayed"
      title="消息"
      content="确定要删除吗？"
      :btnCancelDisplayed="true"
      :btnConfirmDisplayed="true"
      @cancel="closeDeleteConfirm"
      @confirm="removeAddress(removeAddressId)"/>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import FixedFooter from './commons/FixedFooter'
import Loading from './commons/Loading'
import Popup from './commons/Popup'
import AddressEditor from './address/AddressEditor'

export default {
  name: 'address',
  components: {
    FixedFooter,
    Loading,
    Popup,
    AddressEditor
  },
  data () {
    return this.$store.state.address
  },
  computed: mapGetters([
    'locationTitle',
    'locationInfo'
  ]),
  created () {
    this.fetchUserAddresses()
  },
  watch: {
    addSuccess (addSuccess) {
      if (addSuccess) {
        this.$router.back()
        this.addSuccess = false
      }
    },
    editSuccess (editSuccess) {
      if (editSuccess) {
        this.$router.back()
        this.addSuccess = false
      }
    },
    deleteSuccess (deleteSuccess) {
      if (deleteSuccess) {
        this.fetchUserAddresses()
        this.removeAddressId = -1
        this.deleteSuccess = false
        this.deleteConfrimDisplayed = false
      }
    }
  },
  methods: {
    backFunction () {
      if (this.$router.currentRoute.params.mode === 'list' ||
        !this.dialogDisplayed) {
        this.$router.back()
      } else {
        this.locationBack()
      }
    },
    go2Edit (address) {
      this.setEditedAddress(address)
      this.$router.push('/address/edit?id=' + address.id)
    },
    ...mapActions([
      'fetchUserAddresses',
      'addAddress',
      'editAddress',
      'removeAddress'
    ]),
    ...mapMutations([
      'openLocationDialog',
      'selectLocation',
      'locationBack',
      'setEditedAddress',
      'openDeleteConfirm',
      'closeDeleteConfirm'
    ])
  }
}
</script>

<style>
.address-info {
  text-align: center;
  margin-top: 12rem;
  font-size: 0.9375rem;
  color: #4a4a4a;
}
.address-add {
  text-align: center;
  font-size: 1.125rem;
  line-height: 3rem;
  width: 40%;
  cursor: pointer;
}

.address-wrapper {
  margin-bottom: 1rem;
}
.address-content {
  background-color: white;
  color: #4a4a4a;
  padding: .5rem;
  font-size: 0.9375rem;
}
.address-content .phone {
  margin-left: 1rem;
}
.address-content .detail {
  margin-top: 0.6rem;
  line-height: 1rem;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 0.7rem;
}
.address-content-active {
  background-color: #98d1ad;
  color: white;
}
.address-content-active .detail {
  border-bottom: none;
}
.address-btns {
  height: 3.125rem;
  line-height: 2.5rem;
  padding: 0 .5rem;
  background-color: white;
  display: flex;
}
.address-default {
  flex: 1
}
.address-btn {
  cursor: pointer;
  margin-right: 1rem;
}
.address-btn span.iconfont {
  font-size: 1rem
}

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

.location-dialog {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #F1F1F1;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 3rem;
}
.location-info {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9375rem;
  color: #4a4a4a;
}
.location-title {
  padding: .5rem 1rem;
}
.location-ul {
  padding-left: 1rem;
}
.location-li {
    border-bottom: 1px solid #e8e8e8;
    width: 95%;
    padding: .5rem 0;
}
</style>

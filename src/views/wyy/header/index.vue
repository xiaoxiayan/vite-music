<template>
  <div class="myheader">
    <!-- 4个模块。logo,ul,搜索，头像 -->
    <div v-show="false">
      <span>
        aaaa
      </span>
    </div>
    <div class="warp-header">
      <h1 class="logo" @click="logoClick" />
      <ul class="navList">
        <li
          v-for="item,index in navList"
          :key="index"
          class="nav"
          :class="active == index ? 'active' : ''"
          @click="navAction(index)"
        >{{ item.name }}</li>
      </ul>
      <!-- 搜索 -->
      <div class="search">
        <el-autocomplete
          test-data="searchInput"
          v-model="searchVal"
          :fetch-suggestions="querySearchAsync"
          placeholder="Please input"
          @select="handleSelect"
        />
        <!-- <el-input class="searchInput"  v-model="searchVal"></el-input> -->
        <span class="searchSpan">{{ searchVal }}</span>
      </div>
      <div class="user">
        <!-- 用户头像,如果有登陆就使用头像，如果没有就使用 文字 -->
        <div v-if="isLogin" class="userAvatar">
          <img :src="userInfo.avatarUrl"
               alt='头像'
           />
        </div>
        <div v-else>
          <el-button type="primary" class="loginBtn" @click="loginAction">登陆</el-button>
        </div>
      </div>
    </div>
    <loginDialog></loginDialog>
    <testBox></testBox>
 </div>
</template>

<script lang='ts' setup>
import testBox from '@/components/test-element.vue'
import { ref, defineEmits, computed, defineProps } from 'vue'
import testJson from './navList.json'
import $store from '@/store'
const props = defineProps({
  message: String
})
const isLogin = computed(() => $store.state.isLogin)
const userInfo = computed(() => $store.state.userInfo)
const openBox = computed(() => $store.state.openBox)
const emits = defineEmits(['tagclick'])
const navList = testJson.navList
const active = ref(0)
function navAction (index: any) {
  active.value = index
  // 需要emit 出去一个 router
  emits('tagclick', index)
}
const logoClick = () => {
  console.log('cccccc')
}
// 搜索模块
let timeout: any
const searchVal = ref('')
const links = ref([])
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant:any) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
      0
    )
  }
}
const loginAction = () => {
  // 调取 登陆组件
  console.log('loginBtnAction------------')
  $store.dispatch('SET_OPENBOX', true)
}
const handleSelect = (item:any) => {
  console.log(item)
}

//   pageData.menusList = data

// console.log(menusList,'2222');

</script>
<script lang="ts">
import loginDialog from '@/components/loginDialog.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components:{
    loginDialog
  }
})
</script>
<style scoped lang="less">
@import "./index.less";
</style>

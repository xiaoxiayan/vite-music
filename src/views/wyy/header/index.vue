<template>
  <div class="myheader">
    <!-- 4个模块。logo,ul,搜索，头像 -->
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
          v-model="searchVal"
          :fetch-suggestions="querySearchAsync"
          placeholder="Please input"
          @select="handleSelect"
        />
      </div>
      <div class="user">
        <!-- 用户头像,如果有登陆就使用头像，如果没有就使用 文字 -->
        <div v-if="isLogin">
          <img :src="userInfo.avatarUrl" alt />
        </div>
        <div v-else>
          <span class="loginBtn" @click="loginAction">登陆</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref, defineEmits, computed } from 'vue'
import testJson from './navList.json'
import $store from '@/store'
const isLogin = computed(() => $store.state.userInfo)
const userInfo = computed(() => $store.state.userInfo)
const emits = defineEmits(['tagclick'])
const navList = testJson.navList
const active = ref(0)
console.log(isLogin, '===', userInfo)
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
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
      0
    )
  }
}
const loginAction = () => {
  console.log(isLogin)
}
const handleSelect = (item) => {
  console.log(item)
}

</script>
<style scoped lang="less">
@import "./index.less";
</style>

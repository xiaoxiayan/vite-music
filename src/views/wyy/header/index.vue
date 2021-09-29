<template>
  <div class="myheader">
    <!-- 4个模块。logo,ul,搜索，头像 -->
    <div class="warp-header">
      <h1
        class="logo"
        @click="logoClick"
      />
      <ul class="navList">
        <li
          v-for="item,index in navList"
          :key="index"
          class="nav"
          :class="active == index ? 'active' : '' "
          @click="navAction(index)"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="user">
        <!-- 用户头像 -->
        <div />
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref, defineEmits } from 'vue'
import testJson from './navlist.json'
const emits = defineEmits(['tagclick'])
const navList = testJson.navList
const active = ref(0)
function navAction (index:any) {
  active.value = index
  // 需要emit 出去一个 router
  emits('tagclick', index)
}
const logoClick = () => {
  console.log('cccccc')
}
interface person {
  name: string
  age: number
}
const man = (parmas:person) => {
  console.log('aaa')
}
man('aaa')
</script>
<style scoped lang="scss">
@import './index.scss';

</style>

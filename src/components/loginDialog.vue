<template>
  <!-- 登陆组件 -->
  <div id="loginDialog">
    <el-dialog title="登陆">
      <el-form ref="form" :model="formData">
        <el-form-item label="Activity name">
          <el-input v-model="formData.myphone"></el-input>
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input v-model="formData.myphone"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="action" @click="login">确定</el-button>
      <el-button class="cancel">取消</el-button>
   </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import { ref, toRefs, onBeforeMount, onMounted } from 'vue'
import $store from '@/store'

interface loginInfo {
  myphone: string,
  passWord: string
}
const formData = ref<loginInfo>({
  myphone: '',
  passWord: ''
})
const count = ref(0)
const logingiot = (data:loginInfo):boolean => {
  let dataLength = null
  if (data) {
    dataLength = Object.keys(data).length
    return !!dataLength
  } else {
    return false
  }
}

</script>
<style scoped lang='less'>
</style>

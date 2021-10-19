<template>
  <!-- 登陆组件 -->
  <teleport to="#loginDialog">
    <el-dialog title="登陆">
      <el-form ref="form" :model="formData">
        <el-form-item label="Activity name">
          <el-input v-model="formData.myphone"></el-input>
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input v-model="formData.myphone"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </teleport>
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

const testFn = (data:loginInfo):boolean => {
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

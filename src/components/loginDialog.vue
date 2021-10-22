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
      <span>Count: {{ count }}</span>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import { ref, toRefs, onBeforeMount, onMounted } from 'vue'
import $store from '@/store'
import { ElMessage } from 'element-plus'

interface loginInfo {
  myphone: string,
  passWord: string
}
const formData = ref<loginInfo>({
  myphone: '',
  passWord: ''
})
const count = ref(0)
const verify = (data: loginInfo): boolean => {
  if (data.myphone === '') {
    ElMessage.error('手机号不能为空')
    return false
  }
  if (data.passWord === '') {
    ElMessage.error('密码不能为空')
    return false
  }
  return true
}
const login = (data: loginInfo): void => {
  let dataLength = null
  if (data) {
    dataLength = Object.keys(data).length
  } else {
  }
}

</script>
<style scoped lang='less'>
</style>

<template>
  <!-- 登陆组件 -->
  <!-- <teleport to='loginDialog' > -->
    <el-dialog
    title="登陆"
    class="loginbox"
    v-model="dialogVisible"
    >
      <el-form ref="form" :model="formData">
        <el-form-item label="Activity name">
          <el-input v-model="formData.myphone"></el-input>
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input v-model="formData.myphone"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="action" @click="login">确定</el-button>
      <el-button class="cancel" @click="cancal">取消</el-button>
      <span>Count: {{ count }}</span>
    </el-dialog>
    <!-- </teleport> -->
</template>

<script lang='ts' setup>
import { ref, toRefs, onBeforeMount, watch, computed, defineProps } from 'vue'
import $store from '@/store'
import { ElMessage } from 'element-plus'
const dialogVisible = computed(() => $store.state.openBox)
const props = defineProps({
  truthy: Boolean,
  object: Object,
  string: String
})
watch(
  () => dialogVisible.value,
  (newVal, oldVal) => {
    console.log(newVal, 'wath', oldVal)
  }
)
interface loginInfo {
  myphone: string,
  passWord: string
}
const formData = ref<loginInfo>({
  myphone: '',
  passWord: ''
})
const count = ref(0)
const cancal = () => {
  // 设置 值取消
  $store.dispatch('SET_OPENBOX', false)
}
const verify = (data: loginInfo): boolean => {
  if (data.myphone === '') {
    ElMessage.error('手机不能为空')
    return false
  }
  if (data.passWord === '') {
    ElMessage.error('密码不能为空')
    return false
  }
  return true
}
const login = (data: loginInfo): boolean => {
  if (verify(data)) {
    return true
  } else {
    return false
  }
}
</script>
<style scoped lang='less'>
</style>

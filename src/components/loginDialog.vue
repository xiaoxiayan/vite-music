<template>
  <!-- 登陆组件 -->
  <!-- <teleport to='loginDialog' > -->
    <el-dialog
    title="登陆"
    v-model="dialogVisible"
    >
      <el-form ref="form" :model="formData">
        <el-form-item label="手机号：">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="action" @click="login(formData)">确定</el-button>
      <el-button class="cancel" @click="cancal">取消</el-button>
    </el-dialog>
    <!-- </teleport> -->
</template>

<script lang='ts' setup>
import { ref, toRefs, onBeforeMount, watch, computed, defineProps } from 'vue'
import $store from '@/store'
import axios from '@/server/axios'
import { ElMessage } from 'element-plus'
const dialogVisible = computed(() => $store.state.openBox)
const props = defineProps({
  truthy: Boolean,
  object: Object,
  string: String
})
// watch(
//   () => dialogVisible.value,
//   (newVal, oldVal) => {
//   }
// )
interface loginInfo {
  phone: string,
  password: string
}
const formData = ref<loginInfo>({
  phone: '',
  password: ''
})
const count = ref(0)
const cancal = () => {
  // 设置 值取消
  $store.dispatch('SET_OPENBOX', false)
}
const verify = (data: loginInfo): boolean => {
  if (data.phone === '') {
    ElMessage.error('手机不能为空')
    return false
  }
  if (data.password === '') {
    ElMessage.error('密码不能为空')
    return false
  }
  return true
}
const login = (data: loginInfo):void => {
  if (verify(data)) {
    console.log('coming', data)
    // axios({
    //   url: 'loginMusic',
    //   method: 'GET',
    //   data: data
    // }).then(res => {
    //   console.log(res, 'resssssssa')
    //   if (res && res.code === 200) {
    //     $store.dispatch('SET_ISLOGIN', true)
    //     $store.dispatch('SET_USERINFO', res.profile)
    //     $store.dispatch('SET_OPENBOX', false)
    //   }
    // })
  } else {
    ElMessage.error('请输入正确的手机号码')
  }
}
</script>
<style scoped lang='less'>
</style>

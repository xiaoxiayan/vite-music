<template>
  <validateForm @form-submit="onFormSubmit">
  <div class="form-group">
    <div class="mb-3">
        <label for="exampleInputEmail1">Email address</label>
        <validate-input ref="inputRef" v-model="vaal" type="text" placeholder="请输入邮箱地址"  :rules="emailRules"></validate-input>
    </div>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">密码</label>
           <validate-input v-model="emailPassword" type="password" placeholder="请输入密码"  :rules="passWordRules"></validate-input>
  </div>
  <template #submit>
      <span  class="btn btn-danger"> 提交 </span>
  </template>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
</validateForm>
</template>

<script lang="ts">
import { reactive , ref, toRef, toRefs } from '@vue/reactivity'
import validateInput, { RulesProp } from './validateInput.vue'
import validateForm from './validateForm.vue'
import { emitter } from './validateForm.vue'
export default {
    name:'myform',
    components: {
        validateInput,
        validateForm
    },
    setup(){
        const inputRef= ref<any>()
        const emailRules :RulesProp = [
            { type: 'required', message: '电子邮箱地址不能为空'},
            { type: 'email', message: '请输入正确的电子邮箱格式'},
            
        ]
        const passWordRules: RulesProp = [
            { type: 'required', message: '密码不能为空'},
        ]
        const formData = reactive({
            vaal:''
        })
        const emailVal = ref('123@qq.com')
        const emailPassword = ref('')
        const toData = toRefs(formData)
        const emailReg = /^([\w\.\-]+)\@(\w+)(\.([\w^\_]+)){1,2}$/
        const onFormSubmit = (val:boolean) => {
        }
        return {
            formData,
            emailRules,
            emailVal,
            emailPassword,
           ...toData,
           onFormSubmit,
           inputRef,
           passWordRules
        }

    }
    

}
</script>

<style scoped>
.wtf {
  background: red;
  height: 200px;

}

</style>
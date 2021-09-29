<template>
   <div class="validate-input-container pb-3">
        <input 
        v-bind="$attrs"
        :value="inputRef.val"
        @blur="validateEmail"
        class="form-control"
        :class="{'is-invalid': inputRef.error}"
        @input="updateValue"
        >
   <span v-if="inputRef.error" class="valid-feedback">{{inputRef.message}}</span>
    
   </div>
</template>

<script lang="ts">
import { defineComponent , reactive ,PropType, ref, onMounted} from "vue";
import { emitter } from './validateForm.vue'
console.log(emitter,'==emitter')
const emailReg = /^([\w\.\-]+)\@(\w+)(\.([\w^\_]+)){1,2}$/
interface RuleProp {
    type: 'required' | 'email' | 'password';
    message: string;
}
export type RulesProp = RuleProp[]
export default defineComponent({
    props:{
        rules: Array as PropType<RulesProp>,
        modelValue: String ,
        count:Number
    },
    inheritAttrs:false,
    setup(props, context) {
         const inputRef = reactive({
            val:props.modelValue || '',
            error:false,
            message:''
        })
        const num = ref(props.count)
        const updateValue = (e: KeyboardEvent) =>{
            const targetValue = (e.target as HTMLInputElement).value
            inputRef.val = targetValue
            console.log(targetValue);
            // context.emit('update:modelVal',targetValue)
            context.emit('update:modelValue', targetValue)
        }
        const validateEmail = () =>{
           if(props.rules) {
               const allPassed = props.rules.every(rule =>{
                   let passed = true
                   inputRef.message = rule.message
                   switch (rule.type) {
                        case 'required':
                            passed = ( inputRef.val.trim() !== '')
                            break;
                        case 'email':
                            passed = emailReg.test(inputRef.val)
                            break
                       default:
                           break;
                   }
                   return passed
               })
               inputRef.error = !allPassed
               return allPassed
           }
           return true
        }
        onMounted(() => {
            emitter.emit('form-item-created',validateEmail)
        })
        return {
            inputRef ,
            validateEmail,
            updateValue,
            num
        }

    }
})
</script>

<style>

</style>
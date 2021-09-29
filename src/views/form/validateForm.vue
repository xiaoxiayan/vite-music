<template>
    <form  class="validate-form-container" >
        <slot name="default" ></slot>
        <div class="submit-area" @click="submitForm">
            <slot name="submit">
                <button type="submit" class="btn bit-primary">提交</button>
            </slot>
         </div>   
    </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
var Emitter = require('tiny-emitter');
export let emitter = new Emitter()
// import mitt from 'mitt'
type validateFunc = () => boolean

// export const emitter = mitt<Events>()
export default defineComponent({
    emits:['form-submit'],
    setup(props, context ){
        let funcArr : validateFunc[] = []
        const submitForm = () => {
            console.log(funcArr,'aaaaa');
            const result = funcArr.map(func => func()).every(result => result)
            
            context.emit('form-submit',result)
        }
       const mittFun = (func:validateFunc ) => {
           funcArr.push(func)
           console.log(func,'==func==',funcArr)
       }
       emitter.on('form-item-created', mittFun)
       onUnmounted(() => {
           emitter.off('form-item-created',mittFun)
           funcArr = []
       })
        return{
            submitForm
        }
    }


}) 
</script>

<style>

</style>
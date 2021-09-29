<template>
  <div class="about">
    <h1>API test-Study</h1>
    <h1>{{num}}</h1>
    <h1>{{numVal}}</h1>
    <h1>{{tring}}</h1>
    <h1>dataT:{{dataT.numVal}}</h1>
    <button @click="dataT.numVal++">BTN</button>
    <button @click="numVal++">BTNOJB</button>

    <div class="childBox" style="border:red solid 2px;height:200px">
        <test-child :fatherNum="num" :fatherObj="numVal"></test-child>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, computed, toRef} from 'vue'
    
import testChild from './test-child.vue' 
export default {
  components:{
    testChild
  },
setup(){
    /*
      ref 函数，生成一个响应式对象。可以直接使用。prop传入也可以响应。 
      reactive 中生成的 对象是响应式内容也可以响应直接。但是如果你 展开 ，里面的内容就是正常的值，无法响应。可以使用
      torefs 去把 reactive 的响应式对象转换成正常的对象，但是里面的 内容，是 ref响应式的
      使用 toref 转换以后，里面的 内容虽然是响应式的。但是 在传递到子组件的时候，会发生警告。

    */
    const num = ref(0);
    const obj :any= reactive({
        numVal:0,
        tring:computed(() => { return  obj.numVal + 'aaaaa'})
    })
    const dataT = ref({
        numVal: 0

    })
    const objData = toRefs(obj)
     
      return {
      num, 
      ...objData,
      dataT
    }

    }
    

}


</script>

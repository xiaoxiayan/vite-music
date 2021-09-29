<template>
  <div>这个是 内容部分</div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: '',
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
}

</script>
<style scoped >

</style>
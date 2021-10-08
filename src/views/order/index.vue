<template>
    <div class="order">
      <!-- 三个结构 核心。左右两个菜单，下方的结算和已经点了-->
      <!-- 搜索框 -->
      <div class="top">
          <h1>头部</h1>
      </div>
      <div class="content">
        <menus :dataList="menusList"></menus>
      </div>
      <div class="foot">
          <h2>底部</h2>
      </div>
      <!-- 广告 -->
      <!-- 菜单 -->
      <!-- 底部 -->
    </div>
</template>

<script lang="ts">
import menus from './content.vue'
import { onMounted, reactive, ref, toRefs } from 'vue'
import axios from '@/server/axios'
import { httpMenuProps } from '@/server/appServe'
export default {
  name: 'order',
  components: { menus },
  setup () {
    const pageData = reactive({
      menusList: {} as httpMenuProps
    })
    axios({
      url: 'getMenuList',
      method: 'GET',
      data: { storeNo: '1001' }
    }).then((data) => {
      console.log(data)
      //   pageData.menusList = data

      // console.log(menusList,'2222');
    })

    const refData = toRefs(pageData)
    onMounted(() => {
      // foodData<foodProps , dataProps>( {'storeNo': '1001' } ).then((res) =>{
      //     // pageData.menusList = res.data.data
      // })

    })
    return {
      ...refData
    }
  }
}
</script>

<style lang="less" scoped>
.order{
    width: 100%;
    height: 100%;
    .top{
        height: 15%;
        width: 100%;
    }
    .content{
        height: 70%;
    }
    .foot{
        height: 15%;
        width: 100%;

    }
}
</style>

<template>
  <el-carousel :interval="4000" type="card" height="300px" :initial-index="0">
    <el-carousel-item v-for="item,index in bannerList" :key="index">
      <img style="width: 100%; height: 100%;" :src="item.imageUrl" />
    </el-carousel-item>
  </el-carousel>
  <div>
    <li v-for="item,index in bannerList" class="list-item" :key="index">
      <img :src="item.imageUrl" alt="">
    </li>
  </div>
</template>
<script lang='ts' setup>
// import axios from '@/server/axios'
import axios from 'axios'
import { ref, reactive, toRefs, onBeforeMount, onMounted } from 'vue'
const bannerList = ref<any[]>([{}, {}, {}])

onMounted(() => {
  axios.get('/aaa/banner').then((res) => {
    bannerList.value = res.data.banners
    console.log(res.data)
  }).catch((e) => {
    console.log(e)
  })
  // axios({
  //   method: 'get',
  //   url: '/banner',
  //   params: ''
  // }).then(res => {
  //   console.log(res)
  // })
})

</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

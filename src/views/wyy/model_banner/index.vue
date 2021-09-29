<template>
  <el-carousel :interval="4000"  type="card" height="300px" :initial-index="0" >
    <el-carousel-item v-for="item,index in bannerList" :key="index">
    
    <!-- <pre> {{ item }} </pre> -->
       <img style="width: 100%; height: 100%;" :src="item.imageUrl">
       <!-- <h1 style="color:black"> {{item.imageUrl}} </h1> -->
    </el-carousel-item>
  </el-carousel>
</template>
<script lang='ts' setup>
import axios from "@/server/axios";
import { ref, reactive, toRefs, onBeforeMount, onMounted } from 'vue'
   let bannerList = ref<any[]>([{},{},{}])
   const numTest = [{
     name:1
   },{
     name:2
   }]

  axios({
  url:'bannerList',
  method:'get',
  data:{}
  }).then(res => {
    bannerList.value  = res.banners
    console.log(bannerList,';bannerlist');
  
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

<template>
  <div class="wyy">
    <myHeader @tagclick="tagClick" />
    <my-banner class="banner" />
    <contet class="content" />
  </div>
</template>

<script lang="ts" setup>
import axios from '@/server/axios'
import { artistList } from '@/server/appServe'
import contet from './contet/index.vue'
import myHeader from './header/index.vue'
import myBanner from './model_banner/index.vue'
const getArtistLisst = (info:artistList) => {
  axios({
    url: 'artistList',
    method: 'GET',
    data: {
      cat: info.cat,
      initial: info.initial ? info.initial : ''
    }
  })
}
getArtistLisst({ cat: 1001 })
const tagClick = (index: number) => {
  console.log(index, 'emitindexs')
}
</script>

<style scoped>
 @import "./index.scss"

</style>

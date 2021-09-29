<template>
    <div class="contentBox">
        <div class="menusLife">
            <div class="list" v-for="item,index in dataList.list" :key="index" :class="active == index?'active':''" @click="listAction(index)">
                {{item.name}}
            </div>
        </div>
        <div class="menusRight">
            <div class="listDetail" v-for="item,index in dataList.list" :key="index">
                  <div class="title"> {{item.name}}</div>  
                  <div class="content">
                    <div class="detail" v-for="el,index in item.menuList" :key="index">
                        <img :src="el.pic">
                        <div></div>
                    </div>
                  </div>  
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref , PropType , reactive } from 'vue'
import { httpMenuProps } from '@/server/appServe'
//定义一个接口，设置一下props 传入的数据要有的类型，


export default defineComponent(
    {
    name:"menus",
    props:{
        dataList:{
            type : Object as PropType<httpMenuProps>,
            required: true
        }
    },
    setup(props){
        // watch(dataList, () => {
        // })
        const active = ref()
        const listAction = (index:number):void =>{
             active.value = index
        }
        const data = reactive({
            active
        })
        return {
            active,
            listAction
        }

    },
    // watch:{
    //     dataList:{
    //         handler:function(newVal,oldVal){
    //             console.log(newVal,'newVall');
    //             this.myList = JSON.parse(JSON.stringify(newVal))
    //         },
    //         deep:true
    //     }
    // },
    // data(){
    //     return {
    //         myList:[],
    //         active:''
    //     }
    // },
    // methods:{
    //     //处理一下
    //     listAction(index){
    //         //需要跳到对应的锚点，菜单颜色改变
    //         this.active = index
    //     }
    // },
    // mounted(){
    // }
}

)
</script>

<style lang="scss" scoped>
    .contentBox{
        height: 100%;
        display: flex;
        .menusLife{
            display: inline-block;
            background-color: #f9f9f9;
            padding-top: 10px;
            width: 20%;
            height:100%;
            overflow: auto;
            box-sizing: border-box;
            .list{
                padding: 10px 5px;
            }
        }
        .menusRight{
            display: inline-block;
            width: 80%;
            box-sizing: border-box;
            height: 100%;
            overflow: auto;
            .listDetail{
                .title{
                    text-align: left;
                    margin: 10px;
                }
                .content{
                .detail{
                    display: flex;
                    padding: 5px;
                    img{
                        width: 100px;
                        height: 100px;
                    }
                    }
                }
            }
        }
        .active{
            background-color: blueviolet;
        
        }
    }

</style>
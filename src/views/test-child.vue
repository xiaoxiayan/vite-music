<template>
    <div>
        <div>fathernum : {{fatherNum}}</div>
        <div>fatherObj : {{fatherObj}}</div>
    </div>
</template>

<script>
export default {
    name:'test-child',
    props:{
        fatherNum:Number,
        fatherObj:Number
        
    },
    setup(props){
        console.log('childProps==>',props)

    }
}
</script>

<style>

</style>
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group 
        appear
        name="animate_animated animate_bounce" 
        enter-active-class="animate_swing"
        leave-active-class="animate_backOutUp"
    >
        <h1 v-show="!isShow" key="1">hello</h1>
        <h1 v-show="isShow" key="2">atguigu</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test3Info',
    data(){
        return {
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: pink;
    }

</style>
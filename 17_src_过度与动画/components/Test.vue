<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="hello" :appear="true"> -->
    <transition name="hello"  appear>   //appear是让文字在浏览器一打开的时候就以动画效果显示
        <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name:'TestInfo',
    data(){
        return {
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }
    .hello-enter-active{
        animation: atguigu 1s linear;
    }

    .hello-leave-active{
        animation: atguigu 1s  linear reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(-100%)
        }
        to{
            transform: translateX(0);
        }
    }
</style>
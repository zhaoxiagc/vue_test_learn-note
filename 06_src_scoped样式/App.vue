<template>
    <Student/><hr>
    <School/><hr>
    <h1 class="demo">测试scoped的作用</h1>
</template>

<script>
//引入School组件
    import Student from "./components/Student.vue";
    import School from "./components/School.vue";
    export default {
        name:'App',
        components:{Student,School}
    }
</script>

<style scoped>
.demo{
  color:red;
}
</style>
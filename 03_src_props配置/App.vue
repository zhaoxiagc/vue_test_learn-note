<template>
    <div>
        <Student name="李四" sex="女" :age="18"/><hr>
        <Student name='张三' sex='男' :age="20"/><hr>
    </div>
</template>

<script>
//引入School组件
    import Student from "./components/Student.vue";
    export default {
        name:'App',
        components:{Student}
    }
</script>
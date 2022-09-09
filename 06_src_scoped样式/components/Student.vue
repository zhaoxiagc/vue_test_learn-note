<template>
  <div class="test">
    <h2 class="demo">学生姓名：{{name}}</h2>
    <h2 class="atguigu">学生性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'StudentInfo',
    data(){
        return{
            name:'张三',
            sex:'男'
        }
    }
}
</script>

<style lang="less">
.test{
  background-color: pink;
  .atguigu{
    font-size: 40px;
  }
}
</style>
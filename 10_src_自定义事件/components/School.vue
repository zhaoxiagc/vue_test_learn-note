<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">点我将学校名字传给App组件</button>
  </div>
</template>

<script>
export default {
    name:'SchoolInfo',
    data(){
        return{
            name:'尚硅谷atguigu',
            address:'北京昌平'
        }
    },
    props:['getSchoolName'],
    methods:{
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
    }
}
</script>

<style scoped>
.school{
  background-color: skyblue;
  padding:5px;
}
</style>
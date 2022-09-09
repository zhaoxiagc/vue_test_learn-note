<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
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
    mounted(){
      //console.log('School',window.x)
      //console.log('School',this.x)
      /* this.x.$on('hello',(data) => {
          console.log('我是School组件，收到了数据',data)
      }) */
      this.$bus.$on('hello',(data) => {
          console.log('我是School组件，收到了数据',data)
      })
    },
    beforeDestroy(){
      this.$bus.$off('hello')
    }
}
</script>

<style scoped>
.school{
  background-color: skyblue;
  padding:5px;
}
</style>
<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'SchoolInfo',
    data(){
        return{
            name:'尚硅谷atguigu',
            address:'北京昌平'
        }
    },
    mounted(){
      /* this.$bus.$on('hello',(data) => {
          console.log('我是School组件，收到了数据',data)
      }) */
      
      /* this.pubId = pubsub.subscribe('hello',function(msgName,data){
        console.log(this)   //这里的输出是undefined，因为调用了其他的库
        console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
      }) */

      pubsub.subscribe('hello',(msgName,data)=>{
        console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
      })
    },
    beforeDestroy(){
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
.school{
  background-color: skyblue;
  padding:5px;
}
</style>
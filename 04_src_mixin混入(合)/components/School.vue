<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import { mix } from "../mixin.js"
import { mix2 } from "../mixin.js"
export default {
    name:'SchoolInfo',
    data(){
        return{
            name:'尚硅谷',
            address:'北京昌平'
        }
    },
    mixins:[mix,mix2],
    mounted(){
      console.log('你好呀，学校信息！！！！！！');
    }

}
</script>
<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
//引入一个mix
import { mix } from "../mixin.js"
import { mix2 } from "../mixin.js"
export default {
    name:'StudentInfo',
    data(){
        return{
            name:'张三',
            sex:'男'
        }
    },
    mixins:[mix,mix2]
}
</script>
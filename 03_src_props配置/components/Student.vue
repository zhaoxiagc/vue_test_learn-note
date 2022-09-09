<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="updateAge">点我更新年龄数据</button>
  </div>
</template>

<script>
export default {
    name:'StudentInfo',
    data(){
        return{
            msg:'我是一个尚硅谷的学生',
            myAge:this.age
           /*  name:'张三',
            sex:'男',
            age:18, */
        }
    },
    methods: {
      updateAge(){
        this.myAge++
      }
    },

    //简单声明接收
    props:['name','sex','age']    


    //接收的同时对数据进行类型限制
    /* props:{
      name:String,
      age:Number,
      sex:String
    } */

    //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
   /*  props:{
      name:{
        type:String,       //name的类型是字符串
        required:true,     //名字是必要的
      },
      age:{
        type:Number,
        default:99        //默认值
      },
      sex:{
        type:String,
        required:true
      }
    } */
}
</script>
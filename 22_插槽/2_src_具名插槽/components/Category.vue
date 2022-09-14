<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 1.最原始的写法，如果项目和需要更改的地方变多，代码就会冗余，后期维护就会更复杂，所以不建议这么写 -->
    <!-- <ul v-show="title != '美食'">
        <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul> -->
    <!-- <img v-show="title === '美食'" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""> -->
    
    <!-- 2.定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
    <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
  </div>
</template>

<script>
export default {
    name:'CategoryInfo',
    // props:['listData','title']
    props:['title']
}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
text-align: center;
background-color: orange;
}
img,video{
    width: 100%;
}
</style>
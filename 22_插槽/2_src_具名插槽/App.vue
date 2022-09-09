<template>
  <div class="container">
    <!-- <Category title="美食" :listData="foods"> -->
    <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a  slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>
    <!-- <Category title="游戏" :listData="games"> -->
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>
    <!-- <Category title="电影" :listData="films"> -->
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!-- <template  slot="footer"> -->
      <template  v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
      </div>
      <h4 slot="footer">欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category.vue'
  export default {
      name: "App",
      components:{ Category },
      data() {
        return {
          foods:['火锅','烧烤','小龙虾','牛排','大盘鸡'],
          games:['红色警戒','穿越火线','超级玛丽','王者荣耀'],
          films:['《恶作剧之吻》','《暮光之城》','《你好李焕英》','《拆弹专家》']
        }
      },
  }
</script>

<style>
  .container,.foot,h4{
    display: flex;
    justify-content: space-around;
  }
</style>


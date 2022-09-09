
/*
    该文件是整个项目的入口文件
*/

//Vue2的写法（用render函数引入模板解析器，残缺的Vue打包后的大小小于完整Vue（完整Vue包含模板解析器）

//引入Vue
import Vue from 'vue'    //注意：这里引入的是残缺版本的Vue，完整版本的引入方式如下
//import Vue from 'vue/dist/vue'

//引入App组件，它是所有组件的父组件
import App from './App.vue'

//将App组件放入容器中
new Vue({
    el:'#app',
    render: h => h(App),    //因为引入的Vue是精简版的，所以使用这个render函数来创建内容
})


/* 
    关于不同版本的Vue：
        1.vue.js与vue.runtime.xxx.js的区别：
        （1）vue.js是完整版的Vue，包含：核心功能+模板解析器
        （2）vue.runtime.xxx.js是运行版本的Vue，只包含：核心功能，没有模板解析器

        2.因为Vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
        render函数接收到的createElement函数去指定具体内容

*/



/* //Vue3的写法
//引入Vue
import { createApp } from 'vue'    //注意：这里引入的是残缺版本的Vue，完整版本的引入方式如下
//import { createApp } from 'vue/dist/vue'

//引入App组件，它是所有组件的父组件
import App from './App.vue'

//将App组件放入容器中
createApp(App).mount('#app') */

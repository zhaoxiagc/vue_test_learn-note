//引入Vue
import Vue from "vue";
//引入App
import App from './App';

//关闭Vue的生产提示
Vue.config.productionTip = false;

//window.x = {a:1,b:2}    //不建议这么写
//VueComponent.prototype.x = {a:1,b:2}    //也不能往VueComponent原型身上写


//VueComponent.prototype._proto_ === Vue.prototype
//组件的实例对象（vc）可以访问到Vue原型上的属性、方法
//Vue.prototype.x = {a:1,b:2}  
console.log(Vue.prototype);

/* const Demo = Vue.extend({})    //demo是一个组件
const d = new Demo()    //d是一个组件的实例对象 

Vue.prototype.x = d */

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this    //安装全局事件总线
    }
});
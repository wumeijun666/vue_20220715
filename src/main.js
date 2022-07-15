/***
 * 该文件是整个项目的入口
 */
// 引入vue
import Vue from 'vue'
// 他是所有组件的父组件
import App from './App.vue'
// 关闭vue生产提示
Vue.config.productionTip = false
// 创建vue实例对象 -- vm
new Vue({
  el:'#app',
  //下面代码后面解释，完成了这个功能：将app放入容器中
  render: h => h(App),
})

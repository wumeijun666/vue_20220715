/***
 * 该文件是整个项目的入口
 */
// 引入vue
import Vue from 'vue/dist/vue'
// 他是所有组件的父组件
import App from './App.vue'
// 关闭vue生产提示
Vue.config.productionTip = false
// 创建vue实例对象 -- vm
/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/
new Vue({
  el:'#app',
  render:h=>h(App)
  // template:`<App></App>`,
  //下面代码后面解释，完成了这个功能：将app放入容器中
  // components:{App}
})

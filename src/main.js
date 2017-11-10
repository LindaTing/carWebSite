// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import $ from 'jquery'
import 'element-ui/lib/theme-default/index.css'

//import 'fullpage/jquery.fullPage.min.js'
//require('./assets/fullpage/jquery.fullPage.css')

//import store from './store/'


import App from './App'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})
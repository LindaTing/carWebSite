import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/home/Home'
import Product from './../components/product/Product'
import Partners from './../components/partners/Partners'
import Function from './../components/function/Function'
import Productmore from './../components/productmore/Productmore'
import Aboutus from './../components/aboutus/Aboutus'

Vue.use(Router)

export default new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if(to.hash) {
			return {
				selector: to.hash
			}
		}
	},
	base:"/org/",
	routes: [{ //用重定向设置默认路由
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/product',
			name: 'product',
			component: Product
		},
		{
			path: '/function',
			name: 'function',
			component: Function
		},
		{
			path: '/productmore',
			name: 'productmore',
			component: Productmore
		},
		{
			path: '/partners',
			name: 'Partners',
			component: Partners
		},
		{
			path: '/aboutus',
			name: 'Aboutus',
			component: Aboutus
		},

	]
})
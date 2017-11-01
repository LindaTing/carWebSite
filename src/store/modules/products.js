//import axios from "axios"
//improt type from "../type.js"

/*产品数据*/
const state = {
	all : {}
}
/*获取产品数据*/
const getters = {
	allProducts : state => state.all
}
/*操作数据*/
const actions = {
	getAllProdctts({commit}){
		axios.get("../data/products.json").then(res => {
			console.log(res)
			console.log(commit)
			commit("ALL_PRODUCTS",res.data)
			
		}).catch(err => {
			
		})
	}
}
/*定义mutations，处理状态（数据的改变）*/
const mutations = {
//	[ALL_PRODUCTS]({state}){
//		state.all = products
//	}
}
/*导出*/
export default {
  state,
  getters,
  actions,
  mutations
}
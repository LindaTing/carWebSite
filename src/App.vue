<template>
	<div id="app">
		<v-head></v-head>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import Head from './components/head/Head.vue'
	import Footer from './components/footer/Footer.vue'
	export default {
		name: 'app',
		components: {
			"v-head": Head,
			"v-footer": Footer
		}
	}
</script>

<style>
	/*@import "common.less";*/
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
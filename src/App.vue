<template>
	<div class="app">
		<router-link to="/pin"></router-link>
		<router-view></router-view>
		<pin></pin>
	</div>
</template>

<script>
	
	import pin from './components/pin'
	export default {
	
		data(){
			return{}
		},
		components:{
			pin,
		}
	}
</script>

<style>

</style>
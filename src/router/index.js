import Vue from 'vue'
import Router from 'vue-router'
import Pin from '@/components/pin'

Vue.use(Router)

const router=[
							
	{path:"/",component:Pin},
	{path:"/pin",component:Pin},
]
export default new Router({
 	router
})

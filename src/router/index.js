import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Shopcart = () => import('../views/shopcart/shopcart.vue')
const Profile = () => import('../views/profile/profile.vue')

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

const routes = [	
	{
		path:'',
		redirect:'/home',
		component:HomePage
	},
	{
		path:'/home',
		component:HomePage
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/shopcart',
		component:Shopcart
	},
	{
		path:'/profile',
		component:Profile
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

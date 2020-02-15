<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<Recommend-view :recommends="recommends"></Recommend-view>
		<feature-view></feature-view>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navBar/navBar.vue'
	// import Swiper from '../../components/common/swiper/Swiper.vue'
	// import SwiperItem from '../../components/common/swiper/SwiperItem.vue'
	import HomeSwiper from './childcomponents/homeSwiper.vue'
	import RecommendView from './childcomponents/homeRecommendView.vue'
	import FeatureView from './childcomponents/featureView.vue'
	import {getHomeMultidata} from '../../network/home.js'
	export default{
		name:'home',
		components:{
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatureView
		},
		data(){
			return{
				banners:[],
				recommends:[]
			}
		},
		created() {
			getHomeMultidata().then(res => {
				// this.banners = res.data.data.banner.list;
				// this.recommends = res.data.data.recommend.list;
				 this.banners = res.data.data.banner.list;
				 this.recommends = res.data.data.recommend.list;
			})
		}
	}
</script>

<style>
	#home{
		padding-top: 2.75rem;
	}
	.home-nav{
		background-color: hotpink;
		color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
	}
</style>

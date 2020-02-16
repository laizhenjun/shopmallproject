<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<Recommend-view :recommends="recommends"></Recommend-view>
		<feature-view></feature-view>
		<tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
		<goods-list :goods="showGoods"></goods-list>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navBar/navBar.vue'
	// import Swiper from '../../components/common/swiper/Swiper.vue'
	// import SwiperItem from '../../components/common/swiper/SwiperItem.vue'
	import HomeSwiper from './childcomponents/homeSwiper.vue'
	import RecommendView from './childcomponents/homeRecommendView.vue'
	import FeatureView from './childcomponents/featureView.vue'
	import TabControl from '../../components/content/TabControl/tabControl.vue'
	import {getHomeMultidata,getHomeGoods} from '../../network/home.js'
	import GoodsList from '../../components/content/goods/goodList.vue'
	export default{
		name:'home',
		components:{
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList
		},
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				currentType:'pop'
			}
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		created() {
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		methods:{
			tabClick(index){
				switch(index){
					case 0:
						this.currentType = 'pop'
					break
					case 1:
						this.currentType = 'new'
					break
					case 2:
						this.currentType = 'sell'
					break
				}
			},
			getHomeMultidata(){
				getHomeMultidata().then(res => {
					// this.banners = res.data.data.banner.list;
					// this.recommends = res.data.data.recommend.list;
					 this.banners = res.data.data.banner.list;
					 this.recommends = res.data.data.recommend.list;
				})
			},
			getHomeGoods(type){
				const page = this.goods[type].page + 1
				getHomeGoods(type,page).then( res => {
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page += 1
				})
			}
			
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
	.tab-control{
		position: sticky;
		top: 2.75rem;
		bottom: 3.0625rem;
		z-index: 9;
	}
</style>

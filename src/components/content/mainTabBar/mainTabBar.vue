<template>
	<tab-bar>
		<tab-bar-item path='/home' activeColor='red'>
		<img slot="item-icon" src="../../../assets/img/tabbar/page.jpg"/>
		<img slot="item-icon-active" src="../../../assets/img/tabbar/page_red.jpg"/>
		<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path='/shopcart' activeColor='red'>
		<img slot="item-icon" src="../../../assets/img/tabbar/shop.jpg"/>
		<img slot="item-icon-active" src="../../../assets/img/tabbar/shop_red.jpg"/>
		<div slot="item-text">购物车</div>	
		</tab-bar-item>
		<tab-bar-item path='/category' activeColor='red'>
		<img slot="item-icon" src="../../../assets/img/tabbar/category.jpg"/>
		<img slot="item-icon-active" src="../../../assets/img/tabbar/category_red.jpg"/>
		<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path='/profile' activeColor='red'>
		<img slot="item-icon" src="../../../assets/img/tabbar/me.jpg"/>
		<img slot="item-icon-active" src="../../../assets/img/tabbar/me_red.jpg"/>
		<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from '../../common/tabBar/tabBar.vue'
	import TabBarItem from '../../common/tabBar/tabBarItem.vue'
	export default{
		name:'mainTabBar',
		components:{
			TabBar,
			TabBarItem,
		}
	}
</script>

<style>
</style>

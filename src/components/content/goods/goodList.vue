<template>
	<div class="goods">
		<goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-list-item>
	</div>
</template>
<script>
	import GoodsListItem from './goodListItem.vue'
	export default{
		name:'goodsList',
		components:{
			GoodsListItem
		},
		props:{
			goods:{
				type:Array,
				default(){
					return [];
				}
			}
		}
	}
</script>

<style>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0.125rem;
	}
</style>

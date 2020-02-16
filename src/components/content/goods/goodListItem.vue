<template>
	<div class="goods-item">
		<img :src="goodsItem.show.img" />
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'goodsListItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style>
	.goods-item{
		padding-bottom: 2.5rem;
		position: relative;
		width: 48%;
	}
	.goods-item img{
		width: 100%;
		border-radius: 0.3125rem;
	}
	.goods-info{
		font-size: 0.75rem;
		position: absolute;
		bottom: 0.3125rem;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}
	.goods-info p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 0.1875rem;
	}
	.goods-info .price{
		color: #FF69B4;
		margin-right: 1.25rem;
	}
	.goods-info .collect{
		position: relative;
	}
	.goods-info .collect::before{
		content: '';
		position: absolute;
		left: -0.9375rem;
		top: -0.0625rem;
		width: 0.875rem;
		height: 0.875rem;
		background: url("../../../assets/img/common/collect.svg") 0 0/0.875rem 0.875rem;
	}
</style>

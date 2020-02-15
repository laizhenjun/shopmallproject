<template>
	<div class="recommend">
	<div v-for="item in recommends" class="recommend-item">
		<a :href="item.link">
			<img :src="item.image"/>
			<div>{{item.title}}</div>
		</a>
	</div>
	</div>
</template>

<script>
	export default{
		name:'homeRecommendView',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 0.75rem;
		padding: 0.9375rem 0rem 1.25rem;
		border-bottom: 0.5rem solid #eee;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend-item img{
		width: 4.0625rem;
		height: 4.0625rem;
		margin-bottom: 0.625rem;
	}
</style>

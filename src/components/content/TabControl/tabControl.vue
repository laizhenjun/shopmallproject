<template>
	<div class="tab-control">
		<div v-for="(item , index) in titles" :key='index' class="tab-control-item" :class="{active:index === currentIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentIndex: 0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style>
	.tab-control{
		display: flex;
		text-align: center;
		font-size: 0.9375rem;
		height: 2.5rem;
		line-height: 2.5rem;
		background-color: #FFFFFF;
	}
	.tab-control-item{
		flex: 1;
	}
	.tab-control-item span{
		padding: 0.3125rem;
	}
	.active{
		color: #FF69B4;
	}
	.active span{
		border-bottom: 0.1875rem solid #FF69B4;
	}
</style>

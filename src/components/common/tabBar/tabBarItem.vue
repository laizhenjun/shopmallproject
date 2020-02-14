<template>
	<div class="tab-bar-items" @click="itemClick">
	<div v-if="!isActive"><slot name="item-icon"></slot></div>
	<div v-else><slot name="item-icon-active"></slot></div>
	<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default{
		name:"tabBarItem",
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		data(){
         return{
			// isActive:false,			
		}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor} : {}
			}
		},
		methods:{
		itemClick(){
			// this.$router.replace(this.path)
			this.$router.push(this.path).catch(err => { console.log(err) })
		}
		}
		
	}
</script>

<style>
	.tab-bar-items{
		flex: 1;
		text-align: center;
		height: 3.0625rem;
	}
	.tab-bar-items img{
		width: 1.25rem;
		height: 1.25rem;
	}
</style>

<template>
	<swiper>
		<swiper-item v-for="item in banners">
			<a :href="item.link">
				<img :src="item.image" />
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	// import {Swiper,SwiperItem} from '../../components/common/swiper'
	import Swiper from '../../../components/common/swiper/Swiper.vue'
	import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
	export default{
		name:'homeSwiper',
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
	}
</script>

<style>
</style>

<template>
	<div id="tab-bar">
	<slot></slot>
	</div>
	<!-- <router-view/> -->
</template>

<script>
</script>

<style>
	#tab-bar{
			display: flex;
			background-color: #f6f6f6;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			box-shadow: 0rem -0.1875rem 0.0625rem rgb(100,100,100,0.1);
		}
	/* 	body{
			padding: 0;
			margin: 0;
		} */
</style>

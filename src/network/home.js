import {request} from "./request.js";
export function getHomeMultidata(){
	return request({
		url:'/home/multidata'
	})
	.catch(err => {
		console.log(err)
	})
}	
export function getHomeGoods(type,page){
	return request({
		url:'/home/data',
		params:{
			type,
			page
		}
	})
	.catch(err => {
		console.log(err)
	})
}

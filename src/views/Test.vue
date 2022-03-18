<template>
	<div class="widget">
		<div v-if="activeItems && activeItems.length>0">
			<ul>
				<li v-for="item in activeItems" :key="item.id">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>

export default {


	data(){
		return {
			loading:true,
			list:{
				'John':true,
				'Jane':true,
				'Bob':false
			},
		}
	},
	computed:{
		activeItems(){
			const keys = Object.keys(this.list);
			const activeNames = keys?.filter(keyName => this.list[keyName] === true);

			const data = activeNames?.map((activeName,index) => {

				return {
					name: activeName,
					active: true,
					id: ++index
				};
			});
			
			return data;
		}
	}
}
</script>


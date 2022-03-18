<template>
	<div class="chat-body">
		<div class="chat-scroll" ref="chatScroll" >
			<ul class="list-unstyled" >
				<!-- <li class="chat-date">Today</li> -->

				<li  
				v-for="data in chatData"
				:key="data.id"
				class="media"
				:class="data.sender.role_id == 2?'sent':'received'"
				>
					<div class="media-body">
						<div class="msg-box">
							<div>
								<p>{{data.message}} </p>
								<ul class="chat-msg-info">
									<li>
										<div class="chat-time">
											<span>{{getTime(data.created_at)}} </span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import moment from 'moment';

	export default{
		name:"ChatBodyBraider",
		props:{
			chatData: Array
		},
		methods:{
			getTime(dateTime){

				return moment(dateTime).format('LTS');
			},
			
		},
		updated(){
			var element = this.$refs.chatScroll;

			element.scrollTop = element.scrollHeight;
			
		}

	}
</script>
<style>
	.chat-window .chat-scroll {
		min-height: 300px;
		max-height: calc(90vh - 254px);
		overflow-y: auto;
	}
</style>
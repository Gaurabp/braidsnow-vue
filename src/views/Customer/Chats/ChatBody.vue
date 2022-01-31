<template>
	<div class="chat-body">
		<div class="chat-scroll" ref="chatScroll">
			<ul class="list-unstyled">
				<!-- <li class="chat-date">Today</li> -->

				<li  
				v-for="data in chatData"
				:key="data.id"
				class="media"
				:class="data.receiver.role_id == 2?'sent':'received'"
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
				<li  
				class="media received"
				v-if="typeing && userId == currentWindow.id"
				>
					<div class="media-body">
						<div class="msg-box">
							<div>
								<p>{{typeData}} </p>
								
							</div>
						</div>
						<div class="msg-typing">
<span></span>
<span></span>
<span></span>
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
		name:"ChatBody",
		props:{
			chatData: Array,
			typeing: Boolean,
			typeData: String,
			userId: Number,
			currentWindow: Object
		},
		methods:{
			getTime(dateTime){

				return moment(dateTime).format('LTS');
			}
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
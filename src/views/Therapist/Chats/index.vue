<template>
	<MenuComponent/>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12">
					<div 
					class="chat-window"
					:class="chatActive == true? 'chat-slide': '' "
					v-if="contactData.length"
					ref="chatWindow">
						<div class="chat-cont-left">
							<div class="chat-header">
								<span>Contacts</span>
							</div>
						
							<div class="chat-users-list">
								<div class="chat-scroll">
									<a href="#!"  class="media" v-for="data in contactData" :key="data.id" @click="getChat(data.customer)">
										<div class="media-img-wrap">
											<div class="avatar">
												<img :src="basePath+data?.customer?.avatar" alt="User Image" class="avatar-img rounded-circle">
											</div>
										</div>
										<div class="media-body">
											<div>
												<div class="user-name"> {{data?.customer?.name}} </div>
												
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div class="chat-cont-right">
							<div class="chat-header">
								<a id="back_user_list" href="#!" class="back-user-list" @click="backTo()">
									<i class="material-icons">chevron_left</i>
								</a>
								<div class="media">
									<div class="media-img-wrap">
										<div class="avatar">
											<img :src="basePath+currentWindow.avatar" alt="User Image" class="avatar-img rounded-circle">
										</div>
									</div>
									<div class="media-body">
										<div class="user-name">{{currentWindow.name}} </div>
									<!-- 	<div class="user-status">online</div> -->
									</div>
								</div>
								<div class="chat-options"></div>
							</div>
							<ChatBody :chat-data="chatData"/>
							<div class="chat-footer">
								<div class="input-group">
									<!-- <div class="input-group-prepend">
										<div class="btn-file btn">
											<i class="fa fa-paperclip"></i>
											<input type="file">
										</div>
									</div> -->
									<input 
									type="text" 
									class="input-msg-send form-control" 
									placeholder="Type something"
									v-model="newMessage"
									v-on:keyup.enter="sendMessage"
									/>
									<div class="input-group-append">
										<button type="button" @click="sendMessage" class="btn msg-send-btn">
											<i class="fab fa-telegram-plane"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-else>
						<center>
							
							<h2>No Contacts Available</h2>
						</center>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <Loader :isLoading="isLoading"/> -->
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import AssetsPath from '@/utils/AssetsPath'
	import BaseUrl from '@/utils/BaseUrl'
	import moment from 'moment'
	import Auth from '@/models/Auth'
	// import Loader from '@/components/Loader';
	//import FooterComponent from '@/components/Layout/Footer';
	import ChatBody from './ChatBodyBraider';
	import Pusher from 'pusher-js';
	import { 
		chatContact,
		chatHistory,
		chatCreate 
	} from '@/services/dashboardService';
	import Echo from 'laravel-echo';

	export default {
		name:'Booking',
		components:{
			MenuComponent,
			// Loader,
			//FooterComponent,
			ChatBody
		},
		data(){
			return {
				isLoading:false,
				contactData:[],
				chatData:[],
				currentWindow:"",
				newMessage:"",
				chatActive:true
			}
		},
		watch:{
			newMessage(val){

				let channel = window.Echo.private('chat')

				if (val) {
					setTimeout( () => {
						channel.whisper('typing', {
							user: this.auth.id,
							data: val,
							typing: true
						})
					}, 300)
				}else{
					setTimeout( () => {
						channel.whisper('typing', {
							user: this.auth.id,
							data: val,
							typing: false
						})
					}, 300)
				}
			}
		},
		computed:{
			basePath(){
				return AssetsPath;
			},
			baseUrl(){
				return BaseUrl;
			},
			today(){
				return moment().format('MMMM/DD/YYYY');
			},
			todayDay(){
				return moment().format('dddd');
			},
			auth(){
				
				return  Auth.query().first();
			},
			token(){
				
				return this.auth.api_token;
			},
			
		},
		async mounted(){


			window.Echo = new Echo({
				broadcaster: 'pusher',
				key: '53aa56aff5eb2e79136f',
				cluster: 'mt1',
				forceTLS: false,
				authEndpoint: this.baseUrl+'broadcasting/auth'
			});

			window.Echo.connector.pusher.config.auth.headers['Authorization'] = 'Bearer '+this.token;

			Pusher.logToConsole = false;
			var pusher = new Pusher('53aa56aff5eb2e79136f', {
				cluster: 'mt1'
			});

		

			await chatContact(this.token).then(async res => {

				this.contactData =  await res.data;

				if (this.contactData.length) {

					await this.getChat(this.contactData[0].customer);
				}
				
			})
			
			/*window.Echo.join(`contact.40`)
			.here((users) => {
				console.log(users,"here");
			})
			.joining((user) => {
				console.log(user.name);
			})
			.leaving((user) => {
				console.log(user.name);
			})
			.error((error) => {
				console.error(error);
			});*/

			var channel = pusher.subscribe('contact.'+this.auth.id);
			channel.bind('contact-event.'+this.auth.id, (data) => {
				//console.log(data.message);
				this.chatData.push(data.message);
			});
		},
		methods:{
			backTo(){
				this.chatActive = false;
			},
			getChat(user){

				this.chatActive = true;
				this.currentWindow = user;

				chatHistory(this.token,{customer_id:user.id}).then(res => {
					this.chatData = res.data;

					//console.log(this.chatData,"chatdata");
				})
			},
			sendMessage(){

				let channel = window.Echo.private('chat')

				chatCreate(this.token,{
					receiver_id: this.currentWindow.id,
					message: this.newMessage
				}).then(() => {
					channel.whisper('typing', {
						user: this.auth.id,
						data: null,
						typing: false
					});
					this.newMessage = "";
					this.getChat(this.currentWindow);
				})
			}
		}
		
		
	}
</script>
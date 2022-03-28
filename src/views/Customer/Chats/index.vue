<template>
	<MenuComponent/>
	<section class="">
	<div class="container" style=" padding-right: 0px; padding-left: 0px;">
  <div class="customerDashboard">
	<img src="assets/dashbord.png" style="width: 100%;">	
	<div class="centered" style=" position: absolute;top: 20%;left: 50%;transform: translate(-50%, -50%);"><h1 style="color: #ffffff;font-family: &quot;Nunito Sans&quot; !important; font-size: 60px; font-weight: 100; text-align: center;">Chatboard</h1></div>
	<div class="centered" style="font-size: 30px; color: #feaa00;position: absolute;top: 25%;left: 50%;transform: translate(-50%, -50%);">SubHeader Title</div>
        </div>
        </div>
	</section>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12">
					<div class="chat-window"
					v-if="contactData.length"
					:class="chatActive == true? 'chat-slide': '' "
					>
						<div class="chat-cont-left">
							<div class="chat-header">
								<span>Contacts</span>
							</div>
							<!-- <form class="chat-search">
								<div class="input-group">
									<div class="input-group-prepend">
										<i class="fas fa-search"></i>
									</div>
									<input type="text" class="form-control" placeholder="Search">
								</div>
							</form> -->
							<div class="chat-users-list">
								<div class="chat-scroll">
									<a href="#!"  class="media" v-for="data in contactData" :key="data.id" @click="getChat(data.braider)">
										<div class="media-img-wrap">
											<div class="avatar">
												<img :src="basePath+data?.braider?.avatar" alt="User Image" class="avatar-img rounded-circle">
											</div>
										</div>
										<div class="media-body">
											<div>
												<div class="user-name"> {{data?.braider?.name}} </div>
												
											</div>
											<div>
												<!-- <div class="last-chat-time block">2 min</div> -->
												<!-- <div class="badge badge-success badge-pill">15</div> -->
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
							<ChatBody 
							:chat-data="chatData" 
							:typeing="typeing" 
							:type-data="typeData"
							:user-id="userId"
							:current-window="currentWindow"
							/>
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
	<Loader :isLoading="isLoading"/>
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import AssetsPath from '@/utils/AssetsPath'
	import moment from 'moment'
	import Auth from '@/models/Auth'
	import Loader from '@/components/Loader';
	import ChatBody from './ChatBody';
	import Pusher from 'pusher-js';
	import { 
		chatContact,
		chatHistory,
		chatCreate 
	} from '@/services/CustomerServices';
	import Echo from 'laravel-echo';
	import BaseUrl from '@/utils/BaseUrl'

	export default {
		name:'Booking',
		components:{
			MenuComponent,
			Loader,
			ChatBody
		},
		data(){
			return {
				isLoading:false,
				contactData:[],
				chatData:[],
				currentWindow:"",
				newMessage:"",
				chatActive:true,
				typeing:false,
				typeData:"",
				userId:""
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

			if (this.$route?.params?.id) {

				await chatCreate(this.token,{
					receiver_id: this.$route?.params?.id,
					message: 'hi'
				});
			}

			Pusher.logToConsole = false;
			var pusher = new Pusher('53aa56aff5eb2e79136f', {
				cluster: 'mt1'
			});

			window.Echo = new Echo({
				broadcaster: 'pusher',
				key: '53aa56aff5eb2e79136f',
				cluster: 'mt1',
				forceTLS: false,
				authEndpoint: this.baseUrl+'broadcasting/auth'
			});

			window.Echo.connector.pusher.config.auth.headers['Authorization'] = 'Bearer '+this.token;

			chatContact(this.token).then(async res => {

				this.contactData =  res.data;
				if (this.contactData.length && this.$route?.params?.id) {

					const braider = this.contactData.filter(data => data.braider.id == this.$route?.params?.id);

					this.getChat(braider[0].braider);

				}else if (this.contactData.length) {

					this.getChat(this.contactData[0].braider);
				}
				//console.log(this.contactData);
			}).catch(err => {
				console.log(err);
			})

			var channel = pusher.subscribe('contact.'+this.auth.id);
			channel.bind('contact-event.'+this.auth.id, (data) => {
				console.log(data.message);
				this.chatData.push(data.message);
			});

			window.Echo.private('chat')
			.listenForWhisper('typing', (e) => {

				this.typeing = e.typing;
				this.typeData = e.data;
				this.userId = e.user;
				console.log(e)
			})

		},
		methods:{
			backTo(){
				this.chatActive = false;
			},
			getChat(user){

				this.chatActive = true;
				this.currentWindow = user;

				chatHistory(this.token,{braider_id:user.id}).then(res => {
					this.chatData = res.data;

					//console.log(this.chatData,"chatdata");
				})
			},
			sendMessage(){

				chatCreate(this.token,{
					receiver_id: this.currentWindow.id,
					message: this.newMessage
				}).then(() => {
					this.newMessage = "";
					this.getChat(this.currentWindow);
				})
			}
		}
		
		
	}
</script>
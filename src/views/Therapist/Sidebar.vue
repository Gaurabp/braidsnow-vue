<template>
	<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

					<div class="profile-sidebar">
						<div class="widget-profile pro-widget-content">
							<div class="profile-info-widget">
								<router-link :to="{name:BraiderDashboard}" class="booking-pro-img ">
									
									<div class="avatar " :class="!auth.completed_stripe_onboarding && auth.is_payment_online?'avatar-offline':'avatar-online'">

										<img 
										class="avatar-img rounded-circle" 
										:src="basePath+auth.avatar" 
										:alt="auth.name">

									</div>
							
								</router-link>
								<div class="profile-det-info">
									<h3>{{ auth.name}} </h3>

									<div class="customer-details" v-if="!auth.completed_stripe_onboarding && auth.is_payment_online">
									<h5 class="mb-0">Account Deactive</h5>
									<button 
									type="button" 
									class="btn btn-primary submit-btn" 
									v-if="isLoading"
									>Loading...</button>
									<button 
									type="button" 
									class="btn btn-primary submit-btn" 
									v-else
									@click="connectStripe">Please Activate Your Account</button>
									</div>
									<div class="customer-details" v-else>
										<a href="#" @click="copyText($event)">Click here to copy link</a>
									</div>
								</div>
							</div>
						</div>

						<div class="dashboard-widget">
							<nav class="dashboard-menu">
								<ul>
									<li>
										<a href="#!" @click.stop.prevent="shareProfile(auth)">
											<i class="fas fa-share-alt"></i>
											<span>Share Profile</span>
										</a>
										
									</li>
									<li>
										<router-link :to="{name:'ChatBraider'}">
											<i class="fas fa-comment"></i>
											<span>Message</span>
										</router-link>
										
									</li>
									<li v-bind:class="{ active: this.$route.name == 'BraiderDashboard' }">
										<router-link :to="{name:'BraiderDashboard'}">
											<i class="fas fa-columns"></i>
											<span>Dashboard</span>
										</router-link>
										
									</li>
									<li v-bind:class="{ active: this.$route.name == 'Appointments' }">
										<router-link :to="{name:'Appointments'}">
											<i class="fas fa-calendar-check"></i>
											<span>Appointments</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'AppointmentsCalendar' }">
										<router-link :to="{name:'AppointmentsCalendar'}">
											<i class="fas fa-calendar"></i>
											<span>Appointments Calendar</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'MyCustomer' }">
										<router-link :to="{name:'MyCustomer'}">
										<i class="fas fa-user-injured"></i>
										<span>My customers</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'Service' }">
										<router-link :to="{name:'Service'}">						
										<i class="fas fa-blog"></i>
										<span>Services</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'Portfolio' }">
										<router-link :to="{name:'Portfolio'}">						
										<i class="fas fa-blog"></i>
										<span>PortFolio</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'AdvanceSchedule' }">
										<router-link :to="{name:'AdvanceSchedule'}">
										<i class="fas fa-hourglass-start"></i>
										<span>Schedule Preference</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'WorkingDay' }">
										<router-link :to="{name:'WorkingDay'}">
										<i class="fas fa-file-invoice"></i>
										<span>Working Days</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'Reviews' }">
										<router-link :to="{name:'Reviews'}">
										<i class="fas fa-star"></i>
										<span>Reviews</span>
										</router-link>
									</li>
									
									<li v-bind:class="{ active: this.$route.name == 'TheraphistProfileSetting' }">
										<router-link :to="{name:'TheraphistProfileSetting'}">
										<i class="fas fa-user-cog"></i>
										<span>Profile Settings</span>
										</router-link>
									</li>
									<!-- <li v-bind:class="{ active: this.$route.name == 'AccountDetail' }">
										<router-link :to="{name:'AccountDetail'}">
									
										<i class="fa fa-credit-card" aria-hidden="true"></i>
										<span>Account Detail</span>
										</router-link>
									</li> -->
									<li v-bind:class="{ active: this.$route.name == 'SocialMedia' }">
										<router-link :to="{name:'SocialMedia'}">
										<i class="fas fa-share-alt"></i>
										<span>Social Media</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'SendCustomEmail' }">
										<router-link :to="{name:'SendCustomEmail'}">
										<i class="fas fa-envelope"></i>
										<span>Email</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'Coupon' }">
										<router-link :to="{name:'Coupon'}">
										<i class="fas fa-gift"></i>
										<span>Coupon</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'TheraphistChangePassword' }">
										<router-link :to="{name:'TheraphistChangePassword'}">
										<i class="fas fa-lock"></i>
										<span>Change Password</span>
										</router-link>
									</li>
									<li v-bind:class="{ active: this.$route.name == 'CancelAccount' }">
										<router-link :to="{name:'CancelAccount'}">
										<i class="fas fa-power-off"></i>
										<span>Cancel Account</span>
										</router-link>
									</li>
									<li>
										<a href="javascript:;" @click="onLogout">
											<i class="fas fa-sign-out-alt"></i>
											<span>Logout</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
<div class="modal fade custom-modal" id="paymentModal2" >
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Share</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" ref="closePaymentModal">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
		

						<div class="col-md-12 col-lg-12 col-xl-12 col-sm-12">
							<div style="background-color: #4a6ea9;
							height: 30px;
							line-height: 2;
							width: 100%;
							text-align: center;
							cursor: pointer;
							color: white;"
							@click="shareFB()"
							> Facebook</div>
						</div>
					</div><hr>
					<div class="row">
						<div class="col-md-12 col-lg-12 col-xl-12 col-sm-12">
							<div 
							@click="shareTwitter()"
							style="background-color: #359bf0;
							height: 30px;
							line-height: 2;
							width: 100%;
							text-align: center;
							color: white;
							"> Twitter</div>
						</div>
					</div> <hr>
					<div class="row">
						<div class="col-md-12 col-lg-12 col-xl-12 col-sm-12">
							<div 
							@click="shareEmail()"
							style="background-color: #6b04a9;
							height: 30px;
							line-height: 2;
							width: 100%;
							text-align: center;
							color: white;
							"> Email</div>
						</div>
					</div> <hr>
					<div class="row">
						<div class="col-md-12 col-lg-12 col-xl-12 col-sm-12">
							<div 
							@click="shareWhatsapp()"
							style="background-color: #2e9688;
							height: 30px;
							line-height: 2;
							width: 100%;
							text-align: center;
							color: white;
							">Whatsapp</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
	<a data-target="#paymentModal2" data-toggle="modal" ref="openPaymentModal2"></a>
				</div>
</template>
<script>
	import Auth from '@/models/Auth'
	import AssetsPath from '@/utils/AssetsPath'
	import { StripeAccount} from '@/services/dashboardService'
	import Social from '@/plugins/SocialShare'
	import BaseUrl from '@/utils/BaseUrl'
	import Swal from 'sweetalert2';

	export default{

		name:'Sidebar',
		data(){
			return {
				shareData:'',
				isLoading:false
			}
		},
		computed:{
			auth(){
				
				return  Auth.query().first();
			},
			token(){
				
				return this.auth.api_token;
			},
			basePath(){
				return AssetsPath;
			},
			baseUrl(){
				return BaseUrl;
			}
		},
		methods:{
			shareProfile(braider){

				this.shareData = braider;
				this.$refs.openPaymentModal2.click();
			},
			connectStripe(){
				this.isLoading = true;
				StripeAccount(this.token).then(res =>{
					window.location.href = res.data;
				})
			},
			onLogout(){
				
				localStorage.removeItem('api_token');
				Auth.deleteAll();
				this.$router.push({ name: 'Home'});
			},
			shareFB(){

				let link = this.baseUrl+'profile/'+this.shareData.id;

				const social = new Social;

				const url = social.facebook(link,'Braider Profile',);

				window.open(url, '_blank');
			},
			shareTwitter(){

				let link = this.baseUrl+'profile/'+this.shareData.id;
				const social = new Social;

				const url = social.twitter(link,'Braider Profile',);

				window.open(url, '_blank');
			},
			shareWhatsapp(){

				let link = this.baseUrl+'profile/'+this.shareData.id;
				const social = new Social;

				const url = social.whatsapp(link,'Braider Profile',);

				window.open(url, '_blank');
			},
			shareEmail(){
				let link = this.baseUrl+'profile/'+this.shareData.id;
				const social = new Social;

				const url = social.email(link,'Braider Profile',this.auth.introduction);

				window.open(url, '_blank');
			},
			copyText(e) {
				let textToCopy = `${this.baseUrl}profile/${this.auth.id}`;
				e.preventDefault();
				var myTemporaryInputElement = document.createElement("input");
				myTemporaryInputElement.type = "text";
				myTemporaryInputElement.value = textToCopy;
				document.body.appendChild(myTemporaryInputElement);
				myTemporaryInputElement.select();
				document.execCommand("Copy");
				Swal.fire("Copied");
				document.body.removeChild(myTemporaryInputElement);
			}
		}
	}
</script>
<style scoped="">
	.avatar {
		position: relative;
		display: inline-block;
		width: 7rem;
		height: 7rem;
	}
</style>
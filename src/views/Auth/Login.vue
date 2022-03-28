<template>
	<!-- <MenuComponent/> -->
	<!-- <section class="" style="">
	<img src="assets/stylers2.jpg" style="width: 100%;">	
	<h2 style="background: rgb(255, 171, 0);margin-bottom: 0px;padding: 10px 10px 10px 10px;text-align: center;    font-weight: 500;">Join The BraidsNow.com Community</h2>
	</section> -->
	<div class="content loginComp" style="padding: 0px;float: left;width: 100%;height: 100%;">
		<div class="container-fluid" style="float: left;width: 100%;height: 100%;">
			<div class="row" style="height: 100%;">
				<div class="col-md-12 col-lg-7">
					<div class="loginImg" style="background-image:url(assets/whowe.jpg)"></div>
				</div>
				<div class="col-md-12 col-lg-5">
					<form action="" class="login-right" style="box-shadow: none;background-color: #ffffffd9;
    border: none; border-radius: 0; padding: 0;  margin: 20%;">

						<div class="login-header">
						<div class="centered" style="text-align: center;">
							<router-link :to="{name:'Home'}" class="Login-logo"> 
								<img :src="isMobile == true?assetsPath+settingData.logo_mobile:assetsPath+settingData.logo_website" class="img-fluid" alt="Logo" style="width: 50%;">
							</router-link>
							<h3>Login <span>Braidsnow</span></h3>
                          </div>
						</div>
						<div class="form-group form-focus">
							<input 
							type="email" 
							class="form-control floating" 
							v-on:keyup.enter="onLogin"
							v-model="email">
							<label class="focus-label">Email</label>
							<span class="text-danger">
								{{errorEmail}}
							</span>
						</div>
						<div class="form-group form-focus">
							<input 
							type="password" 
							class="form-control floating" 
							v-on:keyup.enter="onLogin"
							v-model="password">
							
							<label class="focus-label">Password</label>
							<span class="text-danger">
								{{errorPassword}}
							</span>
						</div>
						<div class="text-right">
							<router-link class="forgot-link" :to="{name:'ForgotPassword'}">Forgot Password ?</router-link>
						</div>
						<button class="btn btn-primary btn-block btn-lg login-btn" type="button" @click="onLogin">Login</button>
						<button class="btn btn-primary btn-block btn-lg login-btn" type="button" @click="goHomePage">Go to Home Page</button>
						<div class="login-or">
							<span class="or-line"></span>
							<span class="span-or">or</span>
						</div>
						<div class="text-center dont-have">Don’t have an account? 
							<router-link :to="{name:'Register'}">Register</router-link>
						</div>

					</form>
                     <p class="mb-0" style="  text-align: center;"> © 2022 <a href="BraidsNow.com">BraidsNow.com</a> | All Rights Reserved | <a href="/privacy-policy" class="">Privacy Policy</a> | <a href="/term-and-condition" class="">Terms &amp; Conditions </a></p>
				</div>
			</div>
		</div>
	</div>
	<!-- <CopyRightsComponent /> -->
</template>
<script>
	// import MenuComponent from '../../components/Layout/Menu'
	import { braiderLogin } from '@/services/auth'
	import { settings } from '@/services/auth'
	import Auth from '@/models/Auth'
	// import Loader from '@/components/Loader';
	// import CopyRightsComponent from '@/components/Layout/CopyRights'
	import AssetsPath from '@/utils/AssetsPath';
	// import FooterComponent from '@/components/Layout/Footer'

	export default {
		name:'Login',
		// components:{CopyRightsComponent},
		data:() => {
			return {
				email:'',
				password:'',
				errorEmail:'',
				errorPassword:'',
				isLoading:true,
				settingData:{}
			}
		},
		computed:{
			assetsPath(){
				return AssetsPath;
			}
		},
		async mounted(){

			await settings()
			.then(async res => this.settingData = await res.data)
			.catch(err => console.log(err));

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			async onLogin(){

				braiderLogin({
					email: this.email,
					password: this.password
				}).then(async res => {

					
					await Auth.insert({data: res.data.user});
					

					await localStorage.setItem('api_token',res.data.token);
					if (res.data.user.role_id == 3) {
						this.$router.push({name:'Dashboard'});	
					}else{
						this.$router.push({name:'BraiderDashboard'});	
					}
					

				}).catch(err => {

					if(err.response.data.errors && err.response.data.errors.email){

						this.errorEmail = err.response.data.errors.email[0];

					}else{
						this.errorEmail = "";
					}

					if (err.response.data.errors && err.response.data.errors.password) {
						
						this.errorPassword = err.response.data.errors.password[0];

					}else{
						this.errorPassword  = "";
					}
				})
				
			},	
			async goHomePage () {
				this.$router.push({name:'Home'});
			}
		}
	}
</script>
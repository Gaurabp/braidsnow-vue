<template>
	<!-- <MenuComponent/> -->
	<div class="content loginComp" style="padding: 0px;float: left;width: 100%;height: 100%;">
		<div class="container-fluid" style="float: left;width: 100%;height: 100%;">
			<div class="row" style="height: 100%;">
				<div class="col-md-12 col-lg-7">
								<div class="loginImg" style="background-image:url(assets/whowe.jpg)"></div>
							</div>
							<div class="col-md-12 col-lg-5">
								<form action="#" class="forgot-right" style="box-shadow: none;background-color: #ffffffd9;border: none;border-radius: 0;padding: 0;margin: 20%;">
									<div class="login-header">
									<div class="centered" style="text-align: center;">
								<router-link :to="{name:'Home'}" class="Login-logo"> 
									<img :src="isMobile == true?assetsPath+settingData.logo_mobile:assetsPath+settingData.logo_website" class="img-fluid" alt="Logo" style="width: 50%">
								</router-link>
							<h3 style="margin-bottom: 30px;">Forgot Password?</h3>
                          </div>
										<p class="small text-muted">Enter your email to get a password reset link</p>
									</div>
									<div class="form-group form-focus">
										<input type="email" class="form-control floating">
										<label class="focus-label">Email</label>
									</div>
									<div class="text-right">
										<router-link class="forgot-link" :to="{name:'Login'}">Remember your password?</router-link>
									</div>
									<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
									<button class="btn btn-primary btn-block btn-lg login-btn" type="button" @click="goHomePage">Go to Home Page</button>
									
								</form>
								<p class="mb-0" style="  text-align: center;"> © 2022 <a href="BraidsNow.com">BraidsNow.com</a> | All Rights Reserved | <a href="/privacy-policy" class="">Privacy Policy</a> | <a href="/term-and-condition" class="">Terms &amp; Conditions </a></p>
							</div>
			</div>
		</div>
	</div>
	<!-- <footer-component/>  -->
	<!-- <CopyRightsComponent /> -->
	<!-- <Loader :isLoading="isLoading"/> -->
</template>
<script>
	// import MenuComponent from '@/components/Layout/Menu'
	// import Loader from '@/components/Loader';
	// import FooterComponent from '@/components/Layout/Footer'
	// import CopyRightsComponent from '@/components/Layout/CopyRights'
	import AssetsPath from '@/utils/AssetsPath';
	import { settings } from '@/services/auth'
	export default {
		name : 'ForgotPassword',
		// components:{MenuComponent,FooterComponent},
		// components:{CopyRightsComponent},
		data(){
			return{
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
			async goHomePage () {
				this.$router.push({name:'Home'});
			}
		}
	}
</script>
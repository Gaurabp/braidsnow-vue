<template>
	<!-- <MenuComponent/> -->
	<div class="content loginComp" style="padding: 0px">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="account-content">
						<div class="row">
							<div class="col-md-7 col-lg-6">
								<div class="loginImg">
									<img src="assets/whowe.jpg" class="img-fluid" alt="Dreamspa Login">
								</div>
							</div>
							<div class="col-md-12 col-lg-6">
								
								<form action="https://pathivu.dreamguystech.com/dreamspa/login.html" class="login-right" style="margin-top:18%">
									<div class="login-header">
										<h3>Forgot Password?</h3>
										<p class="small text-muted">Enter your email to get a password reset link</p>
									</div>
									<div class="form-group form-focus">
										<input type="email" class="form-control floating">
										<label class="focus-label">Email</label>
									</div>
									<div class="text-right">
										<router-link class="forgot-link" :to="{name:'Login'}">Remember your password?</router-link>
									</div>
									<button class="btn btn-primary btn-block btn-lg login-btn" type="button" @click="goHomePage">Go to Home Page</button>
									<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <footer-component/>  -->
	<CopyRightsComponent />
	<!-- <Loader :isLoading="isLoading"/> -->
</template>
<script>
	// import MenuComponent from '@/components/Layout/Menu'
	// import Loader from '@/components/Loader';
	// import FooterComponent from '@/components/Layout/Footer'
	import CopyRightsComponent from '@/components/Layout/CopyRights'
	export default {
		name : 'ForgotPassword',
		// components:{MenuComponent,FooterComponent},
		components:{CopyRightsComponent},
		data(){
			return{
				isLoading:true,
			}
		},
		mounted(){
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
<template>
	<MenuComponent/>
	<section class="">
	<div class="container" style=" padding-right: 0px; padding-left: 0px;">
  <div class="customerDashboard">
	<img src="assets/dashbord.png" style="width: 100%;">	
	<div class="centered" style=" position: absolute;top: 20%;left: 50%;transform: translate(-50%, -50%);"><h1 style="color: #ffffff;font-family: &quot;Nunito Sans&quot; !important; font-size: 60px; font-weight: 100; text-align: center;">Change Password</h1></div>
	<div class="centered" style="font-size: 30px; color: #feaa00;position: absolute;top: 25%;left: 50%;transform: translate(-50%, -50%);">SubHeader Title</div>
        </div>
        </div>
	</section>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Customer Dashboard</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Customer Dashboard</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="card">
						<div class="card-body">
							<div class="row">
								<div class="col-md-12 col-lg-6">
									<form>
										<div class="form-group">
											<label>Old Password</label>
											<input 
												type="password" 
												v-model="oldPassword"
												class="form-control">
											<small v-if="errOldPassword" class="form-text text-danger">
												{{errOldPassword}}
											</small>
										</div>
										<div class="form-group">
											<label>New Password</label>
											<input type="password"
											v-model="newPassword"
											class="form-control">
											<small v-if="errNewPassword" class="form-text text-danger">
												{{errNewPassword}}
											</small>
										</div>
										<div class="form-group">
											<label>Confirm Password</label>
											<input 
												type="password" 
												v-model="confirmPassword"
												class="form-control">
											<small v-if="errConfirmPassword" class="form-text text-danger">
												{{errConfirmPassword}}
											</small>
										</div>
										<div class="submit-section">
											<button type="button" @click="onSubmit" class="btn btn-primary submit-btn">Save Changes</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer-component/> 
	<!-- <Loader :isLoading="isLoading"/> -->
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import Sidebar from '@/views/Customer/Sidebar'
	import {changePassword} from '@/services/CustomerServices'
	import Swal from 'sweetalert2'
	import Auth from '@/models/Auth'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default {
		name:'ChangePassword',
		components:{MenuComponent,Sidebar,FooterComponent},
		data(){
			
			return {
				oldPassword:'',
				newPassword:'',
				confirmPassword:'',
				errOldPassword:'',
				errNewPassword:'',
				errConfirmPassword:'',
				isLoading:true,
			};
		},
		computed:{
			
			auth(){
				
				return  Auth.query().first();
			},
			token(){
				
				return this.auth.api_token;
			},
		},
		mounted(){
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			onSubmit(){

				this.clear();

				changePassword(this.token,{
					old_password: this.oldPassword,
					password: this.newPassword,
					password_confirmation: this.confirmPassword
				}).then(() => {

					this.clear();

					Swal.fire({
						icon: 'success',
						title: 'Success',
						text: 'Password Changed Successfuly',
					});

				}).catch(err => {

					if (err?.response?.data?.errors && err?.response?.data?.errors.old_password) {
						this.errOldPassword = err?.response?.data?.errors?.old_password[0];
					}

					if (err?.response?.data?.errors && err?.response?.data?.errors.password) {
						this.errNewPassword = err?.response?.data?.errors?.password[0];
					}

					if (err?.response?.data?.errors && err?.response?.data?.errors.password_confirmation) {
						this.errConfirmPassword = err?.response?.data?.errors?.password_confirmation[0];
					}
				})
			},
			clear(){
				this.errOldPassword = "";
				this.errNewPassword = "";
				this.errConfirmPassword = "";
			},
			
		}
	}
</script>
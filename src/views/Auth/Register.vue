<template>
	<MenuComponent/>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div class="account-content">
						<div class="row align-items-center justify-content-center">
							<div class="col-md-7 col-lg-6 login-left">
								<img src="assets/img/login-banner.png" class="img-fluid" alt="Dreampa Register">
							</div>
							<div class="col-md-12 col-lg-6 login-right">
								<div class="login-header">
									<h3>Customer Register
										<router-link :to="{ name: 'BusinessRegister'}">
										Are you a Braider?
										</router-link>
									</h3>
								</div>
								<form action="https://pathivu.dreamguystech.com/dreamspa/theraphist-dashboard.html">
									<div class="form-group form-focus">
										<label class="label">Name</label>
										<input type="text" class="form-control" v-model="name">
										<small v-if="errors.name" class="form-text text-danger">
											{{errors.name}}
										</small>
									</div>
									<br>
									<div class="form-group form-focus">
										<label class="label">Email Id</label>
										<input type="text" class="form-control" v-model="email">
										<small v-if="errors.email" class="form-text text-danger">
											{{errors.email}}
										</small>
									</div>
									<br>
									<div class="form-group form-focus">
										<label class="label">Mobile Number</label>
										<input type="text" class="form-control floating" v-model="phone">
										<small v-if="errors.phone" class="form-text text-danger">
											{{errors.phone}}
										</small>
									</div>
									<br>
									<div class="form-group form-focus">
										<label class="label">Create Password</label>
										<input type="password" class="form-control floating" v-model="password">
										<small v-if="errors.password" class="form-text text-danger">
											{{errors.password}}
										</small>
									</div>
									<br>
									<div class="text-right">
										<router-link class="forgot-link" :to="{ name: 'Login'}">
											Already have an account?
										</router-link>
									</div>
									<button 
									class="btn btn-primary btn-block btn-lg login-btn" 
									@click="onSubmit"
									type="button">Signup</button>
									
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer-component/> 
	<Loader :isLoading="isLoading"/>
</template>
<script>
import MenuComponent from '@/components/Layout/Menu'
import {customerRegister} from '@/services/auth'
import Auth from '@/models/Auth'
import Loader from '@/components/Loader';
import FooterComponent from '@/components/Layout/Footer'

	export default {
		name:'Register',
		components:{MenuComponent,Loader,FooterComponent},
		data(){
			return{
				isLoading:true,
				name:'',
				email:'',
				phone:'',
				password:'',
				errors:{
					name:'',
					email:'',
					phone:'',
					password:''
				}
			};
		},
		mounted(){
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			onSubmit(){

				customerRegister({
					name: this.name,
					email: this.email,
					phone_number: this.phone,
					password: this.password
				}).then(async res => {
					
					
					
					await Auth.insert({data: res.data.user});
					

					await localStorage.setItem('api_token',res.data.token);
					if (res.data.user.role_id == 3) {
						this.$router.push({name:'Dashboard'});	
					}

				}).catch(err => {
					
					this.errors.name = err?.response?.data?.errors?.name[0];
					this.errors.email = err?.response?.data?.errors?.email[0];
					this.errors.phone = err?.response?.data?.errors?.phone_number[0];
					this.errors.password = err?.response?.data?.errors?.password[0];
				})

			}
		}
	}
</script>
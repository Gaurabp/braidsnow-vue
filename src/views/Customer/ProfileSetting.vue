<template>
	<MenuComponent/>
	<div class="breadcrumb-bar"> 
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Profile Setting</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Profile Setting</h2>
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

							<form v-on:submit.prevent="onSubmit" enctype="multipart/form-data">
								<div class="row form-row"> 
									<div class="col-12 col-md-12">
										<div class="form-group">
											<div class="change-avatar">
												<div class="profile-img">
													<img 
													:src="previewAvatar" 
													alt="User Image">
												</div>
												<div class="upload-img">
													<div class="change-photo-btn">
														<span><i class="fa fa-upload"></i> Upload Photo</span>
														<input 
														type="file" 
														class="upload"
														@change="onUploadAvatar" 
														accept="image/*">
													</div>
													<small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 1MB</small>
													<small v-if="errors.avatar" class="form-text text-danger">
													{{errors.avatar}}
												</small>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Name</label>
											<input type="text" class="form-control" v-model="auth.name">
											<small v-if="errors.name" class="form-text text-danger">
												{{errors.name}}
											</small>
										</div>
									</div>
									
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Date of Birth</label>
											<input type="date" class="form-control" v-model="auth.dob">
											<small v-if="errors.dob" class="form-text text-danger">
												{{errors.dob}}
											</small>
											
										</div>
									</div>
									
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Email ID</label>
											<input type="email" class="form-control" v-model="auth.email">
											<small v-if="errors.email" class="form-text text-danger">
												{{errors.email}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Mobile</label>
											<input type="text" v-model="auth.phone_number" class="form-control">
											<small v-if="errors.phone_number" class="form-text text-danger">
												{{errors.phone_number}}
											</small>
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<label>Address</label>
											<input type="text" class="form-control" v-model="auth.address">
											<small v-if="errors.address" class="form-text text-danger">
												{{errors.address}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>City</label>
											<input type="text" class="form-control" v-model="auth.city">
											<small v-if="errors.city" class="form-text text-danger">
												{{errors.city}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>State</label>
											<input type="text" class="form-control" v-model="auth.state">
											<small v-if="errors.state" class="form-text text-danger">
												{{errors.state}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Zip Code</label>
											<input type="text" class="form-control" v-model="auth.zipcode">
											<small v-if="errors.zipcode" class="form-text text-danger">
												{{errors.zipcode}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Country</label>
											<input type="text" class="form-control" value="United States" disabled="">
										</div>
									</div>
								</div>
								<div class="submit-section">
									<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
								</div>
							</form>

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
	import Sidebar from '@/views/Customer/Sidebar'
	import {profileUpdate} from '@/services/CustomerServices'
	import Auth from '@/models/Auth'
	import Swal from 'sweetalert2'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default {
		name:'ProfileSetting',
		components:{MenuComponent,Sidebar,Loader,FooterComponent},
		data(){
			return {
				services: [],
				serviceList:[],
				errors:{},
				data:{avatar:""},
				previewAvatar: 'assets/img/theraphist/theraphist-thumb-01.png',
				isLoading:true,
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
				return process.env.VUE_APP_ASSET_URL;
			}
		},
		mounted(){
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{

			onUploadAvatar(event){

				this.data.avatar = event.target.files[0];
				let size = Math.round(this.data.avatar.size/1024);
				
				if (size > 1024) {
					event.preventDefault();
					this.errors.avatar = 'File too big (> 1MB)';
					return;
				}

				this.previewAvatar = URL.createObjectURL(this.data.avatar)
			},
			onSubmit(){
				
				let formData = new FormData;
				formData.set('name',this.auth.name);
				formData.set('dob',this.auth.dob);
				formData.set('email',this.auth.email);
				formData.set('phone_number',this.auth.phone_number);
				formData.set('address',this.auth.address);
				formData.set('state',this.auth.state);
				formData.set('city',this.auth.city);
				formData.set('avatar',this.data.avatar);
				formData.set('zipcode',this.auth.zipcode);

				profileUpdate(this.token,formData)
				.then(() => {

					Swal.fire({
						icon: 'success',
						title: 'Success',
						text: 'Profile updated',
					});
				}).catch(err => {
					
					Object.keys(err?.response?.data?.errors).map(name => {
						this.errors[name] = err?.response?.data?.errors[name][0];
					});

					window.scrollTo({
						top:0,
						behavior: 'smooth'
					});
				})
			}
		}
	}
</script>
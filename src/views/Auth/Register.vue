<template>
	<MenuComponent/>
	<section class="" style="">
	<img src="assets/stylers2.jpg" style="width: 100%;">	
	<h2 style="background: rgb(255, 171, 0);margin-bottom: 0px;padding: 10px 10px 10px 10px;text-align: center;    font-weight: 500;">Join The BraidsNow.com Community</h2>
	</section>
	<div class="content" style="padding: 4% 8% 2% 8%;">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div class="account-content">
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
											<input type="text" class="form-control" v-model="data.name">
											<small v-if="errors.name" class="form-text text-danger">
												{{errors.name}}
											</small>
										</div>
									</div>
									
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Date of Birth</label>
											<input type="date" class="form-control" v-model="data.dob">
											<small v-if="errors.dob" class="form-text text-danger">
												{{errors.dob}}
											</small>
											
										</div>
									</div>
									
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Email ID</label>
											<input type="email" class="form-control" v-model="data.email">
											<small v-if="errors.email" class="form-text text-danger">
												{{errors.email}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Mobile</label>
											<input type="text" v-model="data.phone_number" class="form-control">
											<small v-if="errors.phone_number" class="form-text text-danger">
												{{errors.phone_number}}
											</small>
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<label>Address</label>
											<input type="text" class="form-control" v-model="data.address">
											<small v-if="errors.address" class="form-text text-danger">
												{{errors.address}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>City</label>
											<input type="text" class="form-control" v-model="data.city">
											<small v-if="errors.city" class="form-text text-danger">
												{{errors.city}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>State</label>
											<input type="text" class="form-control" v-model="data.state">
											<small v-if="errors.state" class="form-text text-danger">
												{{errors.state}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Zip Code</label>
											<input type="text" class="form-control" v-model="data.zipcode">
											<small v-if="errors.zipcode" class="form-text text-danger">
												{{errors.zipcode}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group">
											<label>Password</label>
											<input type="password" class="form-control" v-model="data.password">
											<small v-if="errors.password" class="form-text text-danger">
												{{errors.password}}
											</small>
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group">
											<label>Upload Hair Style</label>
											<input 
											type="file" 
											class="form-control" 
											style="padding-top: 0px;padding-left: 0px;height: 32px;" 
											@change="onUploadHair"
											multiple>
												<small class="form-text text-muted">Allowed JPG, GIF or PNG. Upload hair image up to 10 total sizes of 10MB</small>
												<small v-if="errorHair" class="form-text text-danger">
													{{errorHair}}
												</small>
										</div>
									</div>
									<div class="col-2 col-md-2" v-for="(hair,index) in showHairStylesUrl" :key="index">
										<div class="profile-img">
											<img 
											style="width:100%" 
											:src="hair" 
											alt="User Image"/>
										</div>
									</div>
								</div>
								<br>
								<div class="submit-section">
									<button type="submit" class="btn btn-primary submit-btn">Signup</button>
								</div>
							</form>

						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <footer-component/>  -->
	<!-- <Loader :isLoading="isLoading"/> -->
	<CopyRightsComponent />
</template>
<script>
import MenuComponent from '@/components/Layout/Menu'
// import Loader from '@/components/Loader';
// import FooterComponent from '@/components/Layout/Footer'
import CopyRightsComponent from '@/components/Layout/CopyRights'
// import Loader from '@/components/Loader';
// import FooterComponent from '@/components/Layout/Footer'
import {customerRegister} from '@/services/auth'
import Auth from '@/models/Auth'
	export default {
		name:'Register',
		components:{MenuComponent,CopyRightsComponent},
		data(){
			return {
				services: [],
				serviceList:[],
				errors:{},
				data:{
					avatar: "",
					name: "",
					dob: "",
					email: "",
					phone_number: "",
					address: "",
					city: "",
					state: "",
					zipcode: "",
					password:"",
					hairStyles:[],

				},
				previewAvatar: 'assets/img/theraphist/theraphist-thumb-01.png',
				isLoading:true,
				showHairStyles:[],
				showHairStylesUrl:[],
				errorHair:""
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
			async onUploadHair(event){
				this.errorHair = "";
				const total = Object.keys(event.target.files);
				let totalSize = 0;

				await total.map(key => {
					
					this.showHairStyles.push(event.target.files[key]);

					totalSize += Math.round(event.target.files[key].size/1024);

					this.showHairStylesUrl.push(URL.createObjectURL(event.target.files[key]));
				});

				if (totalSize > 10240) {
					event.preventDefault();
					this.showHairStylesUrl = [];
					this.showHairStyles = [];
					this.errorHair = 'File too big (> 10MB)';
					return;
				}
				if (this.showHairStyles.length>10) {
					event.preventDefault();
					this.showHairStylesUrl = [];
					this.showHairStyles = [];
					this.errorHair = "You can't select image more than 10";
					return;
				}
			},
			onSubmit(){
				
				
				let formData = new FormData;
				formData.set('name',this.data.name);
				formData.set('dob',this.data.dob);
				formData.set('email',this.data.email);
				formData.set('phone_number',this.data.phone_number);
				formData.set('address',this.data.address);
				formData.set('state',this.data.state);
				formData.set('city',this.data.city);
				formData.set('avatar',this.data.avatar);
				formData.set('zipcode',this.data.zipcode);
				formData.set('password',this.data.password);
				//formData.set('showHairStyles[]',this.showHairStyles);
				this.showHairStyles?.map((hair,index) => {

					formData.set(`showHairStyles[${index}]`,hair);
				});

				customerRegister(formData).then(async res => {
					
					await Auth.insert({data: res.data.user});
					
					await localStorage.setItem('api_token',res.data.token);

					if (res.data.user.role_id == 3) {
						this.$router.push({name:'Dashboard'});	
					}

				}).catch(err => {
					
					Object.keys(err?.response?.data?.errors).map(name => {
						this.errors[name] = err?.response?.data?.errors[name][0];
					});
				})
			}
		}
	}
</script>

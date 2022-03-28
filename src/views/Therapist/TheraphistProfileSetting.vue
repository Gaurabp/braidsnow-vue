<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-12 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="">Home</a></li>
					<li class="breadcrumb-item active" aria-current="page">Braider Profile Setting</li>
					</ol>
					</nav>
					<h2 class="breadcrumb-title">Braider Profile Setting</h2>
				</div>
			</div> 
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>

				<div class="col-md-7 col-lg-8 col-xl-9">

					<div class="account-content">
						<div class="row align-items-center justify-content-center">
							
							<div class="col-md-12 col-lg-10 login-right">
								
								<div class="row form-row">
									<div class="col-md-12">
									<div class="form-group">
										<div class="change-avatar">
											<div class="profile-img">
												<img :src="previewImage" alt="User Image">
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
								
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Email <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="auth.email"
											:class="{'is-invalid':errors.email}"
											placeholder="Enter Your Email"
											readonly="">
											<small v-if="errors.email" class="form-text text-danger">
												{{errors.email}}
											</small>
											
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Full Name <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="auth.name"
											:class="{'is-invalid':errors.name}"
											placeholder="Enter Your Name">
											<small v-if="errors.name" class="form-text text-danger">
												{{errors.name}}
											</small>
											
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Business Name </label>
											<input 
											type="text" 
											class="form-control"
											v-model="auth.business_name" 
											:class="{'is-invalid':errors.businessName}"
											placeholder="Enter Your Business Name">
											<small v-if="errors.businessName" class="form-text text-danger">
												{{errors.businessName}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>State <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="auth.state"
											:class="{'is-invalid':errors.state}"
											placeholder="Enter Your State">
											<small v-if="errors.state" class="form-text text-danger">
												{{errors.state}}
											</small>
										</div>
									</div>
									
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>City <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control"
											v-model="auth.city" 
											:class="{'is-invalid':errors.city}"
											placeholder="Enter Your City">
											<small v-if="errors.city" class="form-text text-danger">
												{{errors.city}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Zip Code <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="auth.zipcode"
											:class="{'is-invalid':errors.zipcode}"
											placeholder="Enter Your Zip Code">
											<small v-if="errors.zipcode" class="form-text text-danger">
												{{errors.zipcode}}
											</small>
										</div>
									</div>
								</div>
								
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Add Website Link </label>
											<input 
											type="text" 
											class="form-control" 
											v-model="auth.website_link"
											:class="{'is-invalid':errors.websiteLink}"
											placeholder="Enter Your URL">
											<small v-if="errors.websiteLink" class="form-text text-danger">
												{{errors.websiteLink}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Business Phone Number <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="auth.business_phone_number"
											:class="{'is-invalid':errors.business_phone_number}"
											placeholder="Enter Your Phone Number">
											<small v-if="errors.business_phone_number" class="form-text text-danger">
												{{errors.business_phone_number}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Introduction </label>
											<textarea 
											class="form-control" 
											v-model="auth.introduction"
											:class="{'is-invalid':errors.introduction}"
											placeholder="Tell Us About Yourself"></textarea>
											<small v-if="errors.introduction" class="form-text text-danger">
												{{errors.introduction}}
											</small>
										</div>
									</div>
									
								</div>
								<div class="row form-row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Special Instruction for new clients <span class="text-danger">*</span></label>
											<textarea 
											class="form-control" 
											v-model="auth.special_introduction"
											:class="{'is-invalid':errors.special_introduction}"
											placeholder="Instruction"></textarea>
											<small v-if="errors.special_introduction" class="form-text text-danger">
												{{errors.special_introduction}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Policy/Procedure <span class="text-danger">*</span></label>
											<textarea 
											v-model="auth.policy_procedure"
											class="form-control" 
											:class="{'is-invalid':errors.policy_procedure}"
											placeholder="Enter Your policy_procedure/Procedure"></textarea>
											<small v-if="errors.policy_procedure" class="form-text text-danger">
												{{errors.policy_procedure}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">

									<div class="col-md-4">
										<label>Do you braid out of a shop? <span class="text-danger">*</span></label>
										
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="outOfShopYes"
													class="custom-control-input"
													v-model="auth.do_you_braid_out_of_a_shop"
													value="1"
													name="outOfShop"
													>
													<label class="custom-control-label" for="outOfShopYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="outOfShopNo"
													v-model="auth.do_you_braid_out_of_a_shop"
													value="0"
													name="outOfShop"
													class="custom-control-input">
													<label class="custom-control-label" for="outOfShopNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Do you braid from home? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													class="custom-control-input"  
													id="fromHomeYes"
													v-model="auth.do_you_braid_from_home"
													value="1"
													name="do_you_braid_from_home"
													checked="">
													<label class="custom-control-label" for="fromHomeYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="fromHomeNo"
													v-model="auth.do_you_braid_from_home"
													value="0"
													name="do_you_braid_from_home"
													class="custom-control-input">
													<label class="custom-control-label" for="fromHomeNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Are you a mobile / traveling braider? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="travelingBraiderYes"
													v-model="auth.are_you_a_mobile"
													value="1" 
													name="travelingBraider" 
													class="custom-control-input"  
													checked="">
													<label class="custom-control-label" for="travelingBraiderYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio"
													id="travelingBraiderNo"
													v-model="auth.are_you_a_mobile"
													value="0"  
													name="travelingBraider"  
													class="custom-control-input">
													<label class="custom-control-label" for="travelingBraiderNo">No</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br>
								<div class="row form-row">
									
									<div class="col-md-6">
										<label>Can you provide hair? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="provideHairYes"
													v-model="auth.can_you_provide_hair"
													name="provideHair" 
													class="custom-control-input"  
													value="1" 
													checked="">
													<label class="custom-control-label" for="provideHairYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="provideHairNo"
													v-model="auth.can_you_provide_hair"
													name="provideHair"  
													value="0" 
													class="custom-control-input">
													<label class="custom-control-label" for="provideHairNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<label>Do you wash hair? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="washHairYes"
													name="washHair"
													v-model="auth.do_you_wash_hair" 
													value="1" 
													class="custom-control-input"  
													checked="">
													<label class="custom-control-label" for="washHairYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													name="washHair"  
													id="washHairNo"
													v-model="auth.do_you_wash_hair"
													value="0" 
													class="custom-control-input">
													<label class="custom-control-label" for="washHairNo">No</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br>
								
								<br>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Booking Deposit amount <span class="text-danger">*</span></label>
											<input 
											type="text" 
											v-model="auth.booking_deposit_amount"
											class="form-control" 
											:class="{'is-invalid':errors.booking_deposit_amount}"
											placeholder="Booking Deposit amount percentage">
											<small v-if="errors.booking_deposit_amount" class="form-text text-danger">
												{{errors.booking_deposit_amount}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Upload Cash App Qr Code</label>
											<input type="file" class="upload" @change="onUploadQrcode" accept="image/*">
											<small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 500KB</small>
											<small v-if="errors.qrCode" class="form-text text-danger">
												{{errors.qrCode}}
											</small>
										</div>
									</div>
									
								</div>
								
								<div class="submit-section submit-btn-bottom">
									<button 
									type="button" 
									@click="onsubmit" 
									class="btn btn-primary submit-btn">
										Save Changes
									</button>
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
	import MenuComponent from '../../components/Layout/Menu'
	import Sidebar from './Sidebar'
	import {services} from  '@/services/auth'
	import { UpdateProfile } from '@/services/userService'
	import {errObj, dataObj} from '@/views/Auth/interfaces/RegisterBraiderInterface'
	import Swal from 'sweetalert2'
	import Auth from '@/models/Auth'
	import AssetsPath from '@/utils/AssetsPath'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'Profile',
		components:{MenuComponent,Sidebar,FooterComponent},

		data(){
			return {
				serviceList:[],
				errors:errObj,
				data:dataObj,
				assetsUrl:'',
				avatar:'',
				qrCode:'',
				previewImage: 'assets/img/theraphist/theraphist-thumb-01.png',
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
			serviceData(){
				const auth = Auth.query().with('user_services').first();
				return auth.user_services;
			}
		},
		async mounted(){

			this.assetsUrl = AssetsPath;
			if (this.auth.avatar) {

				this.previewImage = this.assetsUrl+this.auth.avatar
			}
			await services(this.token)
			.then(async res => this.serviceList = await res.data.data)
			.catch(err => {
				console.log(err);
			});
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			addServices(){
				
				if (
					this.data.service &&
					this.data.hour &&
					this.data.minute && 
					this.data.price) {

					this.services.push({
						services: this.data.service,
						hours: this.data.hour,
						minute: this.data.minute,
						price: this.data.price
					});

					this.data.service = "";
					this.data.hour = 1;
					this.data.minute = 1;
					this.data.price = 0;
				}else{

					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Please fill all fields!',
					});
				}
				return;
			},
			removeService(index){
				
				const data = this.services.filter((service,key) => key != index);

				this.services = data;
			},
			onUploadAvatar(event){

				this.avatar = event.target.files[0];
				let size = Math.round(this.avatar.size/1024);
				
				if (size > 1024) {
					event.preventDefault();
					this.errors.avatar = 'File too big (> 1MB)';
					return;
				}

				this.previewImage = URL.createObjectURL(this.avatar)
			},
			onUploadQrcode(event){

				this.qrCode = event.target.files[0];
				
				let size = Math.round(this.qrCode.size/1024);
				
				if (size > 500) {
					event.preventDefault();
					
					this.errors.qrCode = 'File too big (> 500KB)';
					return;
				}

				//this.previewImage = URL.createObjectURL(this.avatar)
			},
			serializeFormData(){

				let formData = new FormData();
				formData.set('avatar',this.avatar);
				formData.set('qrCode',this.qrCode);
				formData.set('name',this.auth.name);
				formData.set('state',this.auth.state);
				formData.set('city',this.auth.city);
				formData.set('zipcode',this.auth.zipcode);
				
				formData.set('business_name',this.auth.business_name);
				formData.set('website_link',this.auth.website_link);
				formData.set('business_phone_number',this.auth.business_phone_number);
				formData.set('introduction',this.auth.introduction);
				formData.set('special_introduction',this.auth.special_introduction);
				formData.set('policy_procedure',this.auth.policy_procedure);
				formData.set('booking_deposit_amount',this.auth.booking_deposit_amount);
				
				formData.set('do_you_braid_out_of_a_shop',this.auth.do_you_braid_out_of_a_shop);
				formData.set('do_you_braid_from_home',this.auth.do_you_braid_from_home);
				formData.set('are_you_a_mobile',this.auth.are_you_a_mobile);
				formData.set('can_you_provide_hair',this.auth.can_you_provide_hair);
				formData.set('do_you_wash_hair',this.auth.do_you_wash_hair);
				formData.set('services',JSON.stringify(this.serviceData));
				return formData;
			},
			async onsubmit(){
				
				await this.clear();

				UpdateProfile(this.token,this.serializeFormData())
				.then(async res => {

					Swal.fire({
						icon: 'success',
						title: 'Success',
						text: 'Profile Updated',
					});
					await Auth.insert({data: res.data.user});
					
					await localStorage.setItem('api_token',res.data.token);
					


				}).catch(err => {

					Object.keys(err?.response?.data?.errors).map(name => {
						this.errors[name] = err?.response?.data?.errors[name][0];
					});

					window.scrollTo({
						top:0,
						behavior: 'smooth'
					});
				});
			},
			clear(){

				this.errors = {
					avatar:'',
					qrCode:'',
					name:'',
					state:'',
					city:'',
					zipcode:'',
					
					businessName:'',
					websiteLink:'',
					business_phone_number:'',
					special_introduction:'',
					specialIntro:'',
					policy_procedure:'',
					booking_deposit_amount:'',
					
					outOfShop:'',
					fromHome:'',
					travelingBraider:'',
					provideHair:'',
					washHair:'',
					service:'',
					minute:'',
					hour:'',
					price:''
				};
			},
		}
	}
</script>
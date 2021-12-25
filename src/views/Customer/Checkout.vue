<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Booking</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Booking</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-7 col-lg-8">
					<div class="card">
						<div class="card-body">

							<form >

								<div class="info-widget">

									<h4 class="card-title">Personal Information</h4>
									<center>
										<a href="#!" class="booking-pro-img">
											
											<img 
											:src=" previewAvatar ? previewAvatar: (auth?.avatar?basePath+auth?.avatar : profileGuest)"
											class="img-fluid" 
											:alt="auth?.name" 
											style="width: 10%;height: 10%;"/>
										</a>
									</center>
									<div class="row">
										<div class="col-md-12 col-sm-12">
											<div class="form-group">
												<label>Upload Image</label>
												<input 
												class="form-control" 
												@change="onUploadAvatar" 
												accept="image/*"
												type="file" >
												<small v-if="errAvatar" class="form-text text-danger">
													{{errAvatar}}
												</small>
											</div>
										</div>
										<div class="col-md-6 col-sm-12">
											
										</div>
										
									</div>
									<div class="row">
										<div class="col-md-6 col-sm-12">
											<div class="form-group card-label">
												<label>Full Name</label>
												<input class="form-control" type="text" v-model="auth.name">
												
											</div>
										</div>
										<div class="col-md-6 col-sm-12">
											<div class="form-group card-label">
												<label>Email</label>
												<input class="form-control" type="email" v-model="auth.email">
												<small v-if="errors.email" class="form-text text-danger">
												{{errors.email}}
												</small>
											</div>
										</div>
										<div class="col-md-6 col-sm-12">
											<div class="form-group card-label">
												<label>Phone</label>
												<input class="form-control" type="text" v-model="auth.phone_number">
												<small v-if="errors.phone_number" class="form-text text-danger">
												{{errors.phone_number}}
											</small>
											</div>
										</div>
										<div class="col-md-6 col-sm-12">
											<div class="form-group card-label">
												<label>Zip Code</label>
												<input class="form-control" type="text" v-model="auth.zipcode">
											</div>
										</div>
										<div class="col-md-12 col-sm-12">
											<div class="form-group card-label">
												<label>Full Address</label>
												<input class="form-control" type="text" v-model="auth.address">
												<small v-if="errors.address" class="form-text text-danger">
												{{errors.address}}
											</small>
											</div>
										</div>
									</div>
									<div class="exist-customer" v-if="!auth">
										Existing Customer? <a href="#">Click here to login</a>
									</div>

									<div class="submit-section mt-4" v-if="!profileData.is_payment_online">
										<button class="btn btn-primary submit-btn" type="button" @click="onSubmit">
											Confirm
										</button>	
									</div>
								</div>

								<div class="payment-widget" >

									<h4 class="card-title" v-highlight>Payment Method</h4>

									<div class="payment-list" v-if="profileData.is_payment_online">

										<label class="payment-radio credit-card-option">
											<input type="radio" name="radio" value="1" v-model="paymentMethod">
											<span class="checkmark"></span>
											Credit Card / Debit Card
										</label>

										<div class="row" v-if="paymentMethod == 1">
											<div class="col-md-6">
												<div class="form-group card-label" >
													<label for="card_name">Name on Card</label>
													<input 
													class="form-control" 
													:class="{'is-invalid':cardErrors.name}"
													type="text" v-model="nameOnCard"> 
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group card-label">
													<label for="card_number" >Card Number</label>
													<input class="form-control" 
													:class="{'is-invalid':cardErrors.number}"
													placeholder="1234  5678  9876  5432" 
													v-model="cardNumber"
													@keypress="onlyNumber"
													type="text">
												</div>
											</div>
											<div class="col-md-4">
												<div class="form-group card-label">
													<label for="expiry_month">Expiry Month</label>
													<input 
													class="form-control" 
													placeholder="MM" 
													maxlength="2" 
													:class="{'is-invalid':cardErrors.exp_month}"
													v-model.number="cardExpiryMonth"
													@keypress="onlyNumber"
													type="text">
												</div>
											</div>
											<div class="col-md-4">
												<div class="form-group card-label">
													<label for="expiry_year">Expiry Year</label>
													<input 
													class="form-control" 
													placeholder="YY"
													maxlength="2" 
													:class="{'is-invalid':cardErrors.exp_year}" 
													v-model.number="cardExpiryYear"
													@keypress="onlyNumber"
													type="text">
												</div>
											</div>
											<div class="col-md-4">
												<div class="form-group card-label">
													<label for="cvv">CVV</label>
													<input class="form-control" 
													maxlength="3" 
													:class="{'is-invalid':cardErrors.cvc}" 
													type="text" 
													v-model.number="cardCvc"
													@keypress="onlyNumber"
													>
												</div>
											</div>
										</div>
									</div>

									<!-- <div class="payment-list">
										<label class="payment-radio paypal-option">
											<input type="radio" name="radio" value="2" v-model="paymentMethod">
											<span class="checkmark"></span>
											Cash App
										</label>
										<div class="row" v-if="paymentMethod == 2">
											<div class="col-md-6">
												<div class="form-group card-label">
													<img src="assets/img/qr.png" class="img-fluid" style="width:30%">
												</div>
											</div>
										</div>
										
									</div> -->


									<div class="terms-accept">
										<div class="custom-checkbox">
											<input type="checkbox" id="terms_accept">&nbsp;
											<label for="terms_accept">I have read and accept <a href="#">Terms &amp; Conditions</a></label> 
										</div>
									</div>

									<div class="submit-section mt-4" v-if="isLoading == true">
										<button class="btn btn-primary submit-btn" type="button" >
											<div class="loader">
												Loading
												<span class="dot dot-1"></span>
												<span class="dot dot-2"></span>
												<span class="dot dot-3"></span>
											</div>

										</button>	
									</div>
									<div class="submit-section mt-4" v-if="isLoading == false">
										<button class="btn btn-primary submit-btn" type="button" @click="onSubmit">
											Confirm and Pay

										</button>	
									</div>

								</div>
							</form>

						</div>
					</div>
				</div>
				<div class="col-md-5 col-lg-4 theiaStickySidebar">

					<div class="card booking-card">
						<div class="card-header">
							<h4 class="card-title">Booking Summary</h4>
						</div>
						<div class="card-body">

							<div class="booking-pro-info">
								<a href="javascript:;" class="booking-pro-img">
								<img :src="basePath+profileData.avatar" class="img-fluid" :alt="profileData.name">
								</a>
								<div class="booking-info">
									<h4>{{profileData.name}} </h4>
									<div class="rating">
										<i class="fas fa-star filled" v-for="i in profileData.ratting" :key="i"></i>
										<i class="fas fa-star" v-for="j in (5 - profileData.ratting)" :key="j"></i>
										<span class="d-inline-block average-rating">({{profileData.reviews.length}})</span>
									</div>
									<div class="clinic-details">
										<p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i>{{profileData.city}},{{profileData.state}}, USA </p>
									</div>
								</div>
							</div>


							<div class="booking-summary">
								<div class="booking-item-wrap">
									<ul class="booking-date">
										<li>Booking Date <span>{{bookingDate}} </span></li>
										<li>Time <span>{{bookingData}} </span></li>
									</ul>
									<ul class="booking-fee">
										<li v-for="booking in serviceData" :key="booking.id">
											{{booking?.service}}
											<span>${{booking?.price}}</span>
										</li>
										
									</ul>
									<div class="booking-total">
										<ul class="booking-total-list">
											<li>
												<label class="payment-radio paypal-option">
													<input 
													type="radio" 
													name="radio" 
													value="1" 
													v-model="payableStatus">
													<span class="checkmark"></span>Total Payable Amount
													<span class="total-cost">${{totalBookingAmount.toFixed(2)}} </span>
												</label>

											</li>
											<li>
												<label class="payment-radio paypal-option">
													<input 
													type="radio" 
													name="radio" 
													value="2" 
													v-model="payableStatus">
													<span class="checkmark"></span>Minimum Deposit Amount
													<span class="total-cost">${{profileData.booking_deposit_amount}} </span>
												</label>
											</li>
										</ul>
									</div>
									
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
	</div>
	<footer-component/> 
	<Loader :isLoading="preLoader"/>
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	import Auth from '@/models/Auth'
	import AssetsPath from '@/utils/AssetsPath'
	import {OrderPlace} from '@/services/websiteServices'
	import moment from 'moment';
	import Swal from 'sweetalert2'
	import CheckoutInterface from '@/views/interfaces/checkout.js'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default {
		name:'Checkout',
		components:{MenuComponent,Loader,FooterComponent},
		data(){
			return{
				errors:{},
				isLoading:false,
				publishableKey:'pk_test_51IXcw1JLOzBZfrz5t7Zajmsj43jQuyGzSiIULd5XjqCK8JYPX66yrVaNnoU6z95xrtDDRkE3K0ilNCNoSecwfFv000DCQ7SlEm',
				status: true,
				nameOnCard:'',
				cardNumber: '',
				cardExpiryMonth: '',
				cardExpiryYear:'',
				cardCvc: '',
				stripe: null,
				payableStatus:1,
				cardErrors:{
					name:false,
					number:false,
					exp_year:false,
					exp_month:false,
					cvc:false
				},
				paymentMethod:1,
				preLoader:true,
				profileGuest:'/assets/img/guest.jpg',
				newAvatar:"",
				errAvatar:"",
				previewAvatar:""
			}
		},
		computed:{
			basePath(){
				return AssetsPath;
			},
			auth(){
				
				const user = Auth.query().first();
				if (user) {
					return user
				}
				return CheckoutInterface
			},
			token(){
				
				return this.auth.api_token;
			},
			bookingDate(){

				return localStorage.getItem('bookingDate');

			},
			bookingData(){
				const timeslot = JSON.parse(localStorage.getItem('timeslot'));
					
				return moment(timeslot.current,'H:mm:ss').format('H:mm:ss A');
			},
			profileData(){
				
				const profileData = JSON.parse(localStorage.getItem('profileData'));
				
				return profileData;	
			},
			serviceData(){
				const serviceModal = JSON.parse(localStorage.getItem('servicesModal'));

				return serviceModal.filter(service => service.isSelected === true)
			},
			totalBookingAmount(){

				let amount = 0;

				this.serviceData.map(booking => {
					amount += Number(booking?.price)
				});

				return amount;
			},
			address(){
				return this.auth.address+', '+this.auth.city+', '+this.auth.state;
			}
		},
		mounted(){

			//this.paymentMethod = this.auth.is_payment_online?1:2;

			if (!localStorage.getItem('bookingDate')) {
				this.$router.push({name:'Home'})
			}
			setTimeout(() => {
				this.preLoader = false;
			}, 1000);
		},
		watch:{

			cardNumber: function() {
				this.cc_format();
			}
		},
		methods:{
			onlyNumber ($event) {
				let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
				if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { 
					$event.preventDefault();
				}
			},
			onUploadAvatar(event){

				this.errAvatar = "";
				this.newAvatar = event.target.files[0];
				let size = Math.round(this.newAvatar.size/1024);
				
				if (size > 500) {
					event.preventDefault();
					this.errAvatar = 'File too big (> 500KB)';
					return;
				}

				this.previewAvatar = URL.createObjectURL(this.newAvatar)
			},
			async onSubmit(){
				
				this.isLoading = true;
				this.clear();
				
				if (this.paymentMethod == 1 &&
					this.validatePayment() &&
					this.cardValidation()) {

					window.Stripe.setPublishableKey(this.publishableKey);
					
					window.Stripe.createToken({
						number: this.cardNumber,
						cvc: this.cardCvc,
						exp_month: this.cardExpiryMonth,
						exp_year: this.cardExpiryYear
					}, async (status,response) => {
						if (status === 200) {
							await this.withPayment(response.id);
							this.isLoading = false;
						}else{
							
							switch (response.error.param) {
								case 'cvc':
									this.cardErrors.cvc = response.error.message;
									break;
								case 'number':
									this.cardErrors.number = response.error.message;
									break;
								case 'exp_year':
									this.cardErrors.exp_year = response.error.message;
									break;
								case 'exp_month':
									this.cardErrors.exp_month = response.error.message;
									break;
							}
								this.isLoading = false;
						}
					});
				}else{
					await this.withoutPayment();
					this.isLoading = false;
				}


			
				
			},
			withoutPayment(){
				if (this.validation()) {

					const data = {
						bookingDate: this.bookingDate,
						timeslot: this.bookingData,
						braider: this.profileData,
						services: this.serviceData,
						totalBookingAmount: this.totalBookingAmount,
						paymentMode: this.paymentMethod,
						user: this.auth
					};

					OrderPlace(data).then(res => {
						console.log(res.data.braider)
						localStorage.removeItem('timeslot');
						localStorage.removeItem('bookingDate');
						localStorage.removeItem('profileData');
						localStorage.removeItem('servicesModal');
						

						this.$router.push({name:'BookingSuccess',params:{
							braider:res.data.braider,
							booking_date: res.data.booking_date,
							appointmentId: res.data.appointmentId,
						}});

					}).catch(() => {

					})
				}

				return this;
			},
			async withPayment(token){

				let payableAmount = this.payableStatus == 1 ?this.totalBookingAmount:this.profileData.booking_deposit_amount

				let formData = new FormData();
				formData.set("bookingDate",JSON.stringify(this.bookingDate));
				formData.set("timeslot",JSON.stringify(this.bookingData));
				formData.set("braider",JSON.stringify(this.profileData));
				formData.set("services",JSON.stringify(this.serviceData));
				formData.set("totalBookingAmount",JSON.stringify(this.totalBookingAmount));
				formData.set("user",JSON.stringify(this.auth));
				formData.set("stripeToken", token);
				formData.set("paymentMode", this.paymentMethod);
				formData.set("card",JSON.stringify({
					number: this.cardNumber,
						exp_month: this.cardExpiryMonth,
						exp_year: this.cardExpiryYear,
						cvc: this.cardCvc
					})
				);
				formData.set("payableAmount",payableAmount);
				formData.set("newAvatar",this.newAvatar);

				OrderPlace(formData).then(res => {
					
					localStorage.removeItem('timeslot');
					localStorage.removeItem('bookingDate');
					localStorage.removeItem('profileData');
					localStorage.removeItem('servicesModal');
					
					this.$router.push({name:'BookingSuccess',params:{
						braider:res.data.braider,
						appointmentId: res.data.appointmentId,
						booking_date: res.data.booking_date
					}});

				}).catch(err => {

					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: err.response.data.message
					});
				})
				
				return this;
			},
			stripeResponseHandler(status, response){
				console.log(status,response);
			},
			validation(){
				
				if (this.auth.address == "" || this.auth.address == null) {
					this.errors.address = "The address field is required";
					this.status = false;
				}else{
					this.errors.address = "";
				}
				if (this.auth.phone_number == "" || this.auth.phone_number == null) {
					this.errors.phone_number = "The phone number field is required";
					this.status = false;
				}else{
					this.errors.phone_number = "";
				}
				if (this.auth.email == "" || this.auth.email == null) {
					this.errors.email = "The email address field is required";
					this.status = false;
				}else{
					this.errors.email = "";
				}

				return this.status;
			},
			validatePayment(){

				if (this.auth.phone_number == "" || this.auth.phone_number == null) {
					this.errors.phone_number = "The phone number field is required";
					this.status = false;
				}else{
					this.errors.phone_number = "";
				}

				return this.status;
			},
			cc_format() {

				let value = this.cardNumber;
				let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
				let matches = v.match(/\d{4,16}/g);
				let match = matches && matches[0] || ''
				let parts = []
				for (let i=0, len=match.length; i<len; i+=4) {
					parts.push(match.substring(i, i+4))
				}
				if (parts.length) {
					//console.log(parts.join(' '),'if');
					this.cardNumber = parts.join(' ')
				} else {
					//console.log(value,'else');
					this.cardNumber = value
				}
			},
			cardValidation(){
				if (this.paymentMethod == 1) {
					let flag = true;

					if (this.nameOnCard == null || this.nameOnCard == "") {
						this.cardErrors.name = true;
						flag = false;
					}else{
						this.cardErrors.name = false;
					}

					if (this.cardNumber == null || this.cardNumber == "") {
						this.cardErrors.number = true;
						flag = false;
					}else{
						this.cardErrors.number = false;
					}

					if (this.cardExpiryMonth == null || this.cardExpiryMonth == "") {
						this.cardErrors.exp_month = true;
						flag = false;
					}else{
						this.cardErrors.exp_month = false;
					}

					if (this.cardExpiryYear == null || this.cardExpiryYear == "") {
						this.cardErrors.exp_year = true;
						flag = false;
					}else{
						this.cardErrors.exp_year = false;
					}

					if (this.cardCvc == null || this.cardCvc == "") {
						this.cardErrors.cvc = true;
						flag = false;
					}else{
						this.cardErrors.cvc = false;
					}
					return flag;
				}
			},
			clear(){
				this.cardErrors = {
					name:false,
					number:false,
					exp_year:false,
					exp_month:false,
					cvc:false
				};
			}
		}
	}
</script>
   
<style>
	.loader>span {
  width: 5px;
  height: 5px;
  display: block;
  background: #fff;
  border-radius: 50%;
  position: relative;
  margin: 0 5px;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot-1 {
  animation: anim 1s linear 0s infinite;
}

.dot-2 {
  animation: anim 1s linear 0.25s infinite;
}

.dot-3 {
  animation: anim 1s linear 0.50s infinite;
}

.dot-4 {
  animation: anim 1s linear 0.75s infinite;
}

@keyframes anim {
  0% {
    top: 0;
  }

  50% {
    top: 15px;
  }

  100% {
    top: 0;
  }
}
</style>
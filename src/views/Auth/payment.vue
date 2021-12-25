<template>
	<MenuComponent/>
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12">
					<div class="card">
						<div class="card-body">

							<form >
								<div class="payment-widget" >

									<h4 class="card-title">Payment Due</h4>

									<div class="payment-list" >


										<div class="row" >
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
											Pay

										</button>	
									</div>
								</div>
							</form>

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
	import MenuComponent from '@/components/Layout/Menu'
	import {ClearDue} from  '@/services/websiteServices'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'subscription',
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
			}
		},
		watch:{

			cardNumber: function() {
				this.cc_format();
			}
		},
		mounted(){
			setTimeout(() => {
				this.preLoader = false;
			}, 1000);
		},
		methods:{
			async onSubmit(){
				
				this.isLoading = true;
				this.clear();
				
				if (this.cardValidation()) {

					window.Stripe.setPublishableKey(this.publishableKey);
					
					window.Stripe.createToken({
						number: this.cardNumber,
						cvc: this.cardCvc,
						exp_month: this.cardExpiryMonth,
						exp_year: this.cardExpiryYear
					}, async (status,response) => {
						if (status === 200) {
							ClearDue({id: this.$route.params.id,stripeToken:response.id})
							.then(() => {
								this.$router.push({name:'Dashboard'})
							})
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
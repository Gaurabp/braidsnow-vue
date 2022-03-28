<template>
	<MenuComponent/>
	<section class="" style="">
	
	<div class="container" style=" padding-right: 0px; padding-left: 0px;">
  <div class="customerDashboard">
	<img src="assets/stylers2.jpg" style="width: 100%;">
	<div class="centered" style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
	<h1 style="color: #ffffff;font-family: &quot;Nunito Sans&quot; !important; font-size: 60px; font-weight: 100; text-align: center;">Register My Business</h1></div>
	<div class="centered" style="font-size: 30px; color: #feaa00;position: absolute;top: 55%;left: 50%;transform: translate(-50%, -50%);">SubHeader Title</div>
        </div>
        </div>	
	</section>
	<div class="content" style="">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div class="account-content" style="margin-bottom: 40px; padding: 0% 8% 0% 8%;">
						<div class="row align-items-center justify-content-center">
							
							<div class="col-md-12 col-lg-10 login-right" style="box-shadow: none; margin-top:5%;">
								<div class="login-header">
									<h3>Braider Register 
										<router-link :to="{name:'Register'}">Not a Braider?</router-link>
									</h3>
								</div>
								<div class="row form-row">
									<div class="col-md-12">
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
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Full Name <span class="text-danger">*</span></label>
											<input 
											type="text" 
											class="form-control" 
											v-model="data.name"
											:class="{'is-invalid':errors.name}"
											placeholder="Enter Your Name">
											<small v-if="errors.name" class="form-text text-danger">
												{{errors.name}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>State <span class="text-danger">*</span></label>
											<select v-model="data.state" class="form-control">
												<option value="">Select State</option>
												<option v-for="(userCountry_obj, userCountry) in userplaces"  :value="userCountry" :key="userCountry">{{userCountry}}</option>
											</select>
											<!-- <input 
											type="text" 
											class="form-control" 
											v-model="data.state"
											:class="{'is-invalid':errors.state}"
											@keypress="onlyTwoChar($event)"
											placeholder="Enter Your State"> -->
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
											<!-- <input 
											type="text" 
											class="form-control"
											v-model="data.city" 
											:class="{'is-invalid':errors.city}"
											placeholder="Enter Your City"> -->
											<select :disabled="userCountries.length == 0" v-model="data.city" class="form-control">
												<option value="">Select a City</option>
												<option v-for="(userCity_obj, userCity) in userCountries" :key="userCity">{{userCity}}</option>
											</select>
											<small v-if="errors.city" class="form-text text-danger">
												{{errors.city}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Zip Code <span class="text-danger">*</span></label>
											<!-- <input 
											type="text" 
											class="form-control" 
											v-model="data.zipcode"
											:class="{'is-invalid':errors.zipcode}"
											placeholder="Enter Your Zip Code"> -->
											<select :disabled="userCities.length == 0" v-model="data.zipcode" class="form-control">
												<option value="">Select a Zip</option>
												<option v-for="userCity in userCities" :key="userCity">{{userCity}}</option>
											</select>
											<small v-if="errors.zipcode" class="form-text text-danger">
												{{errors.zipcode}}
											</small>
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
											v-model="data.email"
											:class="{'is-invalid':errors.email}"
											placeholder="Enter Your Email">
											<small v-if="errors.email" class="form-text text-danger">
												{{errors.email}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Business Name </label>
											<input 
											type="text" 
											class="form-control"
											v-model="data.businessName" 
											:class="{'is-invalid':errors.businessName}"
											placeholder="Enter Your Business Name">
											<small v-if="errors.businessName" class="form-text text-danger">
												{{errors.businessName}}
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
											v-model="data.websiteLink"
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
											v-model="data.business_phone_number"
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
											v-model="data.introduction"
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
											<label>Special Instruction for New Clients <span class="text-danger">*</span></label>
											<textarea 
											class="form-control" 
											v-model="data.special_introduction"
											:class="{'is-invalid':errors.special_introduction}"
											placeholder="Enter Your Special Instructions"></textarea>
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
											v-model="data.policy_procedure"
											class="form-control" 
											:class="{'is-invalid':errors.policy_procedure}"
											placeholder="Enter Your Policy & Procedures"></textarea>
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
													v-model="data.outOfShop"
													value="1"
													checked="" 
													name="outOfShop"
													>
													<label class="custom-control-label" for="outOfShopYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="outOfShopNo"
													v-model="data.outOfShop"
													value="0"
													name="outOfShop"
													class="custom-control-input">
													<label class="custom-control-label" for="outOfShopNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Do you style from home? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													class="custom-control-input"  
													id="fromHomeYes"
													v-model="data.fromHome"
													value="1"
													checked="">
													<label class="custom-control-label" for="fromHomeYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="fromHomeNo"
													v-model="data.fromHome"
													value="0"
													class="custom-control-input">
													<label class="custom-control-label" for="fromHomeNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Are you a mobile and/or traveling braider? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="travelingBraiderYes"
													v-model="data.travelingBraider"
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
													v-model="data.travelingBraider"
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
									
									<div class="col-md-4">
										<label>Can you provide hair? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="provideHairYes"
													v-model="data.provideHair"
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
													v-model="data.provideHair"
													name="provideHair"  
													value="0" 
													class="custom-control-input">
													<label class="custom-control-label" for="provideHairNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Do you wash hair? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="washHairYes"
													name="washHair"
													v-model="data.washHair" 
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
													v-model="data.washHair"
													value="0" 
													class="custom-control-input">
													<label class="custom-control-label" for="washHairNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<label>Men's Braids? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="menBraidsYes"
													name="menBraids"
													v-model="menBraids" 
													value="1" 
													class="custom-control-input"  
													checked="">
													<label class="custom-control-label" for="menBraidsYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													name="menBraids"  
													id="menBraidsNo"
													v-model="menBraids"
													value="0" 
													class="custom-control-input">
													<label class="custom-control-label" for="menBraidsNo">No</label>
												</div>
											</div>
										</div>
									</div>
								</div><br>
								<div class="row form-row">
									<div class="col-md-4">
										<label>Kid's Braids? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="kidsBraidsYes"
													name="kidsBraids"
													v-model="kidsBraids" 
													value="1" 
													class="custom-control-input"  
													checked="">
													<label class="custom-control-label" for="kidsBraidsYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													name="kidsBraids"  
													id="kidsBraidsNo"
													v-model="kidsBraids"
													value="0" 
													class="custom-control-input">
													<label class="custom-control-label" for="kidsBraidsNo">No</label>
												</div>
											</div>
										</div>
									</div>
									<!-- <div class="col-md-4">
										<label>Do you want receive payment online? <span class="text-danger">*</span></label>
										<div class="form-group mb-0">
											<div id="pricing_select">
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													id="paymentOnlineYes"
													name="paymentOnline"
													v-model="data.paymentOnline" 
													value="1" 
													class="custom-control-input"  
													checked="">
													<label class="custom-control-label" for="paymentOnlineYes">Yes</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input 
													type="radio" 
													name="paymentOnline"  
													id="paymentOnlineNo"
													v-model="data.paymentOnline"
													value="0" 
													class="custom-control-input">
													<label class="custom-control-label" for="paymentOnlineNo">No</label>
												</div>
											</div>
										</div>
									</div> -->
								</div>
								<br>
								<!-- <div>

									<div class="education-info">
										<div class="row form-row education-cont">
											<div class="col-12 col-md-10 col-lg-11">
												<div class="row form-row">
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Service</label>
															<select class="form-control select" v-model="data.service">
																<option value="">Enter Your Service</option>
																<option 
																	v-for="list in serviceList" 
																	:key="list.uuid"
																	:value="list.title"
																>
																	{{list.title}} 
																</option>
															</select>
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Hour</label>
															<select class="form-control" v-model="data.hour">
																<option v-for="i in 10" :key="i" :value="i">{{i}} </option>

															</select>
															
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Minutes</label>
															<select class="form-control" v-model="data.minute">
																<option v-for="i in 60" :key="i" :value="i">{{i}} </option>

															</select>
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Price</label>
															<input 
															type="text" 
															class="form-control" 
															v-model="data.price"
															placeholder="Price">
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="education-info"  v-for="(service,index) in this.services" :key="index">
										<div class="row form-row education-cont">
											<div class="col-12 col-md-10 col-lg-11">
												<div class="row form-row">
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Service</label>
															<select 
															class="form-control select" 
															disabled="" 
															v-model='service.services'>
																<option>Enter Your Service</option>
																<option 
																	v-for="list in serviceList" 
																	:key="list.uuid"
																	:value="list.title"
																>
																	{{list.title}} 
																</option>
																
															</select>
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Hour</label>
															<input 
															type="text" 
															class="form-control" 
															v-model="service.hours"
															readonly="" 
															placeholder="Hour">
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Minutes</label>
															<input 
															type="text" 
															class="form-control" 
															v-model="service.minute"
															readonly="" 
															placeholder="Minutes">
														</div>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Price</label>
															<input 
															type="text" 
															v-model="service.price"
															class="form-control" 
															readonly="" 
															placeholder="Price">
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-2 col-lg-1" @click="removeService(index)">
												<label class="d-md-block d-sm-none d-none">&nbsp;</label>
												<a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>
											</div>
										</div>
									</div>

								</div> -->
								<!-- <div class="add-more">
									<a href="javascript:void(0);" @click="addServices()" class="add-education"><i class="fa fa-plus-circle"></i> Add More</a>
								</div>
								<br> -->
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Booking Deposit Amount <span class="text-danger">*</span></label>
											<input 
											type="text" 
											v-model="data.booking_deposit_amount"
											class="form-control" 
											:class="{'is-invalid':errors.booking_deposit_amount}"
											placeholder="Booking Deposit Amount">
											<small v-if="errors.booking_deposit_amount" class="form-text text-danger">
												{{errors.booking_deposit_amount}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Coupon Code</label>
											<input 
											type="text" 
											v-model="data.couponCode"
											class="form-control" 
											:class="{'is-invalid':couponError,'is-valid':isCouponApplied}"
											
											placeholder="Coupon Code">
											<small v-if="couponError" class="form-text text-danger">
												{{couponError}}
											</small>
										</div>
									</div>
								</div>
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Password <span class="text-danger">*</span></label>
											<input 
											type="password" 
											class="form-control" 
											v-model="data.password"
											:class="{'is-invalid':errors.password}"
											placeholder="Password">
											<small v-if="errors.password" class="form-text text-danger">
												{{errors.password}}
											</small>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Repeat Password <span class="text-danger">*</span></label>
											<input 
											type="password" 
											class="form-control" 
											v-model="data.password_confirmation"
											:class="{'is-invalid':errors.password_confirmation}"
											placeholder="Re-Enter Password">
											<small v-if="errors.password_confirmation" class="form-text text-danger">
												{{errors.password_confirmation}}
											</small>
										</div>
									</div>
								</div>
								<div class="payment-widget" v-if="isCouponApplied === false ">

									<h4 class="card-title">Subcribe A Plan</h4>

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

									


									<div class="terms-accept">
										<div class="custom-checkbox">
											<input type="checkbox" id="terms_accept">&nbsp;
											<label for="terms_accept" class="checkboxLabel">By clicking "Submit Payment" I agree to Braidsnow's <a href="#" @click="termAndCondition($event)">Terms &amp; Conditions</a></label> 
											<label for="terms_accept1"><strong>Note: </strong>
												After your 30-day trial,your card will be charged $19.99/Month to use the BraidsNow Platform
											</label> 
										</div>
									</div>
									<div class="submit-section mt-4" v-if="isLoading">
										<button class="btn btn-primary submit-btn" type="button" >
											<div class="loader">
												Loading
												<span class="dot dot-1"></span>
												<span class="dot dot-2"></span>
												<span class="dot dot-3"></span>
											</div>

										</button>	
									</div>
									<div class="submit-section mt-4" v-else>
										<button class="btn btn-primary submit-btn" type="button" @click="onsubmit">
											Subscribe

										</button>	
									</div>
								</div>
								<!-- else Condition -->
								<div class="payment-widget" v-if="isCouponApplied === true ">



									<div class="terms-accept">
										<div class="custom-checkbox">
											<input type="checkbox" id="terms_accept">&nbsp;
											<label for="terms_accept" class="checkboxLabel">By clicking "Submit Payment" I agree to Braidsnow's <a href="#" @click="termAndCondition($event)">Terms &amp; Conditions</a></label> 
										</div>
									</div>
									<div class="submit-section mt-4" v-if="isLoading">
										<button class="btn btn-primary submit-btn" type="button" >
											<div class="loader">
												Loading
												<span class="dot dot-1"></span>
												<span class="dot dot-2"></span>
												<span class="dot dot-3"></span>
											</div>

										</button>	
									</div>
									<div class="submit-section mt-4" v-else>
										<button class="btn btn-primary submit-btn" type="button" @click="onsubmit">
											Subscribe

										</button>	
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade" id="termAndCondition" style="margin-top:6%;">
		<div class="modal-dialog modal-lg" style="overflow-y: initial !important">
			<div class="modal-content" style="height: 80vh; margin-bottom: 20%;">
				<div class="modal-header">
					<h5 class="modal-title" >Term & Conditions</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" ref="closePaymentModal">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body" style="overflow-y: auto;">
					<p v-html="term.description"></p>
					<br>
					
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-success" @click="printDocument()">
					<i class="fa fa-download"></i> Download
					</button>
				</div>
			</div>
		</div>
	</div>
	<a 
	data-target="#termAndCondition" 
	data-toggle="modal"
	style="margin-top:8%" 
	ref="openTermAndCondition"></a>

<!-- <footer-component/>  -->
<!-- <Loader :isLoading="preLoader"/> --> 
	<CopyRightsComponent />
<Loader :isLoading="preLoader"/>
>>>>>>> d6b1ddbd31aca1c3387316ed04abf7296a1fd378
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import {services,braiderRegister} from  '@/services/auth'
	import {errObj, dataObj} from './interfaces/RegisterBraiderInterface'
	import Swal from 'sweetalert2'
	import Auth from '@/models/Auth'

	// import Loader from '@/components/Loader';
	// import FooterComponent from '@/components/Layout/Footer';
	import CopyRightsComponent from '@/components/Layout/CopyRights'
	// import Loader from '@/components/Loader';
	// import FooterComponent from '@/components/Layout/Footer';

	import { getCms } from '@/services/cms';
	import pdfMake from 'pdfmake';
	import pdfFonts from 'pdfmake/build/vfs_fonts';
	import htmlToPdfmake from 'html-to-pdfmake';
	// import Address from '@/models/Braider'

	export default {
		name: 'BusinessRegister',
		components:{MenuComponent,CopyRightsComponent},
		data(){
			return {
				userplaces: {
					"Alaska": {
						"Abbeville": ["36310"],
						"Birmingham": ["35203", "35204", "35205", "35206"],
					},
					"Alabama": {
						"Adona": ["72001"],
						"North Little Roc": ["72114", "72117", "72120"],
					}
				},
			userCountries: [],
            userCities: [],
				term:{},
				preLoader:true,
				services: [],
				serviceList:[],
				errors:errObj,
				data:dataObj,
				previewAvatar: 'assets/img/theraphist/theraphist-thumb-01.png',
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
				menBraids:1,
				kidsBraids:1,
				cardErrors:{
					name:false,
					number:false,
					exp_year:false,
					exp_month:false,
					cvc:false
				},
				paymentMethod:1,
				buttonLoading:false,
				isCouponApplied:false,
				couponError:''
			}
		},
		async mounted(){
			
			await services()
			.then(async res => this.serviceList = await res.data.data)
			.catch(err => {
				console.log(err);
			})

			await getCms().then(async res =>{
				this.term = (res.data.data.filter(cms => cms.id == 2))[0];
			})
			.catch(err => console.log(err))


			setTimeout(() => {
				this.preLoader = false;
			}, 1000);

		},
		watch:{

			cardNumber: function() {
				this.cc_format();
			},
			"data.couponCode":{
				handler(val){

					if (val == 'BNLFMB') {
						this.couponError = "";
						this.isCouponApplied = true;
					}else{
						if (val == "") {
							this.couponError = "";
						}else{

							this.couponError = "Invalid coupon";
							this.isCouponApplied = false;
						}
					}
					
				},
				deep: true
			},
			"data.state": function() {
				// Clear previously selected values
				this.userCountries = [];
				this.userCities = [];
				this.data.city = "";
				this.data.zipcode = "";
				// Populate list of userCountries in the second dropdown
				if (this.data.state.length > 0) {
					this.userCountries = this.userplaces[this.data.state]
				}
			},
			"data.city": function() {
				// Clear previously selected values
				this.userCities = [];
				this.data.zipcode= "";
				// Now we have a continent and userCountry. Populate list of userCities in the third dropdown
				if (this.data.city.length > 0) {
					this.userCities = this.userplaces[this.data.state][this.data.city]
				}
			}
		},
		methods:{
			printDocument() {
				var html = htmlToPdfmake(this.term.description);
				const documentDefinition = { content: html };
				pdfMake.vfs = pdfFonts.pdfMake.vfs;
				pdfMake.createPdf(documentDefinition).open();
			},
			termAndCondition(event){

				event.preventDefault();
				this.$refs.openTermAndCondition.click();
			},
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
							await braiderRegister({stripeToken:response.id})
							this.isLoading = false;
							//await this.withPayment();
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

						}
					});
				}else{
					await this.withoutPayment();
					this.isLoading = false;
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

				this.data.avatar = event.target.files[0];
				let size = Math.round(this.data.avatar.size/1024);
				
				if (size > 1024) {
					event.preventDefault();
					this.errors.avatar = 'File too big (> 1MB)';
					return;
				}

				this.previewAvatar = URL.createObjectURL(this.data.avatar)
			},
			serializeFormData(){

				let formData = new FormData();
				formData.set('avatar',this.data.avatar);
				formData.set('name',this.data.name);
				formData.set('state',this.data.state);
				formData.set('city',this.data.city);
				formData.set('zipcode',this.data.zipcode);
				formData.set('email',this.data.email);
				formData.set('business_name',this.data.businessName);
				formData.set('website_link',this.data.websiteLink);
				formData.set('business_phone_number',this.data.business_phone_number);
				formData.set('introduction',this.data.introduction);
				formData.set('special_introduction',this.data.special_introduction);
				formData.set('policy_procedure',this.data.policy_procedure);
				formData.set('booking_deposit_amount',this.data.booking_deposit_amount);
				formData.set('policy_procedure',this.data.policy_procedure);
				formData.set('coupon_code',this.data.couponCode);
				formData.set('password',this.data.password);
				formData.set('password_confirmation',this.data.password_confirmation);
				formData.set('do_you_braid_out_of_a_shop',this.data.outOfShop);
				formData.set('do_you_braid_from_home',this.data.fromHome);
				formData.set('are_you_a_mobile',this.data.travelingBraider);
				formData.set('can_you_provide_hair',this.data.provideHair);
				formData.set('do_you_wash_hair',this.data.washHair);
				formData.set('paymentOnline',this.data.paymentOnline);
				formData.set('services',JSON.stringify(this.services));
				formData.set('cardNumber',this.cardNumber);
				formData.set('expireMonth',this.cardExpiryMonth);
				formData.set('expireYear',this.cardExpiryYear);
				formData.set('cvc',this.cardCvc);
				formData.set('men_braids',this.menBraids);
				formData.set('kids_braids',this.kidsBraids);
				formData.set('isCouponApplied',this.isCouponApplied);
				
				return formData;
			},
			async onsubmit(){
				
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
							
							await braiderRegister(this.serializeFormData())
							.then(async res => {
								await Auth.insert({data: res.data.user});
								await localStorage.setItem('api_token',res.data.token);
								this.$router.push({name:'BraiderDashboard'});
							}).catch(err => {
								Object.keys(err?.response?.data?.errors).map(name => {
									this.errors[name] = err?.response?.data?.errors[name][0];
								});
								window.scrollTo({
									top:0,
									behavior: 'smooth'
								});
							});
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
					this.isLoading = false;
				}

				if (this.isCouponApplied === true) {
					await braiderRegister(this.serializeFormData())
					.then(async res => {
						await Auth.insert({data: res.data.user});
						await localStorage.setItem('api_token',res.data.token);
							this.$router.push({name:'BraiderDashboard'});
						})
					.catch(err => {
						Object.keys(err?.response?.data?.errors).map(name => {
							this.errors[name] = err?.response?.data?.errors[name][0];
						});
						window.scrollTo({
							top:0,
							behavior: 'smooth'
						});
					});
				}

			},
			onlyTwoChar(event){

				if (this.data.state.length >= 2) {
					event.preventDefault();
				}
			},
			clear(){

				this.errors = {
					avatar:'',
					name:'',
					state:'',
					city:'',
					zipcode:'',
					email:'',
					businessName:'',
					websiteLink:'',
					business_phone_number:'',
					special_introduction:'',
					specialIntro:'',
					policy_procedure:'',
					booking_deposit_amount:'',
					couponCode:'',
					password:'',
					password_confirmation:'',
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
				this.cardErrors = {
					name:false,
					number:false,
					exp_year:false,
					exp_month:false,
					cvc:false
				};
			},
		}
	}
</script>
<style scoped>
.home-banner2 {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 750px;
    position: relative;
}
</style>
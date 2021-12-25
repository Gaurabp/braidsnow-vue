<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Braider Profile</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Braider Profile</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">

			<div class="card">
				<div class="card-body">
					<div class="provider-widget">
						<div class="pro-info-left">
							<div class="provider-img">
								<img :src="basePath+profileData.avatar" class="img-fluid" :alt="profileData.name">
							</div>

							<div class="pro-info-cont">
								<h4 class="pro-name">{{profileData.name}}  <svg width="24" height="24" @click="shareProfile(profileData)" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 16V5.41421L16.2929 8.70711L17.7071 7.29289L12 1.58578L6.29289 7.29289L7.70711 8.70711L11 5.41421V16H13ZM21 20V11H19V20H5V11H3V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20Z" fill="#121111"></path></svg></h4>

								<div class="rating">
									<i class="fas fa-star filled" v-for="i in profileData.ratting" :key="i"></i>
									
									<i class="fas fa-star" v-for="j in (5 - profileData.ratting)" :key="j"></i>
									<span class="d-inline-block average-rating">({{profileData?.reviews?.length}})</span>
								</div>
								<div class="clinic-details">
									<p class="pro-location">
										<i class="fas fa-map-marker-alt"></i> {{profileData.city}},{{profileData.state}}, USA 
									</p>

									<ul class="clinic-gallery">
										<li v-for="portfolio in profileData.portfolio" :key="portfolio.id">
											<a :href="basePath+portfolio.image" data-fancybox="gallery">
												<img :src="basePath+portfolio.image" alt="Feature"/>
											</a>
										</li>
									</ul>
								</div>
								<div >
							
								<ul class="clearfix">
									
									<li v-if="profileData.do_you_braid_out_of_a_shop">Braid Out Of A Shop </li>
									<li v-if="profileData.do_you_braid_from_home">Braid From Home </li>
									<li v-if="profileData.are_you_a_mobile">Mobile</li>
									<li v-if="profileData.can_you_provide_hair">Provide Hair</li>
									<li v-if="profileData.men_braids">Men Braids </li>
									<li v-if="profileData.kids_braids">Kids Braids</li>
								</ul>
							</div>
								<!-- <div class="clinic-services">
									<span v-for="service in profileData.user_services" :key="service.id">{{service.service}}</span>
								</div> -->
							

							</div>


						</div>
						<div class="pro-info-right">
							<div class="provider-action">
								<a :href="profileData?.social_media?.facebook_url" target="_blank" class="btn btn-white fav-btn">
								<i class="fab fa-facebook-f"></i>
								</a>
								<a :href="profileData?.social_media?.twitter_url" target="_blank" class="btn btn-white fav-btn">
								<i class="fab fa-twitter"></i>
								</a>
								<a :href="profileData?.social_media?.instagram_url" target="_blank" class="btn btn-white fav-btn">
								<i class="fab fa-instagram"></i>
								</a>
								<a :href="profileData?.social_media?.youtube_url" target="_blank" class="btn btn-white fav-btn">
								<i class="fab fa-youtube"></i>
								</a>
							</div>
							<div class="provider-action">
								<a href="javascript:void(0)" class="btn btn-white fav-btn" @click="addFav(profileData.id)">
								<i class="far fa-bookmark"></i>
								</a>
								<a :href="profileData.website_link" target="_blank" class="btn btn-white msg-btn">
								<i class="fas fa-globe"></i>
								</a>
								<a :href="'tel:+1 '+profileData.business_phone_number" class="btn btn-white call-btn">
								<i class="fas fa-phone"></i>
								</a>
								<a :href="'mailto: '+profileData.email" class="btn btn-white call-btn">
								<i class="fas fa-envelope"></i>
								</a>
							</div>
							<div class="clini-infos">
								<ul>
									<li>
										<div class="col-12 col-sm-12 col-md-12">
											<select class="form-control" v-model="serviceLocation">
												<option value="work_from_shop"
												>Work from shop</option>
												<option 
												value="work_from_home"
												v-if="profileData.do_you_braid_from_home"
												>Work from home</option>
												<option value="mobile"
												v-if="profileData.are_you_a_mobile"
												>Mobile/Travling</option>
											</select>
										</div>
									</li>
									<li><i class="far fa-comment"></i> {{profileData?.reviews?.length}} Feedback</li>
								
									<li><i class="far fa-money-bill-alt"></i> ${{profileData.booking_deposit_amount}} Deposit Amount</li>
								</ul>
							</div>
							
							
							<div class="clinic-booking">
								<a @click="bookNow(profileData.id)"
									style="cursor:pointer;" 
									class="apt-btn">Book now</a>
								
								<!-- <router-link :to="{name:'Booking',param:{id:profileData.id}}" class="apt-btn">
									Work from home
								</router-link>
								<router-link :to="{name:'Booking',param:{id:profileData.id}}" class="apt-btn">
									Mobile/Travling
								</router-link> -->
							</div>
						</div>
					</div>
				</div>
			</div>


			<div class="card">
				<div class="card-body pt-0">

					<nav class="user-tabs mb-4">
						<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
							<li class="nav-item">
							<a class="nav-link active" href="#doc_overview" data-toggle="tab">Overview</a>
							</li>
							<!-- <li class="nav-item">
							<a class="nav-link" href="#doc_locations" data-toggle="tab">Locations</a>
							</li> -->
							<li class="nav-item">
							<a class="nav-link" href="#doc_reviews" data-toggle="tab">Reviews</a>
							</li>
							<li class="nav-item">
							<a class="nav-link" href="#doc_business_hours" data-toggle="tab">Business Hours</a>
							</li>
						</ul>
					</nav>


					<div class="tab-content pt-0">

						<div role="tabpanel" id="doc_overview" class="tab-pane fade show active">
							<div class="service-list">
								<h4>Services</h4>
								<ul class="clearfix">
									
									<li v-for="service in profileData.user_services" :key="service.id">{{service.service}}</li>
								</ul>
							</div>
							
							<div class="row">
								<div class="col-md-12 col-lg-9">
									<div class="widget about-widget">
										<h4 class="widget-title">Introduction</h4>
										<p v-html="profileData.introduction"></p>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12 col-lg-9">
									<div class="widget about-widget">
										<h4 class="widget-title">Special Introduction</h4>
										<p v-html="profileData.special_introduction"></p>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12 col-lg-9">
									<div class="widget about-widget">
										<h4 class="widget-title">Policy Procedure</h4>
										<p v-html="profileData.policy_procedure"></p>
									</div>
								</div>
							</div>
							

						</div>

						<div role="tabpanel" id="doc_reviews" class="tab-pane fade">

							<div class="widget review-listing">
								<ul class="comments-list">

									<li v-for="review in profileData.reviews" :key="review.id">
										<div class="comment">
											<img 
											class="avatar avatar-sm rounded-circle" 
											:alt="review.user.avatar" 
											:src="basePath+review.user.avatar"
											>
											<div class="comment-body">
												<div class="meta-data">
													<span class="comment-author">{{review.user.name}} </span>
													<span class="comment-date">Reviewed {{review.reviewed_at}} </span>
												</div>
													<div class="review-count rating">
														<i class="fas fa-star filled" v-for="(i,index) in review.ratting" :key="index"></i>
														
														<i class="fas fa-star" v-for="(j,index) in (5 - review.ratting)" :key="index"></i>
													</div>

												<p class="recommended">{{review.title}}</p>
												<p class="comment-content">
													{{review.review}}
												</p>

											</div>
										</div>
									</li>
								</ul>

								

							</div>


							<div class="write-review">
								<h4>Write a review for <strong>{{profileData.name}} </strong></h4>

								<form>
									<div class="form-group">
										<label>Review</label>
										<div class="star-rating">

											<input id="star-5" type="radio" name="rating" v-model="reviewData.ratting" value="5">
											<label for="star-5" title="5 stars">
											<i class="active fa fa-star"></i>
											</label>

											<input id="star-4" type="radio" name="rating" v-model="reviewData.ratting" value="4">
											<label for="star-4" title="4 stars">
											<i class="active fa fa-star"></i>
											</label>

											<input id="star-3" type="radio" name="rating" v-model="reviewData.ratting" value="3">
											<label for="star-3" title="3 stars">
											<i class="active fa fa-star"></i>
											</label>

											<input id="star-2" type="radio" name="rating" v-model="reviewData.ratting" value="2">
											<label for="star-2" title="2 stars">
											<i class="active fa fa-star"></i>
											</label>

											<input id="star-1" type="radio" name="rating" v-model="reviewData.ratting" value="1">
											<label for="star-1" title="1 star">
											<i class="active fa fa-star"></i>
											</label>

										</div>
									</div>
									<div class="form-group">
										<label>Title of your review</label>
										<input 
										class="form-control" 
										type="text" 
										v-model="reviewData.title"
										placeholder="If you could say it in one sentence, what would you say?">
									</div>
									<div class="form-group">
										<label>Your review</label>
										<textarea 
										id="review_desc" 
										v-model="reviewData.description" 
										maxlength="500" class="form-control"></textarea>

										<div class="d-flex justify-content-between mt-3">
											<small class="text-muted"><span id="chars">{{500 - reviewData.description.length}} </span> characters remaining</small>
										</div>
									</div>
									<hr>
									
									<div class="submit-section" v-if="reviewData.ratting && reviewData.title && reviewData.description">
										<button type="button" @click="onSumit" class="btn btn-primary submit-btn">Add Review</button>
									</div>

								</form>

							</div>
						</div>


						<div role="tabpanel" id="doc_business_hours" class="tab-pane fade">
							<div class="row">
								<div class="col-md-6 offset-md-3">

									<div class="widget business-widget">
										<div class="widget-content">
											<div class="listing-hours">
											<!-- 	<div class="listing-day current">

													<div class="day">Today <span>{{today}} </span>
													</div>

													<div class="time-items">
														<span class="open-status">
															<span class="badge" 
															:class="currentDayTiming().statusClass"
															>{{currentDayTiming().status?'Open Now':'Closed'}} </span>
														</span>
														<span class="time"> {{currentDayTiming().timing}}</span>
													</div>

												</div> -->
												<div class="listing-day" v-for="working in profileData.working_days" :key="working.id">

													<div class="day">{{working.name}} </div>
													<div class="time-items">
														<span class="time" v-if="working.status">
															{{parseTime(working.start_time)}} - {{parseTime(working.end_time)}}
														</span>
														<span class="time" v-else><span class="badge bg-danger-light">Closed</span></span>
													</div>

												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

		</div>
		<div class="modal fade custom-modal" id="paymentModal" >
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Share</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" ref="closePaymentModal">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
		

						<div class="col-md-12 col-lg-12 col-xl-12 col-sm-12">
							<div style="background-color: #4a6ea9;
							height: 30px;
							line-height: 2;
							width: 100%;
							text-align: center;
							cursor: pointer;
							color: white;"
							@click="shareFB()"
							> Facebook</div>
						</div>
					</div><hr>
					<div class="row">
						<div class="col-md-12 col-lg-12 col-xl-12 col-sm-12">
							<div 
							@click="shareTwitter()"
							style="background-color: #359bf0;
							height: 30px;
							line-height: 2;
							width: 100%;
							text-align: center;
							color: white;
							"> Twitter</div>
						</div>
					</div> <hr>
					<div class="row">
						<div class="col-md-12 col-lg-12 col-xl-12 col-sm-12">
							<div 
							@click="shareWhatsapp()"
							style="background-color: #2e9688;
							height: 30px;
							line-height: 2;
							width: 100%;
							text-align: center;
							color: white;
							">Whatsapp</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
	<a data-target="#paymentModal" data-toggle="modal" ref="openPaymentModal"></a>
	</div>
	<footer-component/>
	<Loader :isLoading="isLoading"/>
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import {braiderProfile} from '@/services/websiteServices'
	import {ReviweStore} from '@/services/CustomerServices'
	import AssetsPath from '@/utils/AssetsPath'
	import moment from 'moment'
	import Auth from '@/models/Auth'
	import Swal from 'sweetalert2'
	import {favouriteStore} from '@/services/CustomerServices'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'
	import Social from '@/plugins/SocialShare'
	import BaseUrl from '@/utils/BaseUrl'

	export default {
		name:'Profile',
		components:{MenuComponent,Loader,FooterComponent},
		data(){
			return {
				profileData:'',
				shareData:'',
				reviewData:{
					ratting:'',
					title:'',
					description:''
				},
				serviceLocation:'work_from_shop',
				isLoading:true,
			}
		},
		computed:{
			baseUrl(){
				return BaseUrl;
			},
			basePath(){
				return AssetsPath;
			},
			today(){
				return moment().format('DD MMM YYYY');
			},
			todayDay(){
				return moment().format('dddd');
			},
			auth(){
				
				return  Auth.query().first();
			},
			token(){
				
				return this.auth.api_token;
			},
		},

		async mounted(){

			await this.fetchBraiderInfo();

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			shareProfile(braider){
				this.shareData = braider;
				this.$refs.openPaymentModal.click();
			},
			parseTime(time){
				return moment(time,'hh:mm').format('hh:mm A');
			},
			fetchBraiderInfo(){

				const id = this.$route.params.id;
			
				braiderProfile(id)
				.then(res => this.profileData = res.data.user);

			},
			currentDayTiming(){
				const currentTime = this.profileData?.working_days?.filter(day => day.name == this.todayDay)
				if (currentTime && currentTime.length) {
					const time = currentTime[0];
					let status = false;
					let statusClass = 'bg-danger-light'

					if (moment().format('hh:mm') > time.start_time && moment().format('hh:mm') < time.end_time) {
						status = true;
						statusClass = 'bg-success-light'
					}else{
						status = false;
						statusClass = 'bg-danger-light'
					}
					return {
						statusClass,
						status,
						timing: `${this.parseTime(time.start_time)} - ${this.parseTime(time.end_time)}`
					}
					
				}

				return {};
			},
			onSumit(){
				
				if (this.auth) {

					console.log({...this.reviewData,braider_id:this.profileData.id})
					ReviweStore(this.token,{...this.reviewData,braider_id:this.profileData.id})
					.then(async () => {

						await this.fetchBraiderInfo();
						Swal.fire({
							icon: 'success',
							title: 'Success',
							text: 'Thank for giving us your valuable feedback',
						})

						this.reviewData = {ratting:'',title:'',description:''};
					})
					
				

				}else{
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Please login before writting your valuable feedback',
					})
				}
			},
			addFav(braider_id){
				if (this.auth) {

					favouriteStore(this.token,{braider_id})
				}else{
					//this.$router.push('/login');
				}
			},
			bookNow(id){

				localStorage.setItem('serviceLocation',this.serviceLocation);
				this.$router.push({name:'Booking',params:{id}});
			},
			shareFB(){

				let link = this.baseUrl+'profile/'+this.shareData.id;

				const social = new Social;

				const url = social.facebook(link,'Braider Profile',);

				window.open(url, '_blank');
			},
			shareTwitter(){

				let link = this.baseUrl+'profile/'+this.shareData.id;
				const social = new Social;

				const url = social.twitter(link,'Braider Profile',);

				window.open(url, '_blank');
			},
			shareWhatsapp(){

				let link = this.baseUrl+'profile/'+this.shareData.id;
				const social = new Social;

				const url = social.whatsapp(link,'Braider Profile',);

				window.open(url, '_blank');
			}

		}
	}
</script>
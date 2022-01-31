<template>
<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Find a Styler</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Find a Styler</h2>
				</div>
				
			</div>
		</div>
	</div>
<div class="content">
	<div class="container"> 
		<div class="row">
			<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
				<div class="card search-filter">
					<div class="card-header">
						<h4 class="card-title mb-0">Filter Your Search</h4>
					</div>
					<div class="card-body">
						<div class="filter-widget">
							<h4>Location:</h4>
							
								<input 
								type="text" 
								class="form-control" 
								v-model="searchLocation"

								placeholder="Search Location">
							
						</div>
						<div class="filter-widget">
							<h4>Services By Category:</h4>
							<div>
							<!-- <Select2 v-model="myValue" 
							:options="serviceList" 
							:settings="{ settingOption: title, settingOption: title }" 
							@change="myChangeEvent($event)" 
							@select="mySelectEvent($event)" /> -->
							<Multiselect 
							v-model="myValue" 
							placeholder="select service"
							mode="tags" 
							:closeOnSelect="false"
							:searchable="true"
							:createTag="true"
							:options="serviceList"/>

								<!-- <select class="form-control" id="category" aria-hidden="true" v-model="searchService">
									<option 
									v-for="service in serviceList" 
									:key="service.id"
									:value="service.title">
										{{service.title}}
									</option>
								</select> -->
							</div>
							
						</div>
						<div class="filter-widget">
							<h4>Rating</h4>
							<div>
								<label class="custom_check">
								<input type="checkbox" v-model="rattings.starFive" value="5">
								<span class="checkmark"></span> 
								<div class="rating">
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
								</div>
								</label>
							</div>
							<div>
								<label class="custom_check">
								<input type="checkbox" v-model="rattings.starFour" value="4">
								<span class="checkmark"></span> 
								<div class="rating">
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star"></i>
								</div>
								</label>
							</div>
							<div>
								<label class="custom_check" > 
								<input type="checkbox" v-model="rattings.starThree" value="3"> 
								<span class="checkmark"></span> 
								<div class="rating">
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
								</div>
								</label>
							</div>
							<div>
								<label class="custom_check">
								<input type="checkbox" v-model="rattings.starTwo" value="2">
								<span class="checkmark"></span>
								<div class="rating">
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
								</div>
								
								</label>
							</div>
							<div>
								<label class="custom_check">
								<input type="checkbox" v-model="rattings.starOne" value="1">
								<span class="checkmark"></span>
								<div class="rating">
									<i class="fas fa-star filled"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
								</div>
								</label>
							</div>
							
						</div>
						<div class="filter-widget">
							<h4>Pricing:</h4>
							<div class="row">
								<div class="col-md-6">
									<label>Min</label>
									<select class="form-control" aria-hidden="true" v-model="priceMin">
									<option value="0">$0</option>
									<option value="100">$100</option>
									<option value="200">$200</option>
									<option value="300">$300</option>
									<option value="400">$400</option>
									<option value="500">$500</option>
									<option value="600">$600</option>
									</select>
								</div>
								<div class="col-md-6">
									<label>Max</label>
									<select class="form-control" aria-hidden="true" v-model="priceMax">
									<option value="0">$0</option>
									<option value="700">$700</option>
									<option value="800">$800</option>
									<option value="900">$900</option>
									<option value="1000">$1000</option>
									<option value="1100">$1100</option>
									<option value="1200">$1200</option>
									</select>
								</div>
							</div>
						</div>
						<div class="filter-widget">
							<h4>Traveling Stylist</h4>
							<div>
								<label class="custom_check">
									<input type="checkbox" v-model="stylist.inShop"  value="1">
									<span class="checkmark"></span> In Shop
								</label>
							</div>
							<div>
								<label class="custom_check">
									<input type="checkbox" v-model="stylist.inHome"  value="1">
									<span class="checkmark"></span> In Home
								</label>
							</div>
							<div>
								<label class="custom_check">
									<input type="checkbox" v-model="stylist.mobile" value="1">
									<span class="checkmark"></span> Mobile
								</label>
							</div>
						</div>
					<!-- 	<div class="filter-widget">
							<h4>Time Availibility:</h4>
							
								<input type="time" class="form-control" placeholder="Search Location">
							
						</div>
						<div class="btn-search">
							<button type="button" class="btn btn-block">Search</button>
						</div> -->
					</div>
				</div>
			</div>
			<div class="col-md-12 col-lg-8 col-xl-9">

				<div class="card" v-for="braider in braiderList" :key="braider.id">

					<div class="card-body">
						<div class="provider-widget">
							<div class="pro-info-left">

								<div class="provider-img">
									<route-link :to="{name:'Profile',param:{id:braider.id}}">
									<img :src="basePath+braider.avatar" class="img-fluid" :alt="braider.name">
									</route-link>

									<h5 class="pro-department" style="margin-top:10px">
										<a @click="copyText($event,braider.id)" href="#!"  >
											Click here to copy
										</a>
									</h5>

								</div>

								<div class="pro-info-cont">

									<h4 class="pro-name">
										<route-link :to="{name:'Profile',params:{id:braider.id}}">
											{{braider.name}}
										</route-link>{{" "}}
											<a href="javascript:void(0)" @click="addFav(braider.id)" class="fav-btn">
												<i class="fa fa-heart" style="color:#6b04a9"></i>
											</a>{{" "}}
									
										<i 
										style="color:#6b04a9"
										class="fa fa-share-alt" 
										@click="shareProfile(braider)"
										aria-hidden="true"></i>
										{{" "}}
										<router-link :to="{name:'ChatCustomer',params:{id:braider.id}}">
											<i style="color:#6b04a9" class="fa fa-comment-alt"></i>
										</router-link>
									</h4>
									<p class="pro-speciality"> 
										
									</p>
								

									<div class="rating">

										<i class="fas fa-star filled" v-for="(ratting,index) in braider.ratting" :key="index"></i>
										<i class="fas fa-star" v-for="i in 5 - braider.ratting" :key="i"></i>
										<span class="d-inline-block average-rating">({{braider.reviews.length}})</span>
									</div>

									<div class="clinic-details">
										<p class="pro-location">
											<i class="fas fa-map-marker-alt"></i> 
											{{braider.city}},{{braider.state}},{{braider.country}}
										</p>

										<ul class="clinic-gallery">
											<li v-for="portfolio in braider.portfolio" :key="portfolio.id" >
												<a :href="basePath+portfolio.image" data-fancybox="gallery">
												<img :src="basePath+portfolio.image" alt="Feature"/>
											</a>
											</li>
										</ul>

									</div>
									
									<div class="clinic-services" v-if="braider.user_services.length">
										<span style="color:#6b04a9" v-for="service in braider.user_services" :key="service.id">{{service.service}}</span>
									</div>
								</div>
							</div>
							<div class="pro-info-right">

								<div class="clini-infos">
									<ul>
										
										<li>
											<select class="form-control" v-model="braider.serviceLocation">
												<option value="work_from_shop"
												>Work from shop</option>
												<option value="mobile"
												v-if="braider.are_you_a_mobile"
												>Mobile/Travling</option>
											</select>
										</li>
										<li><i class="far fa-comment"></i> {{braider.reviews.length || 0}} Feedback</li>
										<li>
											<i class="fas fa-map-marker-alt"></i> 
											{{braider.city}},{{braider.state}},{{braider.country}} 
										</li>
									</ul>
								</div>

								<div class="clinic-booking">
									<router-link :to="{name:'Profile',params:{id:braider.id}}" class="view-pro-btn">
									View Profile</router-link>
									<a @click="bookNow(braider.id,braider.serviceLocation)"
									style="cursor:pointer;" 
									class="apt-btn">Book Appointment</a>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="load-more text-center">
					<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
				</div> -->
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
							@click="shareEmail()"
							style="background-color: #6b04a9;
							height: 30px;
							line-height: 2;
							width: 100%;
							text-align: center;
							color: white;
							"> Email</div>
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
import * as Website from '@/services/websiteServices'
import Braider from '@/models/Braider'
import {services as ServiceAPI} from '@/services/auth'
import {favouriteStore} from '@/services/CustomerServices'
import Auth from '@/models/Auth'
import Social from '@/plugins/SocialShare'
import Multiselect from '@vueform/multiselect'
import Loader from '@/components/Loader';
import FooterComponent from '@/components/Layout/Footer'
import swal from 'sweetalert2';

	export default {
		name:'List',
		components:{MenuComponent,Multiselect,Loader,FooterComponent},
		data(){
			return {
				customer:[],
				shareData:'',
				message:'Hi Aditya',
				braiderData:[],
				searchLocation:'',
				searchService:'',
				serviceList:[],
				myValue: [],
				myOptions: ['op1', 'op2', 'op3'],
				rattings:{
					starOne:'',
					starTwo:'',
					starThree:'',
					starFour:'',
					starFive:'',
				},
				stylist:{
					inShop:'',
					inHome:'',
					mobile:''
				},
				priceMin:0,
				priceMax:0,
				serviceLocation:'work_from_shop',
				isLoading:true,
			}
		},
		computed:{
			basePath(){
				return process.env.VUE_APP_ASSET_URL;
			},
			baseUrl(){
				return process.env.VUE_APP_BASE_URL;
			},
			token(){
				
				return this.auth.api_token;
			},
			auth(){
				
				return  Auth.query().first();
			},
			braiderList(){

				if (this.searchLocation) {

					return this.braiderData.filter( item => {
						
						if (item?.city && item.city.toLowerCase().includes(this.searchLocation.toLowerCase())) {

							return item.city
							.toLowerCase()
							.includes(this.searchLocation.toLowerCase());
						}
						if (item?.state && item.state.toLowerCase().includes(this.searchLocation.toLowerCase())) {

							return item.state
							.toLowerCase()
							.includes(this.searchLocation.toLowerCase());
						}
						if (item?.country && item.country.toLowerCase().includes(this.searchLocation.toLowerCase())) {

							return item.country
							.toLowerCase()
							.includes(this.searchLocation.toLowerCase());
						}

					})
				}
				if (this.searchService) {

					return this.braiderData.map( item => {
					
						return item.user_services.filter( service => {
							
							if (service?.service && service.service.toLowerCase().includes(this.searchService.toLowerCase())) {

								return service?.service
								.toLowerCase()
								.includes(this.searchService.toLowerCase());
							}
						})

					})
				}

				if (this.rattings.starFive || this.rattings.starFour || this.rattings.starThree || this.rattings.starTwo || this.rattings.starOne) {
					
					return this.braiderData.filter(item => {

						if (this.rattings.starFive && item.ratting == 5) {
							return item;
						}
						if (this.rattings.starFour && item.ratting == 4) {
							return item;
						}
						if (this.rattings.starThree && item.ratting == 3) {
							return item;
						}
						if (this.rattings.starTwo && item.ratting == 2) {
							return item;
						}
						if (this.rattings.starOne && (item.ratting == 1 ||	
							item.ratting == 0 ||	
							item.ratting == "" ||	
							item.ratting == undefined ||	
							item.ratting == null)) {
							return item;
						}
					});
				}
				if (this.stylist.inShop || this.stylist.inHome || this.stylist.mobile) {

					return this.braiderData.filter(item => {

						if (this.stylist.inShop && item.do_you_braid_out_of_a_shop == 1) {
							return item;
						}
						if (this.stylist.inHome && item.do_you_braid_from_home == 1) {
							return item;
						}
						if (this.stylist.mobile && item.are_you_a_mobile == 1) {
							return item;
						}
					});
				}
				if (this.myValue.length) {

					return this.braiderData.filter(item => {

						let arr1 = item.user_services.map(a => a.service);
						let arr2 = Object.values(this.myValue);

						return this.arrayMatch(arr1,arr2).length;

						
					})
					
				}
				if (this.priceMax) {

					return this.braiderData.filter(item => Number(item.booking_deposit_amount) >= Number(this.priceMin) && Number(item.booking_deposit_amount) <= Number(this.priceMax));
				}
				return this.braiderData
			}
		},
		async mounted(){

			if (Braider.exists()) {

				this.braiderData = Braider.query()
				.with(['user_services','portfolio'])
				.get();

				await Website.braiderList().then(async res => {

					await Braider.insert({data:res.data.users});
					this.braiderData = res.data.users;
				})

			}else{

				await Website.braiderList().then(async res => {

					await Braider.insert({data:res.data.users});
					this.braiderData = res.data.users;
				})
			}

			await ServiceAPI()
			.then(async res => await res.data.data.map(res => {

				this.serviceList.push({
					value : res.title,
					label : res.title 	
				});
				
			}))
			.catch(err => {
				console.log(err);
			})

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);

			//favouriteData
			
		},
		methods:{
			shareProfile(braider){
				this.shareData = braider;
				this.$refs.openPaymentModal.click();
			},
			arrayMatch(arr1, arr2) {
				var arr = [];
				for(var i=0 ; i<arr1.length ; ++i) {
					for(var j=0 ; j<arr2.length ; ++j) {
						if(arr1[i] == arr2[j]) {
							arr.push(arr1[i]);
						}
					}
				}
				return arr;
			},
			onSearchLocation(){

			},
			copyText(e,id) {
				let textToCopy = `${process.env.VUE_APP_WEBSITE_URL}profile/${id}`;
				e.preventDefault();
				var myTemporaryInputElement = document.createElement("input");
				myTemporaryInputElement.type = "text";
				myTemporaryInputElement.value = textToCopy;
				document.body.appendChild(myTemporaryInputElement);
				myTemporaryInputElement.select();
				document.execCommand("Copy");
				swal.fire("Copied");
				document.body.removeChild(myTemporaryInputElement);
			},

			async addFav(braider_id){
				if (this.auth) {

					await favouriteStore(this.token,{braider_id});

					swal.fire("added to your favorite");
				}else{
					this.$router.push('/login');
				}
			},
			onCopy: function (id) {
				
				this.$copyText(`${window.location.origin}/profile/${id}`).then(function () {
					alert('Copied')
					
				}, function () {
					alert('Can not copy')
					
				})
			},
			myChangeEvent(val){
				console.log(val);
			},
			mySelectEvent({id, text}){
				console.log({id, text})
			},
			bookNow(id,service){

				localStorage.setItem('serviceLocation',service);
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
			},
			shareEmail(){
				let link = this.baseUrl+'profile/'+this.shareData.id;
				const social = new Social;

				const url = social.email(link,'Braider Profile',this.shareData.introduction);

				window.open(url, '_blank');
			}
		}
	}

	
</script>
<style>
	#copyLink{
		cursor: pointer;
	}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
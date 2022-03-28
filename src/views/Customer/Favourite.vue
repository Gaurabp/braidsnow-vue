<template>
	<MenuComponent/>
	<section class="">
	<div class="container" style=" padding-right: 0px; padding-left: 0px;">
  <div class="customerDashboard">
	<img src="assets/dashbord.png" style="width: 100%;">	
	<div class="centered" style=" position: absolute;top: 20%;left: 50%;transform: translate(-50%, -50%);"><h1 style="color: #ffffff;font-family: &quot;Nunito Sans&quot; !important; font-size: 60px; font-weight: 100; text-align: center;">Favourit</h1></div>
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
						<li class="breadcrumb-item active" aria-current="page">Favourite</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Favourite</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="row row-grid">
						<div class="col-md-6 col-lg-4" v-for="fav in favourite" :key="fav.id">
							<div class="profile-widget">
								<div class="pro-img">
									<a href="theraphist-profile.html">
									<img 
									class="img-fluid" 
									:alt="fav.braider.name" 
									:src="basePath+fav.braider.avatar">
									</a>
								</div>
								<div class="pro-content">
									<h3 class="title">
									<a href="theraphist-profile.html">{{fav.braider.name}} </a>
									<i class="fas fa-check-circle verified"></i>
									</h3>
									
									<div class="rating">

										<i class="fas fa-star filled" v-for="(ratting,index) in fav.braider.ratting" :key="index"></i>
										<i class="fas fa-star" v-for="i in 5 - fav.braider.ratting" :key="i"></i>
										<span class="d-inline-block average-rating">(17)</span>
									</div>
									
									<ul class="available-info">
										<li>
										<i class="fas fa-map-marker-alt"></i>{{fav.braider.city}},{{fav.braider.state}},{{fav.braider.country}}
										</li>
										<!-- <li>
										<i class="far fa-clock"></i> Available on Fri, 22 Mar
										</li>
										<li>
										<i class="far fa-money-bill-alt"></i> $300 - $1000 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
										</li> -->
									</ul>
									<div class="row row-sm">
										<div class="col-6">
										<router-link :to="{name:'Profile',params:{id:fav.braider.id}}" class="btn view-btn">View Profile</router-link>
										
										</div>
										<div class="col-6">
										<router-link :to="{name:'Booking',params:{id:fav.braider.id}}" class="btn view-btn">Book Appointment
										</router-link>
										
										
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
	<footer-component/>
	<!-- <Loader :isLoading="isLoading"/> -->
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import Sidebar from '@/views/Customer/Sidebar'
	import {favouriteAPI} from '@/services/CustomerServices'
	import Auth from '@/models/Auth'
	import AssetsPath from '@/utils/AssetsPath'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default {
		name:'Favourite',
		components:{MenuComponent,Sidebar,FooterComponent},
		data(){
			return {
				favourite:[],
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
				return AssetsPath;
			}
		},
		async mounted(){

			await favouriteAPI(this.token).then(res => this.favourite = res.data.data);

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			onLogout(){
				//localStorage.setItem('user','');
				//this.$router.push({ name: 'Home'});
			}
		}
	}
</script>
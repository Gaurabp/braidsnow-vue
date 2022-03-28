<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">My Customers</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Hair Styles</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					
					<div class="row row-grid" v-if="getPortfolio.length">
						
						<div class="col-md-6 col-lg-4 col-xl-3"  v-for="portfolio in getPortfolio" :key="portfolio.id">
							<div class="card widget-profile pat-widget-profile">
								<img :src="assetPath+portfolio.image_url" alt="Image" height="230">
							</div>
						</div>
						
												
					</div>
					<div class="row row-grid" v-else>
						<no-data-found/>
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
	import {hairStyle} from '@/services/dashboardService'
	import Auth from '@/models/Auth'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer';
	import NoDataFound from '@/components/NoDataFound';

	export default{
		name:'Portfolio',
		components:{MenuComponent,Sidebar,FooterComponent,NoDataFound},

		data(){
		return {
			getPortfolio:[],
			isLoading:false,
		}

		},
		computed:{
			auth(){
				
				return  Auth.query().first();
			},
			token(){
				
				return this.auth.api_token;
			},
			assetPath(){
				return process.env.VUE_APP_ASSET_URL;
			}
		},

		async mounted(){
			
			await hairStyle(this.token,{id: this.$route.params.id}).then(res => {
				this.getPortfolio = res.data;
			})
		
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		

	}
</script>
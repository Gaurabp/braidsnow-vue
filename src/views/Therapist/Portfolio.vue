<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Portfolio</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Portfolio</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="col-md-12">
						<div class="form-group" style="margin-bottom:40px;">
							<div class="change-avatar">
								<div class="profile-img">
												
									<img 
									:src="previewPortfolio" 
									alt="User Image">
								</div>
								<div class="upload-img">
									<div class="change-photo-btn" style="float: left;">
										<span><i class="fa fa-upload"></i> Upload Portfolio</span>
										<input 
										type="file" 
										class="upload"
										@change="onUploadPortfolio" 
										accept="image/*">
									</div>
									<div v-if="loading" class="change-photo-btn" style="float: left; background:#6a1b9a;">
										<img src="/assets/loader.gif" alt="" style="width: 17%;">
									</div>
									<div v-else class="change-photo-btn" style="float: left; background:#6a1b9a;" @click="onsubmit">
										<span><i class="fa fa-save"></i> Save</span>
																				
										
									</div>
									<small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 500KB</small>
									<small v-if="errorImage" class="form-text text-danger">
													{{errorImage}}
									</small>
												
								</div>
							</div>
						</div>
					</div>
					<div class="row row-grid" v-if="getPortfolio.length">
						
											
						<div class="col-md-6 col-lg-4 col-xl-3"  v-for="portfolio in getPortfolio" :key="portfolio.id">
							<div class="card widget-profile pat-widget-profile">
								<img :src="assetsUrl+portfolio.image" alt="Image" height="230">
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
	import {storePortfolio, getPortfolio} from '@/services/portfolio'
	import Portfolio from '@/models/Portfolio'
	import AssetsPath from '@/utils/AssetsPath'
	import Swal from 'sweetalert2'
	import Auth from '@/models/Auth'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'
	import NoDataFound from '@/components/NoDataFound';

	export default{
		name:'Portfolio',
		components:{MenuComponent,Sidebar,FooterComponent,NoDataFound},

		data(){
		return {
			portfolio:[],
			getPortfolio:[],
			assetsUrl:'',
			portfolioImage:'',
			errorImage:'',
			errors:'',
			loading:false,
			isLoading:true,
			previewPortfolio: 'assets/img/theraphist/theraphist-thumb-01.png'
		}

		},
		computed:{
			auth(){
				
				return  Auth.query().first();
			},
			token(){
				
				return this.auth.api_token;
			},
		},

		async mounted(){
			
			await this.getPortfolioData();
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{

			async getPortfolioData(){
				this.assetsUrl = AssetsPath;
				console.log(Portfolio.exists())
				if (Portfolio.exists()) {

					this.getPortfolio = Portfolio.query().all();

					getPortfolio(this.token)
					.then( res =>{
						this.getPortfolio =  res.data.data
						Portfolio.deleteAll()
						Portfolio.insert({data:res.data.data})
					})

				}else{

					await getPortfolio(this.token)
					.then(async res =>{
						this.getPortfolio = await res.data.data
						Portfolio.insert({data:res.data.data})
					})
					.catch(err => console.log(err))
				}
				
			},
			onUploadPortfolio(event){

				this.portfolioImage = event.target.files[0];
				let size = Math.round(this.portfolioImage.size/1024);
				
				if (size > 500) {
					event.preventDefault();
					this.errorImage = 'File too big (> 500KB)';
					return;
				}

				this.previewPortfolio = URL.createObjectURL(this.portfolioImage)
			},

			props(){

				let formData = new FormData();
				formData.set('image',this.portfolioImage);
				return formData;
			},
			async onsubmit(){
				
				this.loading = true;
				await this.clear();

				await storePortfolio(this.token,this.props())
				.then(async res => {

					await this.getPortfolioData();
					await Portfolio.insert({data: res.data.portfolio});

					Swal.fire({
						icon: 'success',
						title: 'Success',
						text: 'Portfolio Uploaded',
					});

				}).catch(err => {

					this.errorImage = err?.response?.data?.errors?.image;

					window.scrollTo({
						top:0,
						behavior: 'smooth'
					});
				});

				this.loading = false;
				this.clear();

			},

			clear(){

				this.errors = {
					portfolio:'',
					
				};
			},

		},

	}
</script>
<style>
.text-muted
{
	font-size: 15px;
	margin-left: 15px;
}
.change-avatar .change-photo-btn 
{
	float: left;	
	margin-left: 15px;
}
@media screen and (max-width: 575.98px)
{
	.change-photo-btn
	{
		font-size: 12px;
	}
	.change-avatar .change-photo-btn 
	{
    margin: 0 0 10px;
    width: 100%;
	margin-left: 0px;
    
	}
	.text-muted
	{
		font-size: 10px;
		margin-left: 0px;
	}
}
</style>
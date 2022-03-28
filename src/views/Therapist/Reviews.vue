<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-12 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="">Home</a></li>
					<li class="breadcrumb-item active" aria-current="page">Reviews</li>
					</ol>
					</nav>
					<h2 class="breadcrumb-title">Reviews</h2>
				</div>
			</div> 
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
						<div class="pro-review review-listing">

						<ul class="comments-list">

							<li v-for="review in reviewData" :key="review.id">
								<div class="comment">
									<img 
									class="avatar rounded-circle"
									alt="User Image" 
									:src="assetPath+review?.user?.avatar">
									<div class="comment-body">
										<div class="meta-data">
											<span class="comment-author">{{review.user.name}} </span>
											<span class="comment-date">Reviewed {{review.reviewed_at}}</span>
											<div class="review-count rating">
														<i class="fas fa-star filled" v-for="(i,index) in review.ratting" :key="index"></i>
														
														<i class="fas fa-star" v-for="(j,index) in (5 - review.ratting)" :key="index"></i>
													</div>

										</div>
										<p class="recommended"> {{review.title}}</p>
										<p class="comment-content" style="width:200px">
										{{review.review}}
										</p>
										
									</div>
								</div>	
							</li>
						</ul>

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
	import Sidebar from './Sidebar'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'
	import {getReviews} from '@/services/dashboardService'
	import Auth from '@/models/Auth'

	export default{
		name:'Reviews',
		components:{MenuComponent,Sidebar,FooterComponent},
		data(){
			return {
				isLoading:true,
				reviewData:[]
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
				return process.env.VUE_APP_ASSET_URL
			}
		},
		mounted(){

			getReviews(this.token).then(res => {
				this.reviewData = res.data
			})
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		}
	}
</script>
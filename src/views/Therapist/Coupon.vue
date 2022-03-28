<template>
	<menu-component/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Coupon</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Coupon</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<sidebar-component/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="card card-table">
						<div class="card-body">
							<div class="row">
								<div class="col-md-2">
									<router-link :to="{name:'CouponCreate'}" class="btn btn-success" style="margin-top:10px">
										Create Coupon
									</router-link>
									
								</div>
								<div class="col-md-10"></div>
							</div>
							
							<div class="table-responsive">
								<table class="table table-hover table-center mb-0">
									<thead>
										<tr>
											<th>Name</th>
											<th>Discount Type</th>
											<th>Discount</th>
											<th>Start Date</th>
											<th>Expire Date</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="data in couponData" :key="data.id">
											<td>
												{{ data.name || '' }}
											</td>
											<td>
												{{ data.discount_type == 1?"Pecentage":"Fixed" }}
											</td>
											<td>
												{{ data.discount_price || '' }}
											</td>
											<td>
												{{ data.start_date || '' }}
											</td>
											<td>
												{{ data.expire_date || '' }}
											</td>
											<td>
												<button class="btn btn-danger" @click="onDestroy(data.id)">Delete</button>
											</td>
										</tr>
									</tbody>
								</table>
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
	import SidebarComponent from './Sidebar'
	import Auth from '@/models/Auth'
	import {
		couponGet,
		couponRemove
	} from '@/services/dashboardService'
	import Swal from 'sweetalert2'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'SendEmail',
		components:{MenuComponent,SidebarComponent,FooterComponent},
		data(){
			return{
				textMessage:'',
				isDisabled:false,
				isLoading:true,
				couponData:[]
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
		mounted(){

			couponGet(this.token)
			.then(res => {
				this.couponData = res.data;
			}).catch(() => {
				this.isLoading = true;
			});

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			onDestroy(id){
				couponRemove(this.token,{id}).then(res => {

					Swal.fire("coupon deleted successfully");
					this.couponData = res.data;
				}).catch(() => {
					this.isLoading = true;
				})
			}
		}
	}
</script>
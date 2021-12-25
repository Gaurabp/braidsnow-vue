<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Create Coupon</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Create Coupon</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="card">
						<div class="card-body">
							<div class="row">
								<div class="col-md-12 col-lg-6">

									<form>
										<div class="form-group">
											<label>Name</label>
											<input 
											placeholder="enter coupon name" 
											type="text" 
											v-model="name"
											class="form-control">
											<small v-if="errName" class="form-text text-danger">
												{{errName}}
											</small>
										</div>
										<div class="form-group">
											<label>Discount Type</label>
											
											<select class="form-control" v-model="discount_type">
												<option value="1">Percent</option>
												<option value="2">Fixed</option>
											</select>
											<small v-if="errDiscount_type" class="form-text text-danger">
												{{errDiscount_type}}
											</small>
											
										</div>
										<div class="form-group">
											<label>Discount</label>
											<input 
											placeholder="enter discount" 
											type="text" 
											v-model="discount_price"
											class="form-control">
											<small v-if="errDiscount_price" class="form-text text-danger">
												{{errDiscount_price}}
											</small>
										</div>
										<div class="form-group">
											<label>Start Date</label>
											<input 
											type="date" 
											v-model="start_date"
											class="form-control">
											<small v-if="errStart_date" class="form-text text-danger">
												{{errStart_date}}
											</small>
											
										</div>
										<div class="form-group">
											<label>Expire Date</label>
											<input 
											type="date" 
											v-model="expire_date"
											class="form-control">
											<small v-if="errExpire_date" class="form-text text-danger">
												{{errExpire_date}}
											</small>
											
										</div>
										
										<div class="submit-section">
											<button type="button" @click="onSubmit" class="btn btn-primary submit-btn">Save Changes</button>
											<button type="button" @click="onSubmit" class="btn btn-danger submit-btn">Cancel</button>
										</div>
									</form>

								</div>
							</div>
						</div>
					</div>
			</div>
			</div>
		</div>
</div>
<footer-component/>
<Loader :isLoading="isLoading"/>
	
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import Sidebar from './Sidebar'
	import Swal from 'sweetalert2'
	import Auth from '@/models/Auth'
	import Loader from '@/components/Loader';
	import { couponSet } from '@/services/dashboardService'
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'CreateCoupon',
		components:{MenuComponent,Sidebar,Loader,FooterComponent},
		data(){
			
			return {
				name:'',
				discount_type:'1',
				discount_price:'',
				start_date:'',
				expire_date:'',
				errName:'',
				errDiscount_type:'',
				errDiscount_price:'',
				errStart_date:'',
				errExpire_date:'',
				isLoading:true,
			};
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
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			onSubmit(){

				this.clear();

				couponSet(this.token,{
					name: this.name,
					discount_type: this.discount_type,
					discount_price: this.discount_price,
					start_date: this.start_date,
					expire_date: this.expire_date
				}).then(() => {
					this.clearAll();
					Swal.fire("new coupon created");
				}).catch(err => {
					if (err?.response?.data?.errors?.name) {
						this.errName = err?.response?.data?.errors?.name[0];
					}
					if (err?.response?.data?.errors?.discount_type) {
						this.errDiscount_type = err?.response?.data?.errors?.discount_type[0];
					}
					if (err?.response?.data?.errors?.discount_price) {
						this.errDiscount_price = err?.response?.data?.errors?.discount_price[0];
					}
					if (err?.response?.data?.errors?.start_date) {
						this.errStart_date = err?.response?.data?.errors?.start_date[0];
					}
					if (err?.response?.data?.errors?.expire_date) {
						this.errExpire_date = err?.response?.data?.errors?.expire_date[0];
					}
				})

				
			},
			clear() {
				this.errName = '';
				this.errDiscount_type = '';
				this.errDiscount_price = '';
				this.errStart_date = '';
				this.errExpire_date = '';
			},
			clearAll(){

				this.errName = '';
				this.errDiscount_type = '';
				this.errDiscount_price = '';
				this.errStart_date = '';
				this.errExpire_date = '';
				this.name = "";
				this.discount_type = "1";
				this.discount_price = "";
				this.start_date = "";
				this.expire_date = "";
			}
		}
	}
</script>
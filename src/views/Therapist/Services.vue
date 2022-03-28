<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Service</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Service</h2>
				</div>
			</div>
		</div>
	</div>
	
	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="card">
					<div class="card-body">
						<div class="row form-row">
							<div class="col-12 col-md-3 col-lg-3">
								<div class="form-group">
									<label>Service</label>
									<select class="form-control select" v-model="data.service">
										<option value="">Enter Your Service</option>
										<option 
										v-for="list in serviceList" 
										:key="list.uuid"
										:value="list.title"
										>{{list.title}} 
										</option>
									</select>
								</div>
							</div>
							<div class="col-12 col-md-3 col-lg-3">
								<div class="form-group">
									<label>Hour</label>
									<select class="form-control" v-model="data.hour">
										<option v-for="i in 10" :key="i" :value="i">{{i}} </option>
									</select>
								</div>
							</div>
							<div class="col-12 col-md-2 col-lg-2">
								<div class="form-group">
									<label>Minutes</label>
									<select class="form-control" v-model="data.min">
										<option value="0">0</option>
										<option value="15">15</option>
										<option value="30">30</option>
										<option value="45">45</option>
									</select>
								</div>
							</div>
							<div class="col-12 col-md-3 col-lg-3">
								<div class="form-group">
									<label>Price</label>
									<input 
									type="text" 
									class="form-control" 
									v-model="data.price"
									placeholder="Price">
								</div>
							</div>
							<div class="col-12 col-md-1 col-lg-1">
								<button type="button" @click="addServices" 
								class="btn btn-primary trash">
								<i class="fa fa-plus"></i>
								</button>
							</div>
						</div>
						<div class="row" v-for="(service,index) in this.services" :key="index">
							<div class="col-12 col-md-10 col-lg-11">
								<div class="row form-row">
									<div class="col-12 col-md-6 col-lg-3">
										<div class="form-group">
											<label>Service</label>
											<select class="form-control select" disabled="" v-model='service.service'>
												<option>Enter Your Service</option>
												<option 
												v-for="list in serviceList" 
												:key="list.uuid"
												:value="list.title">
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
											v-model="service.hour"
											readonly="" 
											placeholder="Hour">
										</div>
									</div>
									<div class="col-12 col-md-6 col-lg-2">
										<div class="form-group">
											<label>Minutes</label>
											<input 
											type="text"
											class="form-control" 
											v-model="service.min"
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
									<div class="col-12 col-md-1 col-lg-1">
										<button type="button" @click="removeService(index)"
										class="btn btn-danger trash"><i class="fas fa-trash"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="submit-section submit-btn-bottom">
							<button type="button" @click="onSubmit" class="btn btn-primary submit-btn">
							Save Changes
							</button>
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
	import Sidebar from './Sidebar'
	import Auth from '@/models/Auth'
	import {services} from '@/services/auth'
	import {
		userServiceIndex,
		userServiceStore,
		userServiceDestory
	} from '@/services/userService'
	import Swal from 'sweetalert2'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'ScheduleTiming',
		components:{MenuComponent,Sidebar,FooterComponent},
		data(){
			return {
				services: [],
				serviceList:[],
				data:{},
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
		},
		async mounted(){
			
			await services()
			.then(async res => this.serviceList = await res.data.data)
			.catch(err => {
				console.log(err);
			});
			await userServiceIndex(this.token)
			.then(res => {
				console.log(res.data.data)
				this.services = res.data.data
			});
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			addServices(){
				
				if (
					this.data.service &&
					this.data.hour &&
					this.data.min && 
					this.data.price) {

					this.services.push({
						service: this.data.service,
						hour: this.data.hour,
						min: this.data.min,
						price: this.data.price
					});

					this.data.service = "";
					this.data.hour = 1;
					this.data.min = 1;
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
				
				const data = this.services.filter((service,key) => {
					if (key == index && service.id != undefined) {
						userServiceDestory(this.token,service.id)
					}else if (key != index ) {
						return service;
					}
				});

				this.services = data;
			},
			onSubmit(){

				userServiceStore(this.token,{serviceData:this.services}).then(() => {
					Swal.fire({
						icon: 'success',
						title: 'Success',
						text: 'New Service added',
					});	
				})
			}
		}
	}
</script>
<style>
	.trash{
		margin-top: 30px;
	}
</style>
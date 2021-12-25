<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Social Media</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Social Media</h2>
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

							<form>
								<div class="row" v-for="working in workingDaysData" :key="working.id">
									<div class="col-md-12 col-lg-12">
										<div class="form-group">
											<label>{{working.name}} </label>
											<div class="row">
												
												<div class="col-md-2 col-lg-2 col-sm-12">
													<div class="form-group">
														<label>Status</label>
														<select class="form-control" v-model="working.status">
															<option value="1">Open</option>
															<option value="0">Close</option>
														</select>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 col-sm-12">
													<div class="form-group">
														<label>Start Time</label>
														<select class="form-control" v-model="working.start_time">
															<TimeOptions/>
														</select>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 col-sm-12">
													<div class="form-group">
														<label>End Time</label>
														<select class="form-control" v-model="working.end_time">
															<TimeOptions/>
														</select>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 col-sm-12">
													<div class="form-group">
														<label>Blockout lunch time</label>
														<select class="form-control" 
														v-model="working.is_block_lunch_time">
															<option value="0">No</option>
															<option value="1">Yes</option>
														</select>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 col-sm-12" 
												v-show="working.is_block_lunch_time == 1">
													<div class="form-group">
														<label>Lunch Start Time</label>
														<select class="form-control" v-model="working.lunch_start_time">
															<TimeOptions/>
														</select>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 col-sm-12" 
												v-show="working.is_block_lunch_time == 1">
													<div class="form-group">
														<label>Lunch End Time</label>
														<select class="form-control" v-model="working.lunch_end_time">
															<TimeOptions/>
														</select>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="submit-section">
									<button type="button" @click="onUpdate" class="btn btn-primary submit-btn">Save Changes</button>
								</div>
							</form>

						</div>
					</div>
				</div>
			</div>
		</div>
		<footer-component/> 
		<Loader :isLoading="isLoading"/>
</div>
	
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	import Sidebar from './Sidebar'
	import Swal from 'sweetalert2'
	import Auth from '@/models/Auth'
	import {workingDays,workingDayUpdate} from '@/services/userService'
	import TimeOptions from '@/components/TimeOptions'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'SocialMedia',
		components:{MenuComponent,Sidebar,TimeOptions,Loader,FooterComponent},
		data(){
			return {
				faceBook:'',
				twitter: '',
				instagram:'',
				pinterest:'',
				linkedin:'',
				youtube:'',
				workingDaysData:[],
				isLoading:true,
			}
		},
		watch:{
			workingDaysData:{
				handler(val){
					this.workingDaysData = val;
				},
				deep: true
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

			await workingDays(this.token)
			.then(({data}) => this.workingDaysData = data.workingDays);

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			onUpdate(){

				workingDayUpdate(this.token,{data:this.workingDaysData})
				.then(() => {
					Swal.fire({
						icon: 'success',
						title: 'Success',
						text: 'Working hour updated',
					});
				});
			}
		}
	}
</script>
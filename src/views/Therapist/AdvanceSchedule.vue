<template>
	<menu-component/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Schedule Preference</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Schedule Preference</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<sidebar-component/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="alert alert-success" role="alert">Advance Availability Options</div>
					<div class="row form-row" style="margin-top:20px">
						<div class="col-md-12">
							<div class="form-group">
								<label><input 
									type="checkbox" 
									true-value="1"
									false-value="0"
									v-model="advanceSchedule.is_prevent_same_day_booking"
									
									> Prevent same-day bookings</label>
								
									<small class="form-text text-danger">
											
									</small>
										
							</div>
						</div>
					</div>
					<div class="row form-row">
						<div class="col-md-12">
							<div class="form-group">
								<label> Buffer Time</label>
							</div>
						</div>
									
					</div>
					<div class="row form-row">
						<div class="col-md-4">
							<div class="form-group">
								<select v-model="advanceSchedule.buffer_time" class="form-control">
									<option value="15">fifteen minutes</option>
									<option value="30">thirty minutes</option>
									<option value="45">forty-five minutes</option>
									<option value="60">one hour</option>
									<option value="90">one and half hours</option>
									<option value="120">two hours</option>
								</select>
							</div>
						</div>
									
					</div>
					<!-- <div class="row form-row">
						<div class="col-md-12">
							<div class="form-group">
								<label> Prevent booking less than </label>
							</div>
						</div>
									
					</div> -->
					<!-- <div class="row form-row">
						<div class="col-md-4">
							<div class="form-group">
								<input 
								type="number" 
								min="0" 
								class="form-control" 
								v-model="advanceSchedule.prevent_days"
								placeholder="days">
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<input 
								type="number" 
								min="1" 
								class="form-control" 
								v-model="advanceSchedule.prevent_hours"
								placeholder="hours">
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<input 
								type="number" 
								min="0" 
								class="form-control" 
								v-model="advanceSchedule.prevent_min"
								placeholder="minutes">
							</div>
						</div>
									
					</div> -->
					<hr>
					<div class="row form-row" style="margin-top:20px">
						<div class="col-md-4">
							<div class="form-group">
								<label><input 
									type="checkbox" 
									true-value="1"
									false-value="0"
									v-model="advanceSchedule.is_stop_accepting_appointment"
									
									> Stop accepting appointments after </label>
								
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<input type="date" class="form-control" v-model="advanceSchedule.stop_booking_from">
							</div>
						</div>
					</div>
					<div class="row form-row">
						<div class="col-md-4">
							<div class="form-group">
								<label>Prevent bookings more than </label>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<select class="form-control" v-model="advanceSchedule.prevent_booking_more_than">
									<option value="">Select slot</option>
									<option value="7">1 weeks into the future</option>
									<option value="14">2 weeks into the future</option>
									<option value="21">3 weeks into the future</option>
									<option value="30">1 month into the future</option>
									<option value="60">2 months into the future</option>
									<option value="90">3 months into the future</option>
									<option value="120">4 months into the future</option>
									<option value="150">5 months into the future</option>
									<option value="180">6 months into the future</option>
								</select>
							</div>
						</div>
									
					</div>
					<div class="submit-section">
						<button type="button" @click="onStore" class="btn btn-primary submit-btn">Save Changes</button>
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
	import SidebarComponent from './Sidebar'
	import API from '@/services/AdvanceScheduleSetting'
	import AdvanceScheduleModel from '@/models/AdvanceScheduleSetting'
	import Auth from '@/models/Auth'
	import Swal from 'sweetalert2'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'


	export default{
		name:'AdvanceSchedule',
		components:{MenuComponent,SidebarComponent,Loader,FooterComponent},
		data(){
			return {
				advanceSchedule:{
					is_prevent_same_day_booking: '',
					prevent_days: '',
					prevent_hours: '',
					prevent_min: '',
					is_stop_accepting_appointment: '',
					prevent_booking_more_than: '',
					stop_booking_from:'',
					buffer_time:15
				},
				isLoading:true,
			}
		},
		computed:{
			auth(){
				return Auth.query().first()
			}
		},
		async mounted(){

			

			if (AdvanceScheduleModel.exists() === false) {

				API.AdvanceScheduleSetting(this.auth.api_token)
				.then(async res => {
					
					this.advanceSchedule = res.data.data;
					AdvanceScheduleModel.insert({data:res.data.data});
					this.isLoading = false;
				}).catch(() => {
					this.isLoading = false;
				})
			}

			this.advanceSchedule = AdvanceScheduleModel.query().first();

			this.isLoading = false;
			
		},
		methods:{
			onStore(){

				
				API.AdvanceScheduleSettingStore(this.auth.api_token,this.advanceSchedule).then(() => {
					Swal.fire('Setting updated');
				})
			},
		}
	}
</script>
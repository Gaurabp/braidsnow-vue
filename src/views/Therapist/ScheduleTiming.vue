<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Schedule Timing</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Schedule Timing</h2>
				</div>
				
			</div>
		</div>
	</div>
	<a  data-toggle="modal" href="#add_time_slot" ref="openAddmodal"></a>
	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Schedule Timings</h4>
									<div class="profile-box">
										
										<div class="row">
											<div class="col-md-12">
												<div class="card schedule-widget mb-0">

													<div class="schedule-header">

														<div class="schedule-nav">
															<ul class="nav nav-tabs nav-justified">
																<li class="nav-item">
																	<a class="nav-link" data-toggle="tab" href="#slot_sunday">
																		Sunday
																	</a>
																</li>
																<li class="nav-item">
																<a class="nav-link active" data-toggle="tab" href="#slot_monday">Monday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_tuesday">Tuesday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_wednesday">Wednesday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_thursday">Thursday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_friday">Friday</a>
																</li>
																<li class="nav-item">
																<a class="nav-link" data-toggle="tab" href="#slot_saturday">Saturday</a>
																</li>
															</ul>
														</div>

													</div>

													
													<div class="tab-content schedule-cont">

														<div id="slot_sunday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" @click="openModal(7)" style="cursor: pointer;">
																<i class="fa fa-plus-circle"></i> 
																Add Slot
															</a>
															
															</h4>
															<div v-if="sunday.length">
																<div v-for="sun in sunday" :key="sun.id">
																<h5 class="card-title d-flex justify-content-between" v-if="sun.schedule_timing.length">
																<span>{{sun.service_title}} </span>
																
																
																</h5>
																<div class="pro-times" >
																	<div class="pro-slot-list" v-for="timing in sun.schedule_timing" :key="timing.id">
																	{{dateParsing(timing.start_time)}} - {{dateParsing(timing.end_time)}}
																		<a href="javascript:void(0)" @click="deleteRecord(timing.id)" class="delete_schedule">
																		<i class="fa fa-times"></i>
																		</a>
																	</div>
																</div>
																<br>
																</div>
																
															</div>
															<p class="text-muted mb-0" v-else>Not Available</p>
														</div>


														<div id="slot_monday" class="tab-pane fade show active">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" @click="openModal(1)" style="cursor: pointer;">
																<i class="fa fa-plus-circle"></i> 
																Add Slot
															</a>
															</h4>

															<div v-if="monday.length">
																<div v-for="mon in monday" :key="mon.id">
																<h5 class="card-title d-flex justify-content-between" v-if="mon.schedule_timing.length">
																<span>{{mon.service_title}} </span>
																
																
																</h5>
																<div class="pro-times" >
																	<div class="pro-slot-list" v-for="timing in mon.schedule_timing" :key="timing.id">
																	{{dateParsing(timing.start_time)}} - {{dateParsing(timing.end_time)}}
																		<a href="javascript:void(0)" @click="deleteRecord(timing.id)" class="delete_schedule">
																		<i class="fa fa-times"></i>
																		</a>
																	</div>
																</div>
																<br>
																</div>
																
															</div>
															<p class="text-muted mb-0" v-else>Not Available</p>

														</div>


														<div id="slot_tuesday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" @click="openModal(2)" style="cursor: pointer;">
																<i class="fa fa-plus-circle"></i> 
																Add Slot
															</a>
															</h4>
															<div v-if="tuesday.length">
																<div v-for="tue in tuesday" :key="tue.id">
																<h5 class="card-title d-flex justify-content-between" v-if="tue.schedule_timing.length">
																<span>{{tue.service_title}} </span>
																
																
																</h5>
																<div class="pro-times" >
																	<div class="pro-slot-list" v-for="timing in tue.schedule_timing" :key="timing.id">
																	{{dateParsing(timing.start_time)}} - {{dateParsing(timing.end_time)}}
																		<a href="javascript:void(0)" @click="deleteRecord(timing.id)" class="delete_schedule">
																		<i class="fa fa-times"></i>
																		</a>
																	</div>
																</div>
																<br>
																</div>
																
															</div>
															<p class="text-muted mb-0" v-else>Not Available</p>
														</div>


														<div id="slot_wednesday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" @click="openModal(3)" style="cursor: pointer;">
																<i class="fa fa-plus-circle"></i> 
																Add Slot
															</a>
															</h4>
															<div v-if="wednesday.length">
																<div v-for="wed in wednesday" :key="wed.id">
																<h5 class="card-title d-flex justify-content-between" v-if="wed.schedule_timing.length">
																<span>{{wed.service_title}} </span>
																
																
																</h5>
																<div class="pro-times" >
																	<div class="pro-slot-list" v-for="timing in wed.schedule_timing" :key="timing.id">
																	{{dateParsing(timing.start_time)}} - {{dateParsing(timing.end_time)}}
																		<a href="javascript:void(0)" @click="deleteRecord(timing.id)" class="delete_schedule">
																		<i class="fa fa-times"></i>
																		</a>
																	</div>
																</div>
																<br>
																</div>
																
															</div>
															<p class="text-muted mb-0" v-else>Not Available</p>
														</div>


														<div id="slot_thursday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" @click="openModal(4)" style="cursor: pointer;">
																<i class="fa fa-plus-circle"></i> 
																Add Slot
															</a>
															</h4>
															<div v-if="thursday.length">
																<div v-for="thu in thursday" :key="thu.id">
																<h5 class="card-title d-flex justify-content-between" v-if="thu.schedule_timing.length">
																<span>{{thu.service_title}} </span>
																
																
																</h5>
																<div class="pro-times" >
																	<div class="pro-slot-list" v-for="timing in thu.schedule_timing" :key="timing.id">
																	{{dateParsing(timing.start_time)}} - {{dateParsing(timing.end_time)}}
																		<a href="javascript:void(0)" @click="deleteRecord(timing.id)" class="delete_schedule">
																		<i class="fa fa-times"></i>
																		</a>
																	</div>
																</div>
																<br>
																</div>
																
															</div>
															<p class="text-muted mb-0" v-else>Not Available</p>
														</div>


														<div id="slot_friday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" @click="openModal(5)" style="cursor: pointer;">
																<i class="fa fa-plus-circle"></i> 
																Add Slot
															</a>
															</h4>
															<div v-if="friday.length">
																<div v-for="fri in friday" :key="fri.id">
																<h5 class="card-title d-flex justify-content-between" v-if="fri.schedule_timing.length">
																<span>{{fri.service_title}} </span>
																
																
																</h5>
																<div class="pro-times" >
																	<div class="pro-slot-list" v-for="timing in fri.schedule_timing" :key="timing.id">
																	{{dateParsing(timing.start_time)}} - {{dateParsing(timing.end_time)}}
																		<a href="javascript:void(0)" @click="deleteRecord(timing.id)" class="delete_schedule">
																		<i class="fa fa-times"></i>
																		</a>
																	</div>
																</div>
																<br>
																</div>
																
															</div>
															<p class="text-muted mb-0" v-else>Not Available</p>
														</div>


														<div id="slot_saturday" class="tab-pane fade">
															<h4 class="card-title d-flex justify-content-between">
															<span>Time Slots</span>
															<a class="edit-link" @click="openModal(6)" style="cursor: pointer;">
																<i class="fa fa-plus-circle"></i> 
																Add Slot
															</a>
															</h4>
															<div v-if="saturday.length">
																<div v-for="sat in saturday" :key="sat.id">
																<h5 class="card-title d-flex justify-content-between" v-if="sat.schedule_timing.length">
																<span>{{sat.service_title}} </span>
																
																
																</h5>
																<div class="pro-times" >
																	<div class="pro-slot-list" v-for="timing in sat.schedule_timing" :key="timing.id">
																	{{dateParsing(timing.start_time)}} - {{dateParsing(timing.end_time)}}
																		<a href="javascript:void(0)" @click="deleteRecord(timing.id)" class="delete_schedule">
																		<i class="fa fa-times"></i>
																		</a>
																	</div>
																</div>
																<br>
																</div>
																
															</div>
															<p class="text-muted mb-0" v-else>Not Available</p>
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
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade custom-modal" id="add_time_slot">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Add Time Slots</h5>
					<button  class="close" data-dismiss="modal" ref="closeModal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form>
						<div class="hours-info">
							<div class="row form-row hours-cont">
								<div class="col-12 col-md-10">
									<div class="row form-row">
										<div class="col-12 col-md-12">
											<div class="form-group">
												<label>Services</label>
												<select class="form-control" v-model="service">
													<option 
													v-for="service in serviceList" 
													:key="service.id" 
													:value="service.title"
													>
														{{service.title}}
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-10">
									<div class="row form-row">
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>Start Time</label>
												
												<select class="form-control" v-model="startTime">
													<option value="">Start time</option>
													<TimeOptions/>
												</select>
											</div>
										</div>
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>End Time</label>
												<select class="form-control" v-model="endTime">
													<option value="">End time</option>
													<TimeOptions/>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row form-row hours-cont" v-for="(data,index) in addModalData" :key="index">
								<div class="col-12 col-md-10">
									<div class="row form-row">
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>Start Time</label>
												<select class="form-control" v-model="data.start_time">
													<TimeOptions/>
												</select>
											</div>
										</div>
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>End Time</label>
												<select class="form-control" v-model="data.end_time">
													<TimeOptions/>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-2">
									<label class="d-md-block d-sm-none d-none">&nbsp;</label>
									<a href="javascript:;" class="btn btn-danger trash" @click="removeTimeSlot(index)">
										<i class="far fa-trash-alt"></i>
									</a>
								</div>
							</div>
						</div>
						<div class="add-more mb-3">
							<a href="javascript:void(0);" @click="addMoreTime" class="add-hours"><i class="fa fa-plus-circle"></i> Add More</a>
						</div>
						<div class="submit-section text-center">
							<button type="button" @click="onSave" class="btn btn-primary submit-btn">Save Changes</button>
						</div>
					</form>
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
	import {ScheduledTimings,ScheduledTimingsStore,ScheduledTimingsDestroy} from '@/services/scheduleTimingService'
	import Auth from '@/models/Auth'
	import moment from 'moment'
	import {services} from '@/services/auth'
	import TimeOptions from '@/components/TimeOptions'
	import UserScheduleTiming from '@/models/UserScheduleTiming'
	import ScheduleTimingModal from '@/models/ScheduleTiming'
	import ServiceModal from '@/models/Service'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'ScheduleTiming',
		components:{MenuComponent,Sidebar,TimeOptions,FooterComponent},
		data(){
			return {
				currentDay:'',
				startTime:'07:00',
				endTime:'08:00',
				service:'',
				addModalData:[],
				serviceList:[],
				monday:[],
				tuesday:[],
				wednesday:[],
				thursday:[],
				friday:[],
				saturday:[],
				sunday:[],
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
			
			await this.fetchAllSecheduled();
			if (ServiceModal.exists()) {

				this.serviceList = ServiceModal.all();

				await services()
				.then(async res => {
					
					this.serviceList = await res.data.data
				})
				.catch(err => {
					console.log(err);
				});

			}else{

				await services()
				.then(async res => {
					ServiceModal.insert({data: res.data.data});
					this.serviceList = await res.data.data
				})
				.catch(err => {
					console.log(err);
				})
			}

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
			
		},
		methods:{

			fetchAllSecheduled(){

				if (UserScheduleTiming.exists()) {
					
					this.dataPlugin();

					ScheduledTimings(this.token)
					.then(async res => {
						await UserScheduleTiming.deleteAll();
						UserScheduleTiming.insert({data:res.data.schedule});
					})
					.catch(() => this.$router.push({name:'home'}))

				}else{

					ScheduledTimings(this.token)
					.then(async res => {
						
						await UserScheduleTiming.insert({data:res.data.schedule});
						this.dataPlugin();
					})
					.catch(() => this.$router.push({name:'home'}))
				}

			},
			dataPlugin(){

				if (UserScheduleTiming.exists()) {
					this.monday = UserScheduleTiming.query().with('schedule_timing',query =>{
						query.where('working_day_id',1)	
					}).get();
					this.tuesday = UserScheduleTiming.query().with('schedule_timing',query =>{
						query.where('working_day_id',2)	
					}).get();
					this.wednesday = UserScheduleTiming.query().with('schedule_timing',query =>{
						query.where('working_day_id',3)	
					}).get();
					this.thursday = UserScheduleTiming.query().with('schedule_timing',query =>{
						query.where('working_day_id',4)	
					}).get();
					this.friday = UserScheduleTiming.query().with('schedule_timing',query =>{
						query.where('working_day_id',5)	
					}).get();
					this.saturday = UserScheduleTiming.query().with('schedule_timing',query =>{
						query.where('working_day_id',6)	
					}).get();
					this.sunday = UserScheduleTiming.query().with('schedule_timing',query =>{
						query.where('working_day_id',7)	
					}).get();

				}
			},
			dateParsing(date){

				return moment(date,'hh:mm').format('LT')
			},
			openModal(dayId){

				this.currentDay = dayId;
				const elem = this.$refs.openAddmodal
				elem.click();
			},
			addMoreTime(){

				this.addModalData.push({
					working_day_id: this.currentDay,
					start_time: this.startTime,
					end_time: this.endTime,
					service_title: this.service
				})

				
			},
			removeTimeSlot(index){

				this.addModalData.splice(index, 1)
				
			},
			async deleteRecord(id){

				await ScheduleTimingModal.deleteAll();
				await UserScheduleTiming.deleteAll();

				await ScheduledTimingsDestroy(this.token,{id:id});

				await this.fetchAllSecheduled();
			},
			async onSave(){
				const elem = this.$refs.closeModal
				elem.click();

				
				await UserScheduleTiming.deleteAll();

				await ScheduledTimingsStore(this.token,{data: this.addModalData});
				
				await this.fetchAllSecheduled();

				this.clear();
			},
			clear(){

				this.currentDay = "";
				this.service = "";
				this.addModalData = [];
			}
		}
	}
</script>
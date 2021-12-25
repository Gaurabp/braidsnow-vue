<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Booking</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Booking</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-body">
							<div class="booking-pro-info">
								<a href="javascript:;" class="booking-pro-img">
								<img :src="basePath+profileData.avatar" class="img-fluid" :alt="profileData.name">
								</a>
								<div class="booking-info">
									<h4 class="pro-name">{{profileData.name}} </h4>

									<div class="rating">
									<i class="fas fa-star filled" v-for="i in profileData.ratting" :key="i"></i>
									
									<i class="fas fa-star" v-for="j in (5 - profileData.ratting)" :key="j"></i>
									<span class="d-inline-block average-rating">({{profileData?.reviews?.length}})</span>
								</div>
									<p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i>{{profileData.city}},{{profileData.state}}, USA </p>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-sm-12 col-md-3">
							<h4 class="mb-1">{{today}} </h4>
							<p class="text-muted">{{todayDay}} </p>
						</div>
						<div class="col-12 col-sm-12 col-md-3">
							
						</div>
						<div class="col-12 col-sm-12 col-md-3">
							<label>Service</label>
							<Multiselect 
							v-model="selectedService" 
							placeholder="select service"
							mode="tags" 
							:closeOnSelect="false"
							:searchable="true"
							:createTag="true"
							:options="options"/>
						</div>
						<div class="col-12 col-sm-12 col-md-3">
							<label> Booking Date</label>
							<input type="date" class="form-control" v-model="selectedDate">
						</div>
						
					</div>
					<br>

					<div class="card booking-schedule schedule-widget" v-if="isBookingClosed == false">
						<div class="row">
							
							<div 
							class="col-md-12" 
							style="margin-left: 20px;margin-top: 10px;" 
							v-for="service in showServices" :key="service.id">
								
								<strong>{{service.service}} </strong>
								<p><small>(Duration:- {{service.hour}} hours {{service.min}} min)</small></p>
							</div>
						</div>

					</div>


					<div class="card booking-schedule schedule-widget" v-if="slotStaus && showServices.length && isBookingClosed == false">

						<div class="schedule-cont" >
							<div class="row">
								<div class="col-md-12">

									<div class="time-slot">

										<ul class="clearfix" >
											<li v-for="(timing,index) in objSlot" :key="index" style="margin-bottom:50px">
												
												<a 
												v-for="(time,key) in timing"
												:key="key"
												class="timing" 
												:class="{'selected':time.isSelected}" 
												style="cursor: pointer;"
												@click="dateSelected(time)"
												>

												<span>{{time.time}}</span>
												</a>
											</li>
											<hr>
										</ul>
									</div>


								</div>
							</div>
						</div>

					</div>
					<br>
					<div class="card booking-schedule schedule-widget" v-if="isBookingClosed">

						<div class="schedule-cont" >
							<div class="row">
								<div class="col-md-12">
									<h2>Booking Closed</h2>
								</div>
							</div>
						</div>

					</div>


					<div class="submit-section proceed-btn text-right">
						<button type="button"
						v-if="isBookingClosed == false"	
						@click="onSubmit" class="btn btn-primary submit-btn">Proceed to Pay</button>
						<button 
						type="button"	
						v-if="isBookingClosed == true"	
						class="btn btn-primary submit-btn">Booking Closed</button>

					</div>

				</div>
			</div>
		</div>
	</div>
	<footer-component/> 
	<Loader :isLoading="isLoading"/>
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	import {braiderProfile,timeSlot} from '@/services/websiteServices'
	import AssetsPath from '@/utils/AssetsPath'
	import moment from 'moment'
	import Auth from '@/models/Auth'
	import {braiderSevice,workingDayAPI} from '@/services/websiteServices'
	import Multiselect from '@vueform/multiselect'
	import Swal from 'sweetalert2'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default {
		name:'Booking',
		components:{MenuComponent,Multiselect,Loader,FooterComponent},
		data(){
			return {
				profileData:{},
				dayStart:0,
				dayEnd:0,
				slotStaus:false,
				selectedDate: new Date().toISOString().slice(0,10),
				timeSlots:[],
				objSlot:[],
				servicesModal:[],
				options: [],
				selectedService:[],
				serviceLocation:'work_from_shop',
				isBookingClosed:false,
				timeInMin:0,
				isLoading:true,
			}
		},
		computed:{
			basePath(){
				return AssetsPath;
			},
			today(){
				return moment().format('MMMM/DD/YYYY');
			},
			todayDay(){
				return moment().format('dddd');
			},
			auth(){
				
				return  Auth.query().first();
			},
			token(){
				
				return this.auth.api_token;
			},
			showServices(){

				let newData = [];
				let data = this.selectedService.map(data => {
					return this.servicesModal.filter(res => {
						if (res.service == data) {
							res.isSelected = true;
							return res;
						}
					})
				});
				data.map(res => {

					newData.push(res[0])
					
				})

				return newData;
			}
		},
		watch: {
			selectedDate: function() {
				this.getTimeSlot();
				this.workingDay();
			}
		},
		async mounted(){

			let type = localStorage.getItem('serviceLocation');

			if (type == '' || type == null || type == undefined) {
				this.$router.push('/');
			}

			this.serviceLocation = type;


			await this.fetchBraiderInfo();
			await this.getTimeSlot();
			await braiderSevice({
				userId:this.$route.params.id
			})
			.then(async res => {
				this.servicesModal = await res.data.data

				await this.servicesModal.map(service => {
					service.isSelected = false;
					this.options.push({
						value: service.service,
						label: service.service
					})
					
				})

			});
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
			//this.workingDay();
		},
		methods:{
			workingDay(){

				const notAllowedBookingUpto = moment()
				.add(this.profileData?.advance_schedule_setting?.prevent_days,'days')
				.format('YYYY-MM-DD');

				const bookingAllowedUpto = moment()
				.add(this.profileData?.advance_schedule_setting?.prevent_booking_more_than,'days')
				.format('YYYY-MM-DD');

				if (this.selectedDate == moment().format('YYYY-MM-DD') && this.profileData?.advance_schedule_setting?.is_prevent_same_day_booking) {

					this.isBookingClosed = true;
				}else{
					this.isBookingClosed = false;
				}

				if(notAllowedBookingUpto >= this.selectedDate){

					this.isBookingClosed = true;
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: `Booking slot not available`
					})

				}

				if (bookingAllowedUpto <= this.selectedDate) {

					this.isBookingClosed = true;
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: `Booking not allowed`
					})
				}

				if (this.profileData?.advance_schedule_setting?.is_stop_accepting_appointment &&	
					this.selectedDate >= moment(this.profileData?.advance_schedule_setting?.stop_booking_from).format('YYYY-MM-DD')) {
					this.isBookingClosed = true;
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: `Booking not allowed`
					})
				}
				


				workingDayAPI({
					user_id: this.$route.params.id,
					name: this.selectedDate
				}).then(async res => {

					const appointment = res?.data?.appointments;

					let bookedDated = [];
					if (appointment.length) {
						await appointment.map(appoint => {
							bookedDated.push({
								startTime: parseInt(appoint.schedule_time),
								endTime: parseInt(appoint.schedule_time_end)
							});
						})
					}

					
					this.objSlot = [];
					if (res.data) {

						this.dayStart = parseInt(res.data.start_time);
						this.dayEnd = parseInt(res.data.end_time);
						this.lunchStart = parseInt(res.data.lunch_start_time)
						this.lunchEnd = parseInt(res.data.lunch_end_time)
						
						for (let i = this.dayStart; i<= this.dayEnd; i++) {
							let checBooked = bookedDated.find(o => o.startTime <= i && o.endTime >= i);
							
							if (bookedDated.length &&  checBooked!= undefined) {
								
								if (i < checBooked.startTime || i >= checBooked.endTime) {

									if (res.data.is_block_lunch_time) {

										if (i < this.lunchStart || i >= this.lunchEnd) {

											await this.objSlot.push({
												time: moment(`${i}:00`,'hh:mm A').format('hh:mm A'),
												startTime: this.dayStart,
												endTime: this.dayEnd,
												current: i,
												isSelected:false
											});
											
										}
									}else{

										await this.objSlot.push({
											time: moment(`${i}:00`,'hh:mm A').format('hh:mm A'),
											startTime: this.dayStart,
											endTime: this.dayEnd,
											current: i,
											isSelected:false
										});
										
									}
								}
							}else{

								if (res.data.is_block_lunch_time) {
									if (i < this.lunchStart || i >= this.lunchEnd) {

										await this.objSlot.push({
											time: moment(`${i}:00`,'hh:mm A').format('hh:mm A'),
											startTime: this.dayStart,
											endTime: this.dayEnd,
											current: i,
											isSelected:false
										});
										

									}
								}else{
									await this.objSlot.push({
										time: moment(`${i}:00`,'hh:mm A').format('hh:mm A'),
										startTime: this.dayStart,
										endTime: this.dayEnd,
										current: i,
										isSelected:false
									});
								}
							}
						}
						this.objSlot = this.sliceIntoChunks(this.objSlot,3);
						this.slotStaus = true;
					}
				})
			},
			sliceIntoChunks(arr, chunkSize) {
				const res = [];
				for (let i = 0; i < arr.length; i += chunkSize) {
					const chunk = arr.slice(i, i + chunkSize);
					res.push(chunk);
				}
				return res;
			},
			parseTime(time){
				return moment(time,'hh:mm').format('hh:mm A');
			},
			getTimeSlot(){

				timeSlot({
					braider_id: this.profileData.id,
					date: this.selectedDate
				}).then(async res => {

					this.timeSlots = res?.data?.scheduleSlot;

					await this.timeSlots.map(service => {
						service.isSelected = false;
						service?.schedule_timing.map(slot => slot.isSelected = false);
					})

					
				});
			},
			async fetchBraiderInfo(){

				const id = this.$route.params.id;
			
				await braiderProfile(id)
				.then(res => this.profileData = res.data.user);

				this.selectedDate = moment()
				.add(this.profileData?.advance_schedule_setting?.prevent_days+1,'days')
				.format('YYYY-MM-DD');


			},
			async dateSelected(timing){

				let timeInMin = 0;

				this.objSlot = await this.objSlot.filter(sloting => {

					return sloting.filter(slot => {

						if (slot.current == timing.current) {
							
							this.showServices.map(service => {

								timeInMin += (service.hour*60)+service.min;
							});

							let totalTime = (slot.endTime - slot.current)*60;

							if (timeInMin > totalTime) {
								slot.isSelected = false;

								Swal.fire("Please remove some service");

							}else{
								slot.isSelected = true;
								this.timeSlots = slot;
							}
							
							return slot;
						}else{
							slot.isSelected = false;
						}


						return slot;
					})
				});

			},
			onSubmit(){

				//if (this.auth) {

					
					if (this.showServices.length && this.timeSlots?.time != undefined) {

						localStorage.setItem('timeslot',JSON.stringify(this.timeSlots));
						localStorage.setItem('servicesModal',JSON.stringify(this.servicesModal));
						localStorage.setItem('bookingDate',this.selectedDate);
						localStorage.setItem('profileData',JSON.stringify(this.profileData));
						this.$router.push({name:'Checkout'});
					}else{
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Please select service and time slot'
						})
					}
/*
				}else{
					this.$router.push('/login');
				}*/	
			},
			myChangeEvent(val){
				console.log(val);
			},
			mySelectEvent({id, text}){
				console.log({id, text})
			}
		}
	}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Dashboard</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Dashboard</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="appointments" v-if="appointments.length">

						<div class="appointment-list" v-for="appo in appointments" :key="appo.id">

							<div class="profile-info-widget">
								<a class="booking-pro-img">
								<img :src="appo.avatar?basePath+appo?.avatar: (appo?.user?.avatar?basePath+appo?.user?.avatar : profileGuest)" alt="User Image">
								</a>
								<div class="profile-det-info">

									<h3>{{appo.full_name}} {{appo.is_refund_claimed && appo.is_refunded == 0?"(Refund Claimed)":""}}</h3>
									<div class="customer-details">
										<h5>Appointment No. {{ appo?.id }} </h5>

										<h5>
											<i class="far fa-clock"></i>
								{{convertDate(appo.schedule_date)}},{{appo.schedule_time}} 
										</h5>
										<h5><i class="fas fa-map-marker-alt"></i> {{appo?.user?.address || appo.address}} </h5>
										<h5><i class="fas fa-envelope"></i>{{appo?.user?.email || appo.email_id}} </h5>
										<h5 class="mb-0"><i class="fas fa-phone"></i>{{appo?.user?.phone_number || appo.phone}} </h5>
									</div>
								</div>
							</div>
							<div class="appointment-action">

								<button class="btn btn-sm bg-primary-light" @click="onPayment(appo)">
									<i class="fas fa-dollar-sign"></i> Payment
								</button>
								<router-link 
								:to="{name:'Invoice',params: {id: appo.id }}" 
								target="_blank"
								class="btn btn-sm bg-dark-light" >
									<i class="fas fa-file-invoice"></i> Bill Client
								</router-link>
							</div>

							<div class="appointment-action" v-if="appo.status == 'Pending'">
								<button
									class="btn btn-sm bg-info-light" 
									@click="fillModalData(appo)"
								>
									<i class="far fa-eye"></i> View
								</button>
								<button class="btn btn-sm bg-success-light" @click="onAccept(appo)">
									<i class="fas fa-check"></i> Accept	
								</button>
								<button class="btn btn-sm bg-danger-light" @click="onCancel(appo)">
									<i class="fas fa-times"></i> {{loadingCancel?'Loading':'Cancel'}}
								</button>
							</div>
							<div class="appointment-action" v-else-if="appo.status == 'Confirmed'">
								<button
									class="btn btn-sm bg-info-light" 
									@click="fillModalData(appo)"
								>
									<i class="far fa-eye"></i> View
								</button>
								<button
									class="btn btn-sm bg-success-light" 
									@click="onComplete(appo)"
								>
									<i class="fas fa-check"></i> Complete
								</button>
								<button class="btn btn-sm bg-danger-light" @click="onCancel(appo)">
									<i class="fas fa-times"></i> {{loadingCancel?'Loading':'Cancel'}}
								</button>
							</div>
							<div class="appointment-action" v-else-if="appo.status == 'Canceled'">
								<button
									class="btn btn-sm bg-info-light" 
									@click="fillModalData(appo)"
								>
									<i class="far fa-eye"></i> View
								</button>
								
							</div>
							<div class="appointment-action" v-else>
								<button
									class="btn btn-sm bg-info-light" 
									@click="fillModalData(appo)"
								>
									<i class="far fa-eye"></i> View
								</button>
							</div>
						</div>
					</div>
					<div class="appointments" v-else>
						<div class="row">
							<div class="col-md-6 col-lg-12 col-xl-12">
								<div class="card widget-profile pat-widget-profile">
									<img src="/assets/nodatafound.png" alt="Image" height="700">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- model -->
	<div class="modal fade custom-modal" id="appt_details" >
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Appointment Details</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clear">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<ul class="info-details">
						
						<li>
							<div class="details-header">
							<div class="row">
							<div class="col-md-6">
							<span class="title">{{'#APT000'+modalData.invoiceNo}} </span>
							<span class="text">{{modalData.created_at}} </span>
							</div>
							<div class="col-md-6">
							<div class="text-right">
							<button type="button" class="btn btn-sm">{{modalData.status}} </button>
							</div>
							</div>
							</div>
							</div>
						</li>
						<li>
							<span class="title">Full Name:</span>
							<span class="text">{{modalData.full_name}} </span>
						</li>
						<li>
							<span class="title">Email:</span>
							<span class="text">{{modalData.email_id}} </span>
						</li>
						<li>
							<span class="title">Phone:</span>
							<span class="text">{{modalData.phone}} </span>
						</li>
						<li>
							<span class="title">Status:</span>
							<span class="text">{{modalData.status}} </span>
						</li>
						<li>
							<span class="title">Service opted:</span>
							<span class="text">{{modalData.serviceOpted}} </span>
						</li>
						<li>
							<span class="title">Appointment Date:</span>
							<span class="text">{{modalData.appointmentDate}} </span>
						</li>
						<li>
							<span class="title">Paid Amount</span>
							<span class="text">${{modalData.paidAmount}} </span>
						</li>
					</ul>
					<br>
					<div class="row" v-if="modalData.status == 'Confirmed'">
						<div class="col-md-6">
							<button v-if="emailNotificationLoding" class="btn btn-primary"> Sending ...</button>
							<button class="btn btn-primary" @click="sendReminder(modalData.invoiceNo)" v-else>Send Remainder Email</button>
						</div>
						<div class="col-md-6">
							<button class="btn btn-primary" 
							@click="addReminder(modalData.startTime,modalData.endTime)">Add to Google Calendar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade custom-modal" id="paymentModal" >
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Payment</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" ref="closePaymentModal">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-6">
							<span class="title" style="margin-right:10px">Total Amount:</span>
							<span class="text">$ {{ payload.total_amount.toFixed(2) }} </span>
						</div>
						<div class="col-md-6">
							<span class="title" style="margin-right:10px">Paid Amount</span>
							<span class="text">$ {{ payload.paid_paid.toFixed(2) }} </span>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<span class="title" style="margin-right:10px">Due Amount:</span>
							<span class="text">$ {{ payload.due_amount.toFixed(2) }} </span>
						</div>
						
					</div>
					<br>
					<div class="row" v-if="payload.due_amount>0">
						<div class="col-md-6">
							<label>Enter Due amount</label>
							<input type="text" class="form-control" v-model="paymentAmount">
							<small v-if="paymentAmountErr" class="text-danger">{{paymentAmountErr}}</small>
						</div>
						<div class="col-md-6" style="margin-top:27px">
							<button class="btn btn-primary" @click="confirmPayment">Confirm Payment</button>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
	<a data-target="#appt_details" data-toggle="modal" ref="openModal"></a>
	<a data-target="#paymentModal" data-toggle="modal" ref="openPaymentModal"></a>
	<footer-component/>
	<Loader :isLoading="isLoading"/>
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import Sidebar from './Sidebar'
	import Appointment from '@/models/Appointment'
	import { getAllAppointment,UpdateAppointmentStatus,dueAmountUpdate,sendReminderNotification} from '@/services/dashboardService'
	import Auth from '@/models/Auth'
	import AssetsPath from '@/utils/AssetsPath'
	import moment from 'moment'
	import Swal from 'sweetalert2'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'Appointments',
		components:{MenuComponent,Sidebar,Loader,FooterComponent},
		data(){

			return {
				emailNotificationLoding:false,
				paymentAmount:'',
				paymentAmountErr:'',
				appointments:[],
				profileGuest:'/assets/img/guest.jpg',
				payload:{
					id:'',
					total_amount:0,
					paid_paid:0,
					due_amount:0
				},
				modalData:{
					invoiceNo:'',
					full_name:'',
					email_id:'',
					phone:'',
					status:'',
					serviceOpted:'',
					appointmentDate:'',
					paidAmount:''
				},
				isLoading:true,
				loadingCancel:false,

			}
		},
		computed:{
			auth(){
				
				return  Auth.query().first();
			},
			token(){
				
				return this.auth.api_token;
			},
			basePath(){
				return AssetsPath;
			}
		},
		async mounted(){

			//this.isLoading = false;
			this.selectAll();
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			async selectAll(){
				await getAllAppointment(this.token)
				.then(async res => {
					
					this.appointments = res.data.data;

					console.log(this.appointments[0].full_name);
					/*if (!Appointment.exists()) {
						await Appointment.insert({data:res.data.data})	
					}

					this.appointments = await Appointment.query()
					.with(['user','appointment_booked_services.service'])
					.get();*/
					
				})
			},
			convertDate(date){

				return moment(date).format('MMM-DD-YYYY')
			},
			addReminder(start,end){

				window.open(`https://calendar.google.com/calendar/u/0/r/eventedit?text=Braidsnow+Appoitment&dates=${start}/${end}&details=Appointment+Booked+&sf=true`,'_blank');
				
			},
			confirmPayment(){
				this.paymentAmountErr = "";

				if (this.paymentAmount == "" || this.paymentAmount == null) {
					this.paymentAmountErr = "Amount must be greater than $0";
				}else if(this.paymentAmount && this.paymentAmount > this.payload.due_amount){
					this.paymentAmountErr = "Amount is greater than due amount";
				}else{

					dueAmountUpdate(this.token,{
						id: this.payload.id,
						amount: this.paymentAmount
					}).then(async () => {

						this.$refs.closePaymentModal.click();

						Swal.fire('Payment successfully updated');
						await Appointment.deleteAll();
						await this.selectAll();

						this.paymentAmount = '';
						this.paymentAmountErr = '';
						this.payload = {
							id:'',
							total_amount:0,
							paid_paid:0,
							due_amount:0
						};
					})
				}
			},
			onPayment(payload){

				this.payload.total_amount = Number(payload.total_amount);
				this.payload.paid_paid = Number(payload.paid_paid);
				this.payload.due_amount = Number(payload.due_amount);
				this.payload.id = payload.id;
				
				this.$refs.openPaymentModal.click();
			},
			fillModalData(data){
				
				const totalService = data?.appointment_booked_services.length;
				let serviceText = "";

				if (totalService) {
					for(let i = 0; i< totalService; i++){

						if ((totalService-1) == i) {
							serviceText += data?.appointment_booked_services[i].title;	
						}else{

							serviceText += data?.appointment_booked_services[i].title+', ';
						}
					}
				}
				this.modalData = {
					invoiceNo: data.id,
					status: data.status,
					serviceOpted:serviceText,
					created_at: this.convertDate(data.created_at),
					appointmentDate: this.convertDate(data.schedule_date),
					paidAmount: data.paid_paid,
					full_name: data.full_name,
					email_id: data.email_id,
					startTime: this.reminderDateCast(data.schedule_date,data.schedule_time),
					endTime: this.reminderDateCast(data.schedule_date,data.schedule_time_end),
					phone: data.phone,
				};

				const elem = this.$refs.openModal
				elem.click();
			},
			reminderDateCast(date,time){
				console.log(date,time);
				let newDate = moment(date,'YYYY-MM-DD').format('YYYYMMDD');
				console.log(newDate);
				let newTime = moment(time,'h:mm').format('hhmm');
				return newDate+'T'+newTime;
			},
			onComplete(appointment){

				UpdateAppointmentStatus(this.token,{
					appointment_id:appointment.id,
					status:'Completed'
				});
				Appointment.update({
					where: appointment.id,
					data:{
						status: 'Completed'
					}
				});
				this.selectAll();
			},
			onAccept(appointment){
				
				UpdateAppointmentStatus(this.token,{
					appointment_id:appointment.id,
					status:'Confirmed'
				});
				Appointment.update({
					where: appointment.id,
					data:{
						status: 'Confirmed'
					}
				});
				this.selectAll();
			},
			onCancel(appointment){

				Swal.fire({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, Cancel it!'
				}).then(async (result) => {
					if (result.isConfirmed) {
						this.loadingCancel = true;
						await UpdateAppointmentStatus(this.token,{
							appointment_id:appointment.id,
							status:'Canceled'
						});

						await Appointment.update({
							where: appointment.id,
							data:{
								status: 'Canceled'
							}
						});
						this.selectAll();

						this.loadingCancel = false;
					}
				})
				
			},
			clear(){

				this.modalData = {
					invoiceNo: '',
					status: '',
					serviceOpted:'',
					created_at: '',
					appointmentDate: '',
					paidAmount: '',
					full_name: '',
					email_id: '',
					phone: '',
				};
			},
			sendReminder(id){

				this.emailNotificationLoding = true;
				sendReminderNotification(this.token,{id}).then(() => {

					Swal.fire({
						title: 'Reminder Notification Sended',
						icon: 'success',
						
					})

					this.emailNotificationLoding = false;

				});
			}

		}
		
	}
</script>
<style>
	.btn{
		margin-right: 10px;
	}
</style>
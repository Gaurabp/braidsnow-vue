<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Customer Dashboard</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Customer Dashboard</h2>
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
						<div class="card-body pt-0">

							<div class="tab-content pt-0">

								<div id="pat_appointments" class="tab-pane fade show active">
									<div class="card card-table mb-0">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
													<tr>
													<th>Styler</th>
													<th>Appt Date</th>
													<th>Booking Date</th>
													<th>Due</th>
													<th>Paid</th>
													<th>Amount</th>
													<th>Status</th>
													<th></th>
													</tr>
													</thead>
													<tbody>
														<tr  v-for="appointment in appointments" :key="appointment.id">
															<td>
															<h2 class="table-avatar">
															<a href="javascript:;" class="avatar avatar-sm mr-2">
															<img class="avatar-img rounded-circle" :src="basePath+appointment.braider.avatar" :alt="appointment.braider.name">
															</a>
															<a href="javascript:;">{{appointment.braider.name}} </a>
															</h2>
															</td>
															<td>{{parseDate(appointment.schedule_date)}}</td>
															<td>{{parseDate(appointment.created_at)}}</td>
															<td>${{appointment.due_amount}}</td>
															<td>${{appointment.paid_paid}}</td>
															<td>${{appointment.total_amount}}</td>
															
															<td>
																<span class="badge badge-pill bg-success-light">
																	{{appointment.status}}
																</span>
															</td>
															<td class="text-right">
															<div class="table-action">
															<router-link
															style="margin-right: 10px;"
															:to="{name:'Payment',params:{id:appointment.id}}"
															v-if="appointment.due_amount>0" class="btn btn-sm bg-primary-light"
															>Pay</router-link>
															
															
															<router-link 
															:to="{name:'Invoice',params: {id: appointment.id }}" 
															target="_blank"
															class="btn btn-sm bg-success-light" >
															<i class="fas fa-file-invoice"></i> Invoice
															</router-link>

															<button
															style="margin-left: 15px;"
															class="btn btn-sm bg-primary-light" 
															v-if="appointment.is_refund_claimed == 1">
															<i class="fas fa-undo"></i> {{appointment.is_refunded?"Refunded":"Claimed"}}
															</button>

															<button
															style="margin-left: 15px;"
															@click="claimRefund(appointment.id)"
															class="btn btn-sm bg-primary-light" v-else>
															<i class="fas fa-undo" v-if="claimLoading==false"></i> 
															{{claimLoading?"Loading...":"Claim Refund"}}
															</button>

															</div>
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
				</div>
			</div>
		</div>
	</div>
	<footer-component/> 
	<Loader :isLoading="isLoading"/>
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	import Sidebar from '@/views/Customer/Sidebar'
	import {
		getAllAppointment,
		ClaimRefund
	} from '@/services/CustomerServices'
	import Auth from '@/models/Auth'
	import AssetsPath from '@/utils/AssetsPath'
	import moment from 'moment'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default {
		name:'Dashboard',
		components:{MenuComponent,Sidebar,Loader,FooterComponent},
		data(){
			return {
				appointments:[],
				isLoading:true,
				claimLoading:false
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
		mounted(){

			this.appointmentData();

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			parseDate(time){
				return moment(time).format('MMM DD YYYY');
			},
			onLogout(){
				localStorage.setItem('user','');
				this.$router.push({ name: 'Home'});
			},
			async appointmentData(){
				await getAllAppointment(this.token).then(res => {
					this.appointments = res.data.appointments
				});
			},
			claimRefund(id){
				this.claimLoading = true;
				ClaimRefund(this.token,{id}).then(async () => {
					await this.appointmentData();
					this.claimLoading = false;
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>
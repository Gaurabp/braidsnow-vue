<template >
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Invoice</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Invoice</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content" id="printMe">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<div class="invoice-content">
						<div class="invoice-item">
							<div class="row">
								<div class="col-md-6">
									<div class="invoice-logo">
										<img :src="assetsPath+settingData.logo_website" alt="logo">
									</div>
								</div>
								<div class="col-md-6">
									<p class="invoice-details">
									<strong>Order:</strong> #00{{invoice.id}} <br>
									<strong>Issued:</strong> {{invoice.created_at}}
									</p>
								</div>
							</div>
						</div>

						<div class="invoice-item">
							<div class="row">
								<div class="col-md-6">
									<div class="invoice-info">
										<strong class="customer-text">Invoice From</strong>
										<p class="invoice-details invoice-details-two">
										{{invoice?.braider?.name}} <br>
										{{invoice?.braider?.address}},<br>
										{{invoice?.braider?.city}},{{invoice?.braider?.state}},{{invoice?.country}} <br>
										{{invoice?.braider?.zipcode }}<br>
										</p>
									</div>
								</div>
								<div class="col-md-6">
									<div class="invoice-info invoice-info2">
										<strong class="customer-text">Invoice To</strong>
										<p class="invoice-details">
										{{invoice?.full_name}} <br>
										{{invoice?.address}}, <br>
										{{invoice?.zip_code}} <br>
										</p>
									</div>
								</div>
							</div>
						</div>


						<!-- <div class="invoice-item">
							<div class="row">
								<div class="col-md-12">
									<div class="invoice-info">
										<strong class="customer-text">Payment Method</strong>
										<p class="invoice-details invoice-details-two">
										Debit Card <br>
										XXXXXXXXXXXX-2541 <br>
										HDFC Bank<br>
										</p>
									</div>
								</div>
							</div>
						</div> -->


						<div class="invoice-item invoice-table-wrap">
							<div class="row">
								<div class="col-md-12">
									<div class="table-responsive">
										<table class="invoice-table table table-bordered">
											<thead>
												<tr>
													<th>Description</th>
													<!-- <th class="text-center">Quantity</th> -->
													<!-- <th class="text-center">Duration in minutes</th> -->
													<th class="text-right">Total</th>
												</tr>
											</thead>
											<tbody>
												<tr 
												v-for="booked in invoice.appointment_booked_services" 
												:key="booked.id">
												<td>{{booked.title}} </td>
													<!-- <td class="text-center">1</td> -->
													<!-- <td class="text-center">{{booked?.duration_in_minutes }}  </td> -->
													<td class="text-right">${{booked?.price}} </td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="col-md-6 col-xl-4 ml-auto">
									<div class="table-responsive">
										<table class="invoice-table-two table">
											<tbody>
												<tr>
													<th>Paid:</th>
													<td><span>$ {{Number(invoice?.paid_paid).toFixed(2)}} </span></td>
												</tr>
												<tr>
													<th>Due:</th>
													<td><span>$ {{Number(invoice?.due_amount).toFixed(2)}}</span></td>
												</tr>
												<tr>
													<th>Total Amount:</th>
													<td><span>$ {{Number(invoice?.total_amount).toFixed(2)}} </span></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>

						<center>
							<button class="btn btn-primary" id="print" @click="print">Print</button> &nbsp;
						</center>

						<!-- <div class="other-info">
							<h4>Other information</h4>
							<p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero.</p>
						</div> -->

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
import {Invoice} from '@/services/websiteServices'
// import Loader from '@/components/Loader';
import FooterComponent from '@/components/Layout/Footer'
import { settings } from '@/services/auth'
import AssetsPath from '@/utils/AssetsPath';

	export default {
		name:'BookingSuccess',
		components:{MenuComponent,FooterComponent},
		data(){
			return {
				invoice:{},
				settingData:{},
				isLoading:true,
			}
		},
		computed: {
			assetsPath(){
				return AssetsPath;
			}
		},
		async mounted(){

			await settings()
			.then(async res => this.settingData = await res.data)
			.catch(err => console.log(err));

			await Invoice({id:this.$route.params.id})
			.then(res => this.invoice = res.data);

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			print() {
				var newstr = document.getElementById('printMe').innerHTML
				var oldstr = document.body.innerHTML
				document.body.innerHTML = newstr
				window.print()
				document.body.innerHTML = oldstr

				window.location.reload();
				return false
			}
		}
	}
</script>
<style>
	@media print {
		#print {
			visibility: hidden;
		}
	}
</style>

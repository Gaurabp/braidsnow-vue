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

	<div class="content success-page-cont">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6">

					<div class="card success-card">
						<div class="card-body">
							<div class="success-cont">
								<i class="fas fa-check"></i>
								<h3>Appointment booked Successfully!</h3>
								<p>Appointment booked with <strong>{{braider}} </strong><br> on <strong> {{booking_date}} </strong></p>
								<router-link :to="{name:'Invoice',params:{id:appointmentId}}" class="btn btn-primary view-inv-btn">view receipt
								</router-link>	
								
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
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'
	
	export default {
		name:'BookingSuccess',
		components:{MenuComponent,Loader,FooterComponent},
		data(){
			return {
				isLoading:true,
			}
		},
		computed:{
			braider(){
				return this.$route.params.braider
			},
			booking_date(){

				return this.$route.params.booking_date
			},
			appointmentId(){
				return this.$route.params.appointmentId
			}
		},
		mounted(){
			if (this.braider == null || this.booking_date) {
				//this.$router.push({name:'Home'})
			}
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		}
	}
</script>
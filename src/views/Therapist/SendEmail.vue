<template>
	<menu-component/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Send Email</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Send Email</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<sidebar-component/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="card">
						<div class="card-body">
							<div class="row">
								<div class="col-md-12 col-lg-12" style="margin-bottom:20px">
									<label for="">Message</label>
									<textarea 
									class="form-control" 
									cols="30" 
									rows="10" 
									v-model="textMessage"
									placeholder="Type message..."></textarea>
								</div>
								<div class="col-md-12 col-lg-12">
									<button type="button"	
									@click="onSend"	
									:disabled="isDisabled"	
									class="btn btn-primary">Send</button>
								</div>
							</div>
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
	import MenuComponent from '../../components/Layout/Menu'
	import SidebarComponent from './Sidebar'
	import Auth from '@/models/Auth'
	import {sendEmail} from '@/services/dashboardService'
	import Swal from 'sweetalert2'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'SendEmail',
		components:{MenuComponent,SidebarComponent,FooterComponent},
		data(){
			return{
				textMessage:'',
				isDisabled:false,
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
		mounted(){
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			onSend(){

				this.isDisabled = true;

				sendEmail(this.token,{
					id:this.$route.params.id,
					message: this.textMessage
				}).then(() => {
					this.textMessage = "";
					this.isDisabled = false;
					Swal.fire('Email Sended');
					
				}).catch(() => {
					this.isDisabled = false;
				})
			}
		}
	}
</script>
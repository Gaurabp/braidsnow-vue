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
									<label for="">Email</label>
									<Multiselect 
									v-model="emails" 
									placeholder="select service"
									class="form-control"
									mode="tags" 
									:closeOnSelect="false"
									:searchable="true"
									:createTag="true"
									:options="customerList"/>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12 col-lg-12" style="margin-bottom:20px">
									<label for="">Subject</label>
									<input type="text" class="form-control" v-model="subject">
								</div>
							</div>
							<div class="row">
								<div class="col-md-12 col-lg-12" style="margin-bottom:20px">
									<label for="">Message</label>
									<textarea 
									class="form-control" 
									cols="30" 
									rows="10" 
									v-model="message"
									placeholder="Type message..."></textarea>
								</div>
								<div class="col-md-12 col-lg-12">
									<button v-if="isDisabled" type="button" class="btn btn-primary">Sending ...</button>
									<button type="button"	
									@click="onSend"	
									v-else
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
	<Loader :isLoading="isLoading"/>
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import SidebarComponent from './Sidebar'
	import Auth from '@/models/Auth'
	import {sendCustomEmail} from '@/services/dashboardService'
	import Swal from 'sweetalert2'
	import Multiselect from '@vueform/multiselect'
	import { customer } from '@/services/myCustomer'
	import Customer from '@/models/Customer'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'SendEmail',
		components:{MenuComponent,SidebarComponent,Multiselect,Loader,FooterComponent},
		data(){
			return{
				textMessage:'',
				isDisabled:false,
				emails:[],
				customerList:[],
				subject:'',
				message:'',
				isLoading:true,

			}
		},
		async mounted(){
			
			await customer(this.token).then(res => {
				this.customer = res.data.data;
				this.customer.map(cus => {

					this.customerList.push({
						value : cus.email,
						label : cus.email 	
					});

				});
					
				Customer.insert({data:res.data.data})
			})
			.catch(err => console.log(err))

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);

		},
		computed:{
			
			auth(){
				
				return  Auth.query().first();
			},
			token(){
				
				return this.auth.api_token;
			},
		},
		methods:{
			onSend(){

				this.isDisabled = true;

				sendCustomEmail(this.token,{
					
					emails: this.emails,
					subject: this.subject,
					message: this.message

				}).then(() => {
					this.message = "";
					this.subject = "";
					this.emails = [];
					this.isDisabled = false;
					Swal.fire('Email Sended');
					
				}).catch(() => {
					this.isDisabled = false;
				})
			}
		}
	}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
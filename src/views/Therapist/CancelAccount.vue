<template>
	<menu-component/>
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
					<h2 class="breadcrumb-title"> Cancel Account</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<sidebar-component/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<a href="javascript:;" @click="onCancel" class="btn btn-danger">Click Here To Cancel Account</a>
				</div>
			</div>
		</div>
	</div>
	<footer-component/>
	<!-- <Loader :isLoading="isLoading"/> -->
	
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import SidebarComponent from './Sidebar'
	import Swal from 'sweetalert2'
	import Auth from '@/models/Auth'
	import {cancelAccount} from '@/services/userService'
	// import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'CancelAccount',
		components:{MenuComponent,SidebarComponent,FooterComponent},
		data(){
			return {
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
			onCancel(){

				Swal.fire({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, cancel it!'
				}).then(async (result) => {
					if (result.isConfirmed) {
						await cancelAccount(this.token,{});
						Auth.deleteAll();
						Swal.fire(
							'Deleted!',
							'Your account has been deleted.',
							'success'
						);
						this.$router.push('/');
					}
				})
			}
		}
	}
</script>
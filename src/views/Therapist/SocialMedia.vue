<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Social Media</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Social Media</h2>
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
						<div class="card-body">

							<form>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Facebook URL</label>
											<input type="text" class="form-control" v-model="faceBook">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Twitter URL</label>
											<input type="text" class="form-control" v-model="twitter">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Instagram URL</label>
											<input type="text" class="form-control" v-model="instagram">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Pinterest URL</label>
											<input type="text" class="form-control" v-model="pinterest">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Linkedin URL</label>
											<input type="text" class="form-control" v-model="linkedin">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label>Youtube URL</label>
											<input type="text" class="form-control" v-model="youtube">
										</div>
									</div>
								</div>
								<div class="submit-section">
									<button type="button" @click="onUpdate" class="btn btn-primary submit-btn">Save Changes</button>
								</div>
							</form>

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
	import Sidebar from './Sidebar'
	import {socialMediaStore,socialMediaIndex} from '@/services/socialMediaService'
	import Swal from 'sweetalert2'
	import Auth from '@/models/Auth'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'SocialMedia',
		components:{MenuComponent,Sidebar,Loader,FooterComponent},
		data(){
			return {
				faceBook:'',
				twitter: '',
				instagram:'',
				pinterest:'',
				linkedin:'',
				youtube:'',
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

			await socialMediaIndex(this.token).then(({data}) => {

				if (data) {
					this.faceBook = data.facebook_url;
					this.twitter = data.twitter_url;
					this.instagram = data.instagram_url;
					this.pinterest = data.pinterest_url;
					this.linkedin = data.linkedin_url;
					this.youtube = data.youtube_url
				}
				
			});

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
		methods:{
			onUpdate(){

				socialMediaStore(this.token,{
					'facebook_url':this.faceBook,
					'twitter_url': this.twitter,
					'instagram_url': this.instagram,
					'pinterest_url': this.pinterest,
					'linkedin_url': this.linkedin,
					'youtube_url' : this.youtube
				}).then(() => {

					Swal.fire({
						icon: 'success',
						title: 'Success',
						text: 'Social links updated',
					});
				})
			}
		}
	}
</script>
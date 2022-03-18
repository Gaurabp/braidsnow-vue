<template>
	<footer class="footer" style="margin-top: 0%;">
		<div class="footer-mail text-center" style=" background: black;">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12">
					<img src="assets/Hair1.jpg">
					</div>
				</div>
			</div>
		</div>
		<div class="footer-top" style="background: url(assets/HB5.jpg)  no-repeat; background-size: cover;">
			<div class="container">
				<div class="row">
					
					<div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">About BraidsNow.com</h2>
							<p style="color: white;text-align: justify;font-size: 19px;margin-right: 50px;"><strong>BraidsNow.com</strong> is a resource for all things Braids and Black Hair.  We believe hairstyles are a work of art and should be appreciated as such.</p>
						</div>
					</div>
					
					<div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">Useful Links</h2>
							<ul>
								<li>
									<router-link :to="{name:'BraiderList'}">
									Find A Stylist
									</router-link>
								</li>
								<li v-if="!loginedUser">
									<router-link :to="{name:'BusinessRegister'}">
									Register My Business</router-link>
								</li>
								<li>
								<p v-if="!loginedUser" style="color: #ffffff !important;">
									<router-link :to="{name:'Login'}">
									Login
									</router-link>
								</p>
								<p v-if="loginedUser" style="color: #ffffff !important;">
									<router-link :to="{name: loginedUser?.role_id == 2 ?'BraiderDashboard':'Dashboard'}">Dashboard
									</router-link>
<<<<<<< HEAD
								</p>
=======
								</li>
								
							</ul>
						</div>
					</div>
					
					<div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">Useful links</h2>
							<ul>
								<li>
									<router-link :to="{name:'PrivacyPolicy'}">
										Privacy Policy
									</router-link>
>>>>>>> 5f77874dcc2d338c2e272b2305b88a66131b92f3
								</li>
								<li>
									<router-link :to="{name:'RefundPolicy'}">Refund Policy
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'About'}">About Us
									</router-link></li>
								<li>
									<router-link :to="{name:'FAQ'}">FAQ
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-contact">
							<h2 class="footer-title">Get In Touch</h2>
							<div class="footer-contact-info">
							
								<p><a href="mailto:info@braidsnowdotcom.com" style="color: white;">info@braidsnowdotcom.com</a></p>
							<p class="mb-0">
									Connect with us
								</p>
								<div class="social-icon">
									<ul>
									<li><a href="https://www.facebook.com/braidsnowdotcom/" class="icon" target="_blank"><i class="fab fa-facebook-f"></i> </a></li>
									
									<li><a href="https://www.instagram.com/braidsnowdotcom/?hl=en" class="icon" target="_blank"><i class="fab fa-instagram"></i> </a></li>
									
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<div class="footer-widget footer-menu">
							<h2 class="footer-title" style="margin-bottom: 10px;">Newsletter</h2>
<<<<<<< HEAD
							<h5 style="color:white;padding-bottom: 10px; font-size: 13px;font-weight: 200;">Sign up below to receive latest updates and news</h5>
=======
							<h5 style="color:white;padding-bottom: 10px; font-size: 14px;">Sign up below to receive latest updates and news</h5>
>>>>>>> 5f77874dcc2d338c2e272b2305b88a66131b92f3
							<div class="input-group mb-3">
<input type="email" v-model="email" class="form-control" placeholder="Your Email Address">
<div class="input-group-append">
<button class="btn btn-success" type="button" @click="newsletter()"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
</div>
</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container-fluid" style="background: black;">
				<div class="copyright">
					<div class="row">
						<div class="col-md-12 col-lg-12">
							<div class="copyright-text text-center">
								<p class="mb-0">
									© {{ new Date().getFullYear() }}
									<a href="BraidsNow.com">BraidsNow.com</a> | All Rights Reserved | 
									<router-link :to="{name:'PrivacyPolicy'}">Privacy Policy</router-link> |
                                    <router-link :to="{name:'TermAndCondition'}">Terms & Conditions
									</router-link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
<script>
	import Auth from '@/models/Auth'
	import Swal from 'sweetalert2';
	
export default {
	name: 'Footer',
	data(){
<<<<<<< HEAD
		return {
			email:''
=======
		return{
			email:'',
>>>>>>> 5f77874dcc2d338c2e272b2305b88a66131b92f3
		}
	},
	computed: {
		routeName(){
			return this.$route.name;
		},
		loginedUser(){

			const user = Auth.query().first();

			if (user) {
				return user;
			}
			return null;
			
		}
	},
	methods:{
		newsletter(){
			if (this.email) {

				Swal.fire("thanks for subscribing to our newsletter");
			}else{
				Swal.fire("please enter valid email address");
			}
		}
	}
}
</script>
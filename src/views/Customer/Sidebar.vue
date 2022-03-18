<template>
	<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
		<div class="profile-sidebar">
			<div class="widget-profile pro-widget-content">
				<div class="profile-info-widget">
					<a href="javascript:;" class="booking-pro-img">
						<img :src="basePath+auth.avatar" :alt="auth.name">
					</a>
					<div class="profile-det-info">
						<h3>{{auth.name}} </h3>
						<div class="customer-details">
							<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i>{{auth.city}}, {{auth.state}}</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="dashboard-widget">
				<nav class="dashboard-menu">
					<ul>
						<li>
							<router-link :to="{name:'ChatCustomer'}">
								<i class="fas fa-comment"></i>
									<span>Message</span>
							</router-link>
						</li>
						<li v-bind:class="{ active: this.$route.name == 'Dashboard' }">
							<router-link :to="{name:'Dashboard'}">
								<i class="fas fa-columns"></i>
								<span>Dashboard</span>
							</router-link>
						</li>
						<li v-bind:class="{ active: this.$route.name == 'Favourite' }">
							<router-link :to="{name:'Favourite'}">
								<i class="fas fa-bookmark"></i>
								<span>Favorites</span>
							</router-link>
						</li>
						<li v-bind:class="{ active: this.$route.name == 'ProfileSetting' }">
							<router-link :to="{name:'ProfileSetting'}">
								<i class="fas fa-user-cog"></i>
								<span>Profile Settings</span>
							</router-link>
						</li>
						<li v-bind:class="{ active: this.$route.name == 'ChangePassword' }">
							<router-link :to="{name:'ChangePassword'}">
								<i class="fas fa-lock"></i>
								<span>Change Password</span>
							</router-link>
						</li>
						<li>
							<a href="javascript:;" @click="onLogout">
								<i class="fas fa-sign-out-alt"></i>
								<span>Logout</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>
<script>
	import Auth from '@/models/Auth'
	import AssetsPath from '@/utils/AssetsPath'

	export default{
		name: 'Sidebar',
		computed:{
			auth(){
				return Auth.query().first();
			},
			basePath(){
				return AssetsPath;
			}
		},
		methods:{
			onLogout(){
				
				localStorage.removeItem('api_token');
				Auth.deleteAll();
				this.$router.push({ name: 'Home'});
			}
		}
	}
</script>
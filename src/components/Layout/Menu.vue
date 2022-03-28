<template>
<div class="wrapper">
	<header class="header min-header">
		<nav class="navbar navbar-expand-lg header-nav navBarHeader" :class="{'fixed-top': classFixed == 'fixed-top'}">
			<div class="navbar-header">
				<a id="mobile_btn" href="javascript:void(0);" style="margin-left: 80%;">
					<span class="bar-icon">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</a>
				<a href="" class="navbar-brand logo">
					<img :src="isMobile == true?assetsPath+settingData.logo_mobile:assetsPath+settingData.logo_website" class="img-fluid" :class="isMobile == false?'desktopLogo':''" alt="Logo">
				</a>
				<div class="main-menu-wrapper">
					<div class="menu-header">
						<router-link :to="{name:'Home'}" class="menu-logo"> 
							<img :src="isMobile == true?assetsPath+settingData.logo_mobile:assetsPath+settingData.logo_website" class="img-fluid" alt="Logo" >
						</router-link>
						<a id="menu_close" class="menu-close" href="javascript:void(0);" ref="closeMenu">
							<i class="fas fa-times"></i>
						</a>
					</div>
					<ul class="main-nav" >
						<li :class="{ active: routeName == 'Home'}" @click="changeScreen({name:'Home'})">
							<a href="javascript:;">HOME </a>
						</li>
						<li :class="{ active: routeName == 'BraiderList'}" @click="changeScreen({name:'BraiderList'})">
							<a href="javascript:;">Find A Stylist </a>
						</li>
						<li :class="{ active: routeName == 'BusinessRegister'}" v-if="loginedUser == null" @click="changeScreen({name:'BusinessRegister'})">
							<a href="javascript:;">Register My Business </a>
						</li>
						<li :class="{ active: (routeName == 'Dashboard' || routeName == 'BraiderDashboard') }" @click="changeScreen({name: loginedUser?.role_id == 2 ?'BraiderDashboard':'Dashboard'})" v-else>
							<a href="javascript:;">Dashboard </a>
						</li>

						<span class="login-desk">
						<li v-if="loginedUser" class="has-submenu login" style="float: right;">
						<a 
						href="#"
						class="login-btn"
						v-if="loginedUser">{{loginedUser?'Welcome '+loginedUser?.name:'Login / Signup'}}</a>
						<ul class="submenu">
						<li><a href="#!" @click="onLogout($event)">Logout</a></li>
						
						</ul>
						
						</li>
						<li v-else>
						<router-link 
						:to="{name:'Login'}" 
						class="login-btn"
						v-if="!loginedUser"
						>
						Login / Signup </router-link>
						</li>
						</span>
						
					</ul>
					<ul class="main-nav login">
						<li v-if="loginedUser" class="has-submenu login" style="float: right;">
							<a 
							href="#"
							class="login-btn"
							v-if="loginedUser">{{loginedUser?'Welcome '+loginedUser?.name:'Login / Signup'}} <i class="fas fa-chevron-down"></i></a>
							<ul class="submenu">
								<li><a href="#!" @click="onLogout($event)">Logout</a></li>
							
							</ul>
							
						</li>
						<li v-else>
							<router-link 
							:to="{name:'Login'}" 
							class="login-btn"
							v-if="!loginedUser"
							><i class="fa fa-user login-action"></i>
							Login / Signup </router-link>
						</li>
					</ul>
				</div>
			</div>
			
		</nav>
	</header>
  </div>
</template>
<script>

import Auth from '@/models/Auth'
import { settings } from '@/services/auth'
import AssetsPath from '@/utils/AssetsPath';

export default {
	name: 'Menu',
	data:() => {
		return {
			settingData:{},
			classFixed: ''
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
			
		},
		isMobile() {
            if( screen.width <= 760 ) {
                return true;
            }
            else {
                return false;
            }
        },
        assetsPath(){
			return AssetsPath;
		}
	},
	async mounted(){
			window.addEventListener('scroll', this.getScroll);
			await settings()
			.then(async res => this.settingData = await res.data)
			.catch(err => console.log(err));
	},
	methods:{
		changeScreen(path){
			
			this.$refs.closeMenu.click();
			this.$router.push(path);
		},
		onLogout(e){
			e.preventDefault()
			localStorage.removeItem('api_token');
			Auth.deleteAll();
			this.$router.push({ name: 'Home'});
		},
		getScroll(){
			if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
				this.classFixed = 'fixed-top'
			} else {
				this.classFixed = ''
			}
		}
	}
}

</script>
<style>
	.desktopLogo{
<<<<<<< HEAD
		height: auto;
		width: 30%;
=======
		height: 130px;
		width: 130px;
>>>>>>> 5f77874dcc2d338c2e272b2305b88a66131b92f3
		margin-top:0px;
	}
	.login-desk{
		display: none;
	}
@media screen and (max-width: 575.98px)
{
	.login{
		display: none;
	}
	.login-desk{
		display: inline-block;
	}
	.min-header .main-nav .login-desk li a{
		line-height: 1.5;
    padding: 15px 20px!important;
    color: #fff!important;
    font-size: 14px;
    font-weight: 500;
	}
	.navbar-brand.logo img{
		height: 80px;
	}
}

</style>
<template>
	<header class="header min-header">
		<nav class="navbar navbar-expand-lg header-nav">
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
			</div>
			<div class="main-menu-wrapper">
				<div class="menu-header">
					<router-link :to="{name:'Home'}" class="menu-logo"> 
						<img src="assets/logo.png" class="img-fluid" alt="Logo" >
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
					
				</ul>
			</div>
			<ul class="nav header-navbar-rht">
				<li>
					<router-link :to="{name:loginedUser == ''?'Login':(loginedUser == 'customer'?'Dashboard':'BraiderDashboard')}" class="login-btn"><i class="fa fa-user login-action"></i>
					{{loginedUser?'Welcome '+loginedUser?.name:'Login / Signup'}}  </router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script>

import Auth from '@/models/Auth'
import { settings } from '@/services/auth'
import AssetsPath from '@/utils/AssetsPath';

export default {
	name: 'Menu',
	data:() => {
		return {
			settingData:{}
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

			await settings()
			.then(async res => this.settingData = await res.data)
			.catch(err => console.log(err));
	},
	methods:{
		changeScreen(path){
			
			this.$refs.closeMenu.click();
			this.$router.push(path);
		},
	}
}
</script>
<style>
	.desktopLogo{
		height: 15%;
		width: 25%;
		margin-top:0px;
	}
</style>
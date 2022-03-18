<template>
	<MenuComponent/>
	<section class="section home-banner row-middle">
		<div class="inner-bg"></div>
		<div class="container">
			<div class="row">
				
				<div class="col-lg-12 col-md-12 banner-text " style="">
					<!-- <div class="banner-content"> -->
					<!-- 	<img src="assets/img/logospa.png" class="img-fluid" alt="Dream spa"> -->
						<h1 style="color: white; font-family:'Nunito Sans' !important;font-size: 60px;
    font-weight: 100;">
							{{ setting.sec1_title }}
						</h1>
						<p style="color: white; font-size: 30px;">{{ setting.sec1_subtitle }}</p>
						<div class="row">
							<div class="find_braider">
							<ul>
							<li>
								<router-link 
								style="font-family: 'Nunito Sans';background: #feaa00;
border-radius: 120px;font-weight: 600;font-size: 17px;text-transform: uppercase;
padding: 10px 55px;color: #8109a6;"
						:to="{name:'BraiderList'}" 
						class="btn btn-primary book-btn">Find A Braider</router-link>
							</li>
							<li>
								<router-link 
								style="font-family: 'Nunito Sans';background: #feaa00;
border-radius: 120px;font-weight: 600;font-size: 17px;text-transform: uppercase;
padding: 10px 55px;color: #8109a6;"
						:to="{name:'BusinessRegister'}" 
						class="btn btn-primary book-btn">Register My Business</router-link>
							</li>
							</ul>
							</div>
						</div>
					<!-- </div> -->
				</div>
			</div>
		</div>
	</section>

	<section class="about-two pt-5 pb-0" style=" padding-top: 0px !important;">
    <div class="container" style="padding-right: 0px; padding-left: 0px;">
      <div class="row" style="background:#ffffff;">
		<div class="col-md-6" style="margin: 2% 0px 2% 0px; padding: 0% 4% 0% 4%;">
         <p style="font-family:'Nunito Sans'; text-align: center !important; color:#7d00a4;">BRAIDSNOW.COM</p>
         <hr style="    background: #feaa00;    width: 20%;">
		<h3 style="font-size: 35px; color: rgb(125 0 164); text-align: center;  font-family: inherit;
    text-transform: uppercase; font-weight: 800;"> Who We Are</h3>
<p class="about-two__text" style="font-size: 20px; text-align: center; color: #7d00a4;">BraidsNow.com is a resource for all things Braids and Black Hair. This site was built for talented stylists who are all about their business and delivering excellent service to their clients and for a community of people who take pride in their hair and in themselves. We believe hair styles are a work of art and should be appreciated as such.</p>

<p style="font-size: 20px; text-align: center; color: #7d00a4;">This platform is an appointment booking and marketing tool for braiders and other stylists who specialize in Black Hair. This is also a place for clients to find new stylists who meet their needs all across the USA. Its about time for us to have one place where we can conveniently find stylists who specilize in our unique hair texture. We will be promoting the site to people in search of the perfect braider/stylist in their area. We will also provide style ideas as well as blogs, news articles and other resources. We’re passionate about braids and Black Hair and are creating a strong network for those in search of a bomb stylist.</p>

<p style="font-size: 20px; text-align: center; color: #7d00a4;">We consider ourselves beauty service "match-makers" and unity is one of our core values. We bring people together to help them achieve their goals and become more successful and beautiful. Strengthening the black economy, doing our part to give back to the community, and closing the racial wealth gap are some of our top priorities. Our site will continuously add new functionality and resources for users so please stay rockin’ with us because there is definitely much more in store!</p>
<div class="mt-5" style="text-align: center;">
	<a href="#" class="btn btn-primary book-btn" >Learn More</a>
</div>	
		</div>
    <div class="col-md-6" >
      <img src="assets/whowe.jpg" class="we_are">
   </div> 
    
    </div>  
      </div>
     </section>
	<!-- <section class="section services" v-if="setting.is_visible_service_section">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-7 mx-auto">
					<div class="section-header text-center">
					<h2 class="header-title" style="font-family:Arial,sans-serif !important;s">{{ setting.sec2_title }}</h2>
					<p class="header-subtitle">{{ setting.sec2_subtitle }}</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-right">
					<div class="owl-nav mynav"></div>
				</div>
				<div class="col-md-4" v-for="service in service" :key="service.id">
					
						
							<div class="item">
								<div class="services-item">
									<div class="img-part">
										<img :src="assetsUrl+service.image" class="img-fluid" 
										:alt="service.title">
									</div>
									<div class="content-part">
										<div class="content-text">
											<h3>{{ service.title }}</h3>
											<h4 class="title">{{ service.user_services_count}} Braiders</h4>
										</div>
									</div>
									<div class="hover">
										<div class="text booking-btn">
											<router-link :to="{name:'BraiderList'}">Book Now</router-link>
										</div>
									</div>
								</div>
							</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="see-all  text-center">
						<router-link :to="{name:'BraiderList'}" class="btn btn-primary book-btn">View All</router-link>
					</div>
				</div>
			</div>
		</div>
	</section>-->

	<section class="section treatments">
<div class="container">
<div class="row">
<div class="col-md-12">
<h3 style="font-weight: 400; font-size: 50px; color: #feaa00;font-family: 'Nunito Sans';">Why Join BraidsNow.com</h3>
	
		<p style="font-size: 25px;" v-for="(why,index) in why" :key="why.id">
		{{ ++index }}. {{why.content}}</p>
		
	
</div>
</div>
</div>
</section>

<section class="wite bacgrounder">
<div class="row">
				<div class="col-md-7 col-sm-12 col-12 mx-auto">
					<div class="section-header text-center" style="margin: 0px 0px;">
							<h2 class="header-title" style="font-size: 35px; color: rgb(125 0 164);
    text-align: center; font-family: inherit; text-transform: uppercase; font-weight: 800;">
    {{ setting.sec3_title }}</h2>
<p class="header-subtitle">{{ setting.sec3_subtitle }}</p>
</div>
</div>
</div>
	<section class="section theraphist">
		<div class="container">
			

<div class="row" style="margin-right: 6%; margin-left: 6%;padding-right: 0px;padding-left: 1px;">
	<div class="col-md-3" v-for="braider in topBraiders" :key="braider.id">
					
						
							<div class="item">
<div class="theraphist-item">
<div class="img-part">
<a href="theraphist-profile.html">
	<img :src="assetsUrl+braider.avatar" class="img-fluid" :alt="braider.name"></a>
</div>
<div class="profile-info">
<h3><a href="">{{ braider.name }}</a></h3>
<h4 class="title">
	<span v-for="(service,index) in braider.user_services" :key="service.id">{{service.service}}{{ (braider.user_services.length-1) == index?'':', '}} </span>
</h4>
<div class="rating">
	<i class="fa fa-star checked" v-for="i in braider.ratting" :key="i"></i>
	<i class="fa fa-star non-checked" v-for="j in 5 - braider.ratting" :key="j"></i>
</div>
</div>
<div class="profile-detail">

</div>
<div class="see-all  text-center">
	<router-link :to="{name:'Profile',params: {id: braider.id }}" class="btn btn-primary booking-btn">BOOK NOW</router-link>
</div>
</div>
</div>
	
				</div>
			
				
				
<div class="col-12" style="margin-top: 20px;">
<div class="see-all  text-center">
	<router-link :to="{name:'BraiderList'}" class="btn btn-primary book-btn">View All</router-link>
</div>
</div>
</div>
</div>
</section>
</section>
<section class="about-two pt-5 pb-0" style=" padding-top: 0px !important;">
    <div class="container" style="padding-right: 0px; padding-left: 0px;">
      <div class="row">
    <div class="col-md-6">
      <img src="assets/register.jpg" class="we_are">
    </div>  
    <div class="col-md-6" style="text-align: center; margin: 2% 0px 2% 0px; padding: 0% 4% 0% 4%;">
      <h3 style="font-size:35px;color: rgb(129 9 166);"> {{ whoWeData.title || "" }} </h3>
      <div style="font-size:20px;    color: rgb(255 255 255);">
<p class="about-two__text" v-html="whoWeData.description" style="font-size: 20px;text-align: center;
color: #7d00a4;"> </p>
</div>
<div class="mt-5">
	<a href="#" class="btn btn-primary book-btn">START YOUR FREE TRIAL</a>
</div>
   </div>  
    </div>  
      </div>
     </section>
<!-- <section class="section experience">
<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12 col-xl-12">
					<h2 class="headd">Please review the answers to Frequently Asked Questions listed below. If you still need additional information please email braidsnowdotcom@gmail.com. Thank you.</h2>
					<div class="accordion_one">
						<div class="panel-group">
							<div class="panel panel-default" v-for="faq in faq" :key="faq.id">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" :href="'#abc'+faq.id" aria-expanded="false" class="collapsed"> {{ faq.question }}
										</a>
									</h4>
								</div>
								<div :id="'abc'+faq.id" class="panel-collapse collapse" aria-expanded="false" role="tablist" style="height: 0px;">
									<div class="panel-body">
										<div class="text-accordion">
											<p> {{faq.answer}}</p>
										</div>
									</div>
								</div>
							</div>
						
						</div>
					</div>
				</div>
			</div>
		</div>
</section> -->

<!-- <section class="section treatments">
<div class="container">
<div class="row">
<div class="col-md-12">
<h3 style="color:#ffab00;font-size: 58px;padding-bottom: 0px;">Newsletter</h3>
<h5 style="color:white;padding-bottom: 10px;">Sign up below to receive latest updates and news</h5>
<div class="col-md-6 mx-auto">
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
</section> -->
<!-- <section class="section experience">
<div class="container">
<div class="row">

<div class="col-md-3 col-sm-6 col-xs-6 bg-right text-center">
<div class="img-part">
<img src="assets/img/towel-set-bathing-therapy.png" alt="towel set">
</div>
<div class="count-list">
<h2 class="count1">5000 +</h2>
</div>
<h4>THERAPHIES DONE</h4>
</div>


<div class="col-md-3 col-sm-6 col-xs-6 bg-right text-center">
<div class="img-part">
<img src="assets/img/beauty-care-therapy.png" alt="beauty care therapy">
</div>
<div class="count-list">
<h2 class="count2">{{ total.customer }} +</h2>
</div>
<h4>CUSTOMERS</h4>
</div>


<div class="col-md-3 col-sm-6 col-xs-6 bg-right text-center">
<div class="img-part">
<img src="assets/img/sss1.png" alt="treatment">
</div>
<div class="count-list">
<h2 class="count3">{{ total.appointment }} +</h2>
</div>
<h4>TREATMENTS</h4>
</div>


<div class="col-md-3 col-sm-6 col-xs-6 text-center">
<div class="img-part">
<img src="assets/img/tri-color-leaves.png" alt="Braiders">
</div>
<div class="count-list">
<h2 class="count4">{{ total.braider }} +</h2>
</div>
<h4>Braiders</h4>
</div>

</div>
</div>
</section> -->
<footer-component/> 
<Loader :isLoading="isLoading"/>
</template>

<script>
import MenuComponent from '@/components/Layout/Menu'
import { getTopBraider, getService, homepageSetting, whyJoin, totalStatic } from '@/services/homepage'
import { WhoWeAre } from '@/services/websiteServices';
import axios from 'axios';
import AssetsPath from '@/utils/AssetsPath'
import Loader from '@/components/Loader';
import FooterComponent from '@/components/Layout/Footer'
import { faq } from '@/services/faq';
import Swal from 'sweetalert2';

export default {
	name: 'Home',
	components:{MenuComponent,Loader,FooterComponent},
	data(){
		return {
			isLoading:true,
			topBraiders:[],
			assetsUrl:'',
			service:[],
			setting:{},
			why:[],
			total:{},
			faq:[],
			email:'',
			whoWeData:"",
			assetsPath: process.env.VUE_APP_ASSET_URL
		}
	},
	async mounted(){
		
		this.assetsUrl = AssetsPath;
		
		await getTopBraider().then(res => this.topBraiders = res.data.data)
		.catch(err => console.log(err))

		await getService().then(res => this.service = res.data.data)
		.catch(err => console.log(err))

		await whyJoin().then(res => this.why = res.data.data)
		.catch(err => console.log(err))

		await totalStatic().then(res => this.total = res.data.data)
		.catch(err => console.log(err))

		await homepageSetting().then(({data}) => this.setting = data.data)

		await faq().then(res => this.faq = res.data.data)
			.catch(err => console.log(err))

		await WhoWeAre().then(res => this.whoWeData = res.data)

		setTimeout(() => {
			this.isLoading = false;
		}, 1000);

	},
	methods:{
		isFileExists(url){

			axios.head(url).then(res => console.log(res)).catch(err => console.log(err))
		},
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

<style scoped>
	.accordion_one .panel-group {
    border: 1px solid #f1f1f1;
    margin: 40px;
}
.headd{
	font-size: 20px;
	text-align: center;
	color:#ffab00 ;
}
a:link {
    text-decoration: none
}

.accordion_one .panel {
    background-color: transparent;
    box-shadow: none;
    border-bottom: 0px solid transparent;
    border-radius: 0;
    margin: 0
}

.accordion_one .panel-default {
    border: 0
}

.accordion-wrap .panel-heading {
    padding: 0px;
    border-radius: 0px
}

h4 {
    font-size: 18px;
    line-height: 24px
}

.accordion_one .panel .panel-heading a.collapsed {
    color: #000;
    display: block;
    padding: 12px 30px;
    border-top: 0px
}

.accordion_one .panel .panel-heading a {
    display: block;
    padding: 12px 30px;
    background: #fff;
    color: #ffab00;
    border-bottom: 1px solid #f1f1f1
}

.accordion-wrap .panel .panel-heading a {
    font-size: 14px
}

.accordion_one .panel-group .panel-heading+.panel-collapse>.panel-body {
    border-top: 0;
    padding-top: 0;
    padding: 25px 30px 30px 35px;
    background: #fff;
    color: #999999;
}

.img-accordion {
    width: 81px;
    float: left;
    margin-right: 15px;
    display: block
}

.accordion_one .panel .panel-heading a.collapsed:after {
    content: "\2b";
    color: #999999;
    background: #f1f1f1
}

.accordion_one .panel .panel-heading a:after,
.accordion_one .panel .panel-heading a.collapsed:after {
    font-family: 'FontAwesome';
    font-size: 15px;
    width: 36px;
    line-height: 48px;
    text-align: center;
    background: #F1F1F1;
    float: left;
    margin-left: -31px;
    margin-top: -12px;
    margin-right: 15px
}

.accordion_one .panel .panel-heading a:after {
    content: "\2212"
}

.accordion_one .panel .panel-heading a:after,
.accordion_one .panel .panel-heading a.collapsed:after {
    font-family: 'FontAwesome';
    font-size: 15px;
    width: 36px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: #F1F1F1;
    float: left;
    margin-left: -31px;
    margin-top: -12px;
    margin-right: 15px
}
img.we_are{
	width:100%;
}
.banner-text{
	text-align:center; 
	padding-top: 18%;
}
.find_braider{margin: auto;}

.find_braider ul li{
	list-style: none;
	float: left;
	margin-left: 10px;
}

@media screen and (max-width: 575.98px)
{
	
	.banner-text h1{
		font-size: 30px;
	}
	.find_braider ul{padding-left: 0px;}
	.find_braider ul li{width: 100%;
    margin: auto;
		float: none;
		margin-top:10px;
		margin-left: 0px;
		
	}

	img.we_are{

		padding-left: 0;
		width: 100%;
		margin-bottom: 20px;
	}
}
</style>


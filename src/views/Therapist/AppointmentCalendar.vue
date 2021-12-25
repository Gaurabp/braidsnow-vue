<template>
	<MenuComponent/>
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
					<h2 class="breadcrumb-title"> Dashboard</h2>
				</div>
				
			</div>
		</div>
	</div>

	<div class="content">
		<div class="container">
			<div class="row">
				<Sidebar/>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="appointments" v-if="!auth.calender_url">
						<div class="cc">
							<div>
								<h3>Integrate Google Calendar</h3>
								<ol>
									<li>On your computer, open 
										<a href="https://calendar.google.com/" rel="noopener" target="_blank">Google Calendar</a>. You can’t share calendars from the Google Calendar app.
									</li>
									<li>On the left, find the “My calendars” section. To expand it, click the Down arrow <img src="//lh3.googleusercontent.com/Wu-YhgjMghnU7K9vrc1U30vzipw9NGy4xdAE2Mbrl4g4xn7xEmJEwf-ULoDIbVdtPyGm=w36-h36" width="18" height="18" alt="Down arrow" title="Down arrow" data-mime-type="image/png" data-alt-src="//lh3.googleusercontent.com/Wu-YhgjMghnU7K9vrc1U30vzipw9NGy4xdAE2Mbrl4g4xn7xEmJEwf-ULoDIbVdtPyGm">.
									</li>
									<li>Hover over the calendar you want to share, and click More <img src="//lh3.googleusercontent.com/WvTaGA1eYiCGTaFnwJLLYYBCOhlrcbyPLTT1_pbl8k61osZq4frh7hyCgF-ISKXqccQ=w36-h36" width="18" height="18" alt="More" title="More" data-mime-type="image/png" data-alt-src="//lh3.googleusercontent.com/WvTaGA1eYiCGTaFnwJLLYYBCOhlrcbyPLTT1_pbl8k61osZq4frh7hyCgF-ISKXqccQ"> <img src="//lh3.googleusercontent.com/d_R_SQfBTAje1U9H6Prg6ba1ci9O2eD4_woROSMiH5gOIcoaYtU1XqFcaRFjTRNi6A=w36-h36" width="18" height="18" alt="and then" title="and then" data-mime-type="image/png" data-alt-src="//lh3.googleusercontent.com/d_R_SQfBTAje1U9H6Prg6ba1ci9O2eD4_woROSMiH5gOIcoaYtU1XqFcaRFjTRNi6A"> <strong>Settings and sharing</strong>.
									</li>
									<li>Under “Integrate calendar,” copy <strong>Public URL to this calendar</strong>.</li>
								</ol>
							</div>
							<div class="no-margin">&nbsp;</div>
						</div>
						<div class="card-body">

							<form>
								<div class="col-md-12 col-lg-8">
										<div class="form-group">
											<label> </label>
											<div class="row">
												<div class="col-md-12 col-lg-12">
													<div class="form-group">
														<label>Public URL to this calendar</label>
														<input type="text" class="form-control" v-model="publicURLCalendar">
															<small v-if="publicURLCalendarError" class="form-text text-danger">
															{{publicURLCalendarError}}
														</small>
													</div>
												</div>
												
												
											</div>
										</div>
									</div>
								<div class="submit-section">
									<button type="button" @click="onUpdate" class="btn btn-primary submit-btn">Save Changes</button>
								</div>
							</form>

						</div>
					</div>
					<div class="appointments" v-else>
						<iframe :src="url" style="border: 0" width="1200" height="700" frameborder="0" scrolling="no"></iframe>
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
import Sidebar from './Sidebar'
import Auth from '@/models/Auth'
import {calendarURL} from '@/services/userService'
import Loader from '@/components/Loader';
import FooterComponent from '@/components/Layout/Footer'

export default {
	name: "Calendar",
	components:{
		MenuComponent,
		Sidebar,
		Loader,
		FooterComponent
	},
	data(){
		return{
			publicURLCalendar:'',
			publicURLCalendarError:'',
			url:'',
			isLoading:true,
		}
	},
	computed:{
		auth(){
			return Auth.query().first();
		}
	},
	mounted(){
		this.url = this.auth.calender_url;
		setTimeout(() => {
			this.isLoading = false;
		}, 1000);
	},
	methods:{
		onUpdate(){
			calendarURL(this.auth.api_token,{calendar_url:this.publicURLCalendar})
			.then(() =>{
				this.url = this.publicURLCalendar;
				window.location.reload();
			}).catch(err => {

				this.publicURLCalendarError =  err.response.data.errors.calendar_url[0];
			})
		}
	}
};
</script>


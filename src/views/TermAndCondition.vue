<template>
  <MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">{{ term.title }}</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">{{ term.title }}</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12 col-xl-12">
					<p v-html="term.description"></p>
				</div>
			</div>
		</div>
	</div>
	<footer-component/> 
	<Loader :isLoading="isLoading"/>
</template>
<script>
	import MenuComponent from '../components/Layout/Menu'
	import { getCms } from '@/services/cms'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'

	export default{
		name:'TermAndCondition',
		components:{MenuComponent,Loader,FooterComponent},

		data(){
			return{
				term:{},
				isLoading:true,
			}
		},

		async mounted(){
			
			await getCms().then(async res =>{
				this.term = (res.data.data.filter(cms => cms.id == 2))[0];
			})
			.catch(err => console.log(err))

			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		}
	}
</script>
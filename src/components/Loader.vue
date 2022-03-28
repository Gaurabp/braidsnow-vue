<template>
	<!-- <img src="assets\loader2.gif" alt=""> -->
	<div tabindex="0" class="vld-overlay is-active is-full-page" aria-busy="true" aria-label="Loading" style="" v-if="isLoading">
		<div class="vld-background" style="background: #fff; opacity: 1; backdrop-filter: blur(2px);">
		</div>
		<div class="vld-icon" style="text-align: center;margin: auto;">
			<img src="assets\newLoader.gif" class="img-fluid img-responsive"  style=" width: 50%;
  height: auto;position: relative;">
		</div>
	</div>
</template>

<script>
//import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
//import { ref } from 'vue';

export default {

  /*  setup() {
        //let isLoading = ref(true);
        const fullPage = ref(true);

        return {
           fullPage,
        }
    },*/
    //components: {Loading},
    props:{isLoading: Boolean}
}
</script>

<style>
	.vld-icon{margin-top:-15% ;}
@media screen and (max-width: 575.98px)
{
	.vld-icon{margin-top:-95% ;}
}
</style>


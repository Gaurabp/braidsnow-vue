<template>
		<loading 
		:active="isLoading" 
        :can-cancel="false"
        loader="bars"
        opacity="1"
        color="#f8ab03"
        height="200"
        width="200"
        :lock-scroll="true"
        background-color="white"
        :is-full-page="fullPage"></loading>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { ref } from 'vue';

export default {

    setup() {
        //let isLoading = ref(true);
        const fullPage = ref(true);

        return {
           fullPage,
        }
    },
    components: {Loading},
    props:{isLoading: Boolean}
}
</script>


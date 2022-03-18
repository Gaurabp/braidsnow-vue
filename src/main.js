import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import VueClipboard from 'vue-clipboard2'
import VueHtmlToPaper from './plugins/VueHtmlToPaper'


const app = createApp(App)
.use(VueClipboard)
.use(store)
.use(VueHtmlToPaper)
.use(router);

app.directive("highlight",{
	beforeMount(event){
		let code = (event.which) ? event.which : event.keyCode;
		if ((code < 48 || code > 57) && (code > 31)) {
			return false;
		}
		return true;
	}
});

app.mount("#app");

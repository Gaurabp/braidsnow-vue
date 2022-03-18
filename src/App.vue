<template>
	<router-view />
</template>

<script>

export default {
	name: 'App',
	mounted(){
		console.log(window.innerHeight)
	}
}
</script>

<style>
#app {
  font-family:Arial,sans-serif !important;
}
footer {
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    margin-top:11%;
}

</style>

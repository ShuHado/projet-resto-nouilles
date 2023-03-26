<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div class="text-center">
		<img id="my-logo" src="./assets/logo.png" alt="mon logo" />
	</div>
	<RouterView />
</template>

<style scoped>
#my-logo {
	width: 10%;
}
</style>

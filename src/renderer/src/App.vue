<template>
	<SideBar></SideBar>
	<main class="main-content">
		<MenuBar class="full-width"></MenuBar>
		<div class="rendered-content">
			<router-view />
		</div>
		<footer>
			This is the footer
		</footer>
	</main>
</template>
<script lang="ts" setup>
	// import MenuBar from "./components/MenuBar.vue";
	import MenuBar from "@renderer/components/MenuBar.vue";
	import SideBar from "@renderer/components/SideBar.vue";
	// import SideBar from "./components/SideBar.vue";
</script>
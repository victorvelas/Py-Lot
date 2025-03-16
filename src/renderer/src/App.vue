<script setup lang="ts">

	import { ref, onMounted } from "vue";

	import Versions from './components/Versions.vue'

	const appName = ref<string>("");	
	const appVersion = ref<string>("");	
	
	const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

	onMounted(async () => {
		appName.value = await window.electron.ipcRenderer.invoke('get-app-name');
		appVersion.value = await window.electron.ipcRenderer.invoke('get-app-version');
	});

	


</script>

<template>
	<img alt="logo" class="logo" src="./assets/electron.svg" />
	<div class="creator">Powered by electron-vite</div>
	<div class="text">
		Build an Electron app "{{ appName }} {{ appVersion }}" with
		<span class="vue">Vue</span>
		and
		<span class="ts">TypeScript</span>
	</div>
	<p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
	<div class="actions">
		<div class="action">
			<a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
		</div>
		<div class="action">
			<a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
		</div>
	</div>
	<Versions />
</template>

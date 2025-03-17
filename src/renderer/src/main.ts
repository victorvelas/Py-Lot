import { WebRouter } from '../src/config/router/WebRouter';
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, Pinia } from 'pinia';

// @ts-ignore
document.querySelector('title').innerText = await window.electron.ipcRenderer.invoke('get-app-name');
const pinia:Pinia = createPinia();
const vueApp = createApp(App);
vueApp.use(WebRouter);
vueApp.use(pinia);
vueApp.mount('#app');

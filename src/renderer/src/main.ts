import './assets/main.css'
// import './assets/css/static/style.css';

import { createApp } from 'vue'
import App from './App.vue'

// @ts-ignore
document.querySelector('title').innerText = await window.electron.ipcRenderer.invoke('get-app-name');

createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import { StatusBar } from '@capacitor/status-bar'


StatusBar.hide();

createApp(App).use(router, VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'

}).mount('#app')
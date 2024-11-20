// resources/js/app.js
import { createApp } from 'vue'
import './bootstrap';
import '../scss/app.scss';
import Welcome from './components/Welcome.vue'

const app = createApp({});

app.component('welcome', Welcome);

app.mount('#app');

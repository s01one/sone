import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './bootstrap'
import '../scss/app.scss'
import 'vue3-select/dist/vue3-select.css'
import Welcome from './components/Welcome.vue'
import Vue3Select from 'vue3-select'

// Импорт переводов
import en from './../lang/en.json'
import ru from './../lang/ru.json'
import de from './../lang/de.json'

// Определите доступные языки
const messages = {
    en,
    ru,
    de,
};

// Определите текущий язык с использованием localStorage
const savedLocale = localStorage.getItem('locale');
const locale = savedLocale || (navigator.language.startsWith('ru') ? 'ru' :
    navigator.language.startsWith('de') ? 'de' :
        'en'); // По умолчанию английский

const i18n = createI18n({
    locale,
    fallbackLocale: 'en',
    messages,
});

const app = createApp({});

app.use(i18n);

app.component('welcome', Welcome);
app.component('Vue3Select', Vue3Select);

app.mount('#app');

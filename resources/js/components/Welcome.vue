<!-- resources/js/components/PlaceholderPage.vue -->
<template>
    <div class="placeholder-container d-flex flex-column justify-content-center align-items-center text-center">
        <div class="row mb-2">
            <div class="col-12 col-sm-6 text-left">
                <a href="https://s01.one">
                    <img :src="logo" alt="sOne" class="logo" />
                </a>
            </div>
            <div class="col-12 col-sm-6 text-right">
                <div class="language-select">
                    <Vue3Select
                        v-model="selectedLanguage"
                        :options="languageOptions"
                        label="name"
                        :searchable="false"
                        :clearable="false"
                        @input="changeLanguage"
                        class="custom-select"
                    >
                        <!-- Кастомизация отображения опций -->
                        <template #option="{ option }">
                            <div class="d-flex align-items-center">
                                <span :class="option.flag" style="margin-right: 8px;"></span>
                                <span>{{ option.name }}</span>
                            </div>
                        </template>
                        <!-- Кастомизация отображения выбранного элемента -->
                        <template #singleLabel="{ option }">
                            <div class="d-flex align-items-center">
                                <span :class="option.flag" style="margin-right: 8px;"></span>
                                <span>{{ option.name }}</span>
                            </div>
                        </template>
                    </Vue3Select>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-sm-12">
                <div class="card border border-dark border-5 rounded rounded-5 p-3">
                    <div class="card-body">
                        <h1>{{ $t('coming_soon') }}</h1>
                        <p>{{ $t('message') }}</p>

                        <!-- Кнопки -->
                        <div class="mt-2 button-group mb-auto">
                            <div class="d-flex flex-column align-items-center">
                                <a href="#installation" class="btn btn-primary btn-lg mb-3">
                                    <i class="fas fa-download me-2"></i>
                                    {{ $t('installation') }}
                                </a>
                                <a href="#update" class="btn btn-success btn-lg mb-3">
                                    <i class="fas fa-rotate-right me-2"></i>
                                    {{ $t('update') }}
                                </a>
                                <a href="https://docs.s01.one" class="btn btn-info btn-lg">
                                    <i class="fas fa-book me-2"></i>
                                    {{ $t('documentation') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Информация о версиях -->
        <div class="version-info text-muted mt-5">
            <p>
                <span class="text-white">{{ $t('engine_version') }}: {{ engineVersion }}</span> <i class="fa-regular fa-star"></i>
                <span class="text-white">{{ $t('laravel_version') }}: {{ laravelVersion }}</span> <i class="fa-regular fa-star"></i>
                <span class="text-white">{{ $t('php_version') }}: {{ phpVersion }}</span>
            </p>
        </div>
    </div>
</template>

<script>
import Vue3Select from 'vue3-select'; // Импорт компонента vue3-select

export default {
    components: {
        Vue3Select, // Локальная регистрация компонента
    },
    props: {
        engineVersion: {
            type: String,
            required: true,
        },
        phpVersion: {
            type: String,
            required: true,
        },
        laravelVersion: {
            type: String,
            required: true,
        },
        languages: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            logo: '/assets/img/logo.png', // Убедитесь, что логотип доступен по этому пути
            selectedLanguage: this.$i18n.locale,
        };
    },
    computed: {
        languageOptions() {
            // Преобразуем объект языков в массив с необходимыми свойствами
            return Object.entries(this.languages).map(([code, name]) => {
                let flagCode;
                switch(code) {
                    case 'en':
                        flagCode = 'gb'; // Используйте 'us' или другой код страны по необходимости
                        break;
                    case 'de':
                        flagCode = 'de';
                        break;
                    case 'ru':
                        flagCode = 'ru';
                        break;
                    // Добавьте больше случаев для других языков
                    default:
                        flagCode = 'gb';
                }
                return { code, name, flag: `flag-icon flag-icon-${flagCode}` };
            });
        },
    },
    methods: {
        changeLanguage(code) {
            if (code && this.languageOptions.some(lang => lang.code === code)) {
                this.$i18n.locale = code;
                this.selectedLanguage = code;
                localStorage.setItem('locale', code);
            }
        },
    },
    mounted() {
        const savedLocale = localStorage.getItem('locale');
        if (savedLocale && this.languages.hasOwnProperty(savedLocale)) {
            this.changeLanguage(savedLocale);
        }
    },
};
</script>

<style scoped>
.placeholder-container {
    height: 100vh;
    padding: 20px;
    background: linear-gradient(180deg, #4f0606 10%, #171371);
    color: white;
    position: relative;
}

.fa-regular {
    color: #ffffff;
}

.logo {
    max-width: 200px;
    animation: fadeIn 2s ease-in-out;
}

.button-group .btn {
    width: 250px;
    height: 60px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, box-shadow 0.2s;
}

.button-group .btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.version-info {
    position: absolute;
    bottom: 20px;
    font-size: 1rem;
    color: #ffffff;
}

.version-info p i {
    margin-left: 10px;
    margin-right: 13px;
    color: #ffffff;
    font-size: 10px;
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}

/* Адаптивность для мобильных устройств */
@media (max-width: 576px) {
    .button-group .btn {
        width: 200px;
        height: 50px;
        font-size: 1rem;
    }

    .logo {
        max-width: 150px;
    }

    .language-select {
        width: 150px;
    }
}

/* Стили для vue3-select */
.language-select .vue3-select {
    width: 100%;
}

.language-select .vue3-select .select-wrapper {
    display: flex;
    align-items: center;
}

.language-select .vue3-select .select-wrapper .flag-icon {
    margin-right: 8px;
}
</style>

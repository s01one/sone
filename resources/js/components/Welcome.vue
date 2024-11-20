<!-- resources/js/components/PlaceholderPage.vue -->
<template>
    <div class="placeholder-container d-flex flex-column justify-content-center align-items-center text-center">
        <!-- Логотип -->
        <a href="https://s01.one">
            <img :src="logo" alt="sOne" class="logo mb-5" />
        </a>

        <!-- Кнопки -->
        <div class="mt-5 pt-5 button-group mb-auto">
            <div class="d-flex flex-column align-items-center">
                <a href="#installation" class="btn btn-primary btn-lg mb-3">
                    <i class="fas fa-download me-2"></i>
                    Установка
                </a>
                <a href="#update" class="btn btn-success btn-lg mb-3">
                    <i class="fas fa-rotate-right me-2"></i>
                    Обновление
                </a>
                <a href="https://docs.s01.one" class="btn btn-info btn-lg">
                    <i class="fas fa-book me-2"></i>
                    Документация
                </a>
            </div>
        </div>

        <!-- Информация о версиях -->
        <div class="version-info text-muted mt-5">
            <p>
                <span class="text-white">sOne {{ engineVersion }}</span> <i class="fa-regular fa-star"></i>
                <span class="text-white">Laravel {{ laravelVersion }}</span> <i class="fa-regular fa-star"></i>
                <span class="text-white">PHP {{ phpVersion }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
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
    },
    data() {
        return {
            logo: '/assets/img/logo.png', // Убедитесь, что логотип доступен по этому пути
        };
    },
};
</script>

<style scoped>
.placeholder-container {
    height: 100vh;
    padding: 20px;
    background: linear-gradient(180deg, #4f0606 10%, #171371);
    color: white;
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
}
</style>

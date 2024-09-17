<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <header class="container-fluid">
        <img class="decoration d-none d-md-block" src="../../assets/images/spaceInvaders.png" alt="">
        <img class="decoration small d-none d-md-block" src="../../assets/images/spaceInvaders.png" alt="">

        <nav class="navbar navbar-expand-md">
            <!-- Logo -->
            <div class="container-fluid justify-content-end">
                <div class="logo-container">
                    <router-link to="/" class="mx-5 d-flex align-items-center">
                        <img src="../../assets/images/BoolCoach Logo.png" alt="Boolcoach Logo">
                        <span>BoolCoach</span>
                    </router-link>
                </div>

                <!-- Hamburger menu per mobile -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item d-flex justify-content-end">
                            <router-link to="/search" class="nav-link">
                                <div class="circle d-flex justify-content-center align-items-center">
                                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="lens" />
                                </div>
                            </router-link>
                        </li>
                        <li class="nav-item d-flex justify-content-end">
                            <a href="http://127.0.0.1:8000/login" class="nav-link">
                                <button class="login-button">ACCESSO</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
/* Media query per mobile specifico */
@use'../../assets/styles/partials/variables' as *;
@media (max-width: 766.98px) {
    div.logo-container {
        width: 300px !important;
        height: 70px !important;

        span {
            display: none;
        }
    }

    .login-button {
        font-size: 1rem;
        padding: .3rem 1rem;
    }
}

.decoration {
    position: absolute;
    height: 2rem;
    top: 10px;
    left: 700px;
    transform: rotate(35deg);

    &.small {
        height: 1.5rem;
        top: 40px;
        left: 660px;
    }
}

/* Header */

div.logo-container {
    position: absolute;
    display: flex;
    top: -7px;
    left: -16px;
    height: 110px;
    width: 700px;
    background-image: url('../../assets/images/Untitled-1.svg');
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;

    img {
        height: 4rem;
        margin-right: 1rem;
    }

    span {
        font-size: 300%;
        text-shadow: $black-outline;
    }
}

header {
    position: relative;
    font-family: 'Jaro', sans-serif;
    background: #FF204E;
    border-bottom: 3px solid black;

    
    button{
        background-color: #7E3CC1;
        &:hover {
            scale: 1.05;
        }
    }
    .nav {
        display: flex;
        justify-content: end;
    }
    
    .navbar {
        margin: 0 !important;
    }
    
    .logo {
        height: 3rem;
    }
    
    .circle {
        height: 3rem;
        width: 3rem;
        background-color: #7E3CC1;
        border: black 3px solid;
        border-radius: 50%;
        &:hover {
            scale: 1.1;
        }
    }

    .login-button {
        font-size: 1.3rem;
        padding: .3rem 1.2rem;
    }
}
</style>
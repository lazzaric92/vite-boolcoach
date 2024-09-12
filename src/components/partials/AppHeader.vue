<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <header>
        <img class="decoration" src="../../assets/images/spaceInvaders.png" alt="">
        <img class="decoration small" src="../../assets/images/spaceInvaders.png" alt="">
        <nav>
            <!-- Logo -->
            <div class="logo-container">
                <router-link to="/" class="mx-5">
                    <img src="../../assets/images/BoolCoach Logo.png" alt="Boolcoach Logo">
                    <img class="header-link" src="../../assets/images/Asset 4.png" alt="Boolcoach Logo">
                </router-link>
            </div>

            <ul class="mx-5">

                <li>
                    <router-link to="/search" class="text-center text-decoration-none fw-bold text-white">
                        <div class="circle">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="lens" />
                        </div>

                    </router-link>
                </li>
                <li>
                    <router-link to="/search" class="ms-4 d-flex align-items-center">
                        <img class="header-link" src="../../assets/images/Asset 5.png" alt="Coaches">
                    </router-link>
                </li>
                <li>
                    <router-link to="/games" class="ms-4 d-flex align-items-center">
                        <img class="header-link" src="../../assets/images/Asset 6.png" alt="Boolcoach Logo">
                    </router-link>
                </li>
                <li>
                    <a href="http://127.0.0.1:8000/login" class="ms-4 d-flex align-items-center">
                        <img class="login-button" src="../../assets/images/LOGIN BUTTON.png" alt="Login">
                    </a>
                </li>

            </ul>



        </nav>
    </header>
</template>

<style scoped lang="scss">

.decoration {
    position: absolute;
    height: 2rem;
    top: 10px;
    left: 500px;
    transform: rotate(35deg);

    &.small {
        height: 1.5rem;
        top: 10px;
        left: 550px;
    }
}

header {
    height: 4rem;
    background: #FF204E;
    border-bottom: 3px solid black;
    display: flex;
    align-items: center;


    nav {
        font-family: Jaro;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        


        div.logo-container {
            position: relative;
            top: 17px;
            width: 500px;
            height: 100px;
            overflow: visible;
            background-image: url('../../assets/images/Untitled-1.svg');
            background-repeat: no-repeat;

            & * {
                margin-top: .3rem;
            }

            img {
                height: 4rem;
                margin-right: 1rem;
            }

            .header-link {
                height: 2.2rem;
            }
        }




        ul {

            display: flex;
            align-items: center;
            margin: 0;

            li {
                list-style-type: none;
                &:hover {
                    transition: all .2s ease-in-out;
                    transform: scale(1.15);
                }


                .lens {
                    font-size: 1.3rem;
                }

                .login-button {
                    height: 3rem;

                }

                .header-link {
                    height: 1.7rem;
                }
            }


        }

        .circle {
            height: 3rem;
            width: 3rem;
            background-color: #7E3CC1;
            border: black 3px solid;
            border-radius: 50%;
            padding: .8rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
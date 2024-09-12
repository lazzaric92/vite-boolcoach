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
                        <span class="header-link">coaches</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/games" class="ms-4 d-flex align-items-center">
                        <span class="header-link">Sponsorship</span>
                    </router-link>
                </li>
                <li>
                    <a href="http://127.0.0.1:8000/login" class="ms-4 d-flex align-items-center">
                        <button class="login-button">LOGIN</button>
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
                    padding: .3rem 1.2rem;
                    font-size: 1.3rem;
                }

                .header-link {
                    font-size: 2rem;
                    text-transform: uppercase;
                    text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
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
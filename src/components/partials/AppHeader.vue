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
        <nav>
            <!-- Logo -->
            <div class="logo-container">
                <router-link to="/" class="black-outline mx-5">
                    <img src="../../assets/images/BoolCoach Logo.png" alt="Boolcoach Logo">
                    <span>BoolCoach</span>
                </router-link>

            </div>

            <ul class="mx-5">

                <a>
                    <router-link to="/search"
                    class="text-center text-decoration-none fw-bold text-white mx-2"><font-awesome-icon
                    :icon="['fas', 'magnifying-glass']" class="lens" /></router-link>
                </a>
                <a>
                    <router-link to="/"
                        class="text-center text-decoration-none fw-bold text-white mx-2">
                    <span class="black-outline">Coach</span></router-link>
                </a>

            </ul>



        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    height: 3.5rem;
    background: #FF204E;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    display: flex;
    align-items: center;


    nav {
        font-family: Jaro;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;


        
        div.logo-container {
            position:relative;
            top: -7px;
            width: 500px;
            overflow: visible;
            background-image: url('../../assets/images/Untitled-1.svg');
            background-repeat: no-repeat;

            img {
                height: 4rem;
                margin-right: 1rem;
            }
        }

        .black-outline {
            color: #FFF;
            text-align: center;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #000;
            font-size: 2.2rem;
            text-shadow: 2px 2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, -2px 2px 0 #000;
            
        }
        ul {
            
        }

        .lens {
            font-size: 2rem;
        }
    }
}
</style>